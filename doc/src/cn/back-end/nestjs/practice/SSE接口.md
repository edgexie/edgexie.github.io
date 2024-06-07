# nestjs 实现 SSE 接口

动机 24-06-07

SSE(Server-Sent Events) 是一种用于在浏览器中从服务器接收实时数据的技术。它允许服务器向客户端发送事件，客户端可以实时接收并处理这些事件。

在很多情况下，SSE 可以比 WebSocket 更适合实时数据传输，因为它不需要客户端主动发起连接，并且可以节省服务器资源。

在很多 AI 对话工具中，SSE 可以用于实时获取模型的预测结果。

## nest 代码实现

::: code-group

```ts [sse.controller]
import { Controller, Get, Param, Res, Sse, Response } from '@nestjs/common';
import { SseService } from './sse.service';
import { Observable, interval, map, takeUntil } from 'rxjs';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}
  @Get('use-get-decorator')
  async sseEndpoint(@Response() res) {
    let count = 0;
    res.set({
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
    });

    const timer = setInterval(() => {
      if (count === 10) {
        clearInterval(timer);
        res.end();
      }
      this.sseService.sendSseMessage(res, {
        message: `收到第 ${count++} 条消息`,
      });
    }, 1000);

    res.on('close', () => {
      console.log('客户端断开了');
      res.end();
    });
  }

  @Sse('use-sse-decorator')
  sendServerMessage(
    @Param() params,
    @Res() res
  ): Observable<{ message: string }> {
    let count = 0;
    const close$ = new Observable((observer) => {
      res.on('close', () => {
        observer.next();
        observer.complete();
        console.log('客户端断开了');
      });
    });
    const observable$ = interval(1000).pipe(
      map(() => ({ message: `收到第 ${count++} 条消息` })),
      takeUntil(close$)
    );
    return observable$;
  }
}
```

```ts [sse.service]
import { Injectable } from '@nestjs/common';
import { Response } from 'express';
@Injectable()
export class SseService {
  sendSseMessage(res: Response, data: any) {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }
}
```

:::

## 前端代码实现

监听事件 `new EventSource()`

- open 事件：当连接成功时触发
- message 事件：当接收到消息时触发
- error 事件：当发生错误时触发

```js
const sse = new EventSource('http://localhost:3000/sse/use-get-decorator');
// const sse = new EventSource('http://localhost:3000/sse/use-sse-decorator');
sse.onopen = function (e) {
  console.log('open', e);
};
sse.onmessage = function (e) {
  console.log('message', e.data); // 打印接收到的序列化字符串
};
sse.onerror = function (e) {
  console.log('error', e);
};
```

![img](http://bucket.edgexie.top/for-blog/nestjs/p15.jpg)
