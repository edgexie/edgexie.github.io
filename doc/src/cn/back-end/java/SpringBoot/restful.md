# restful 和静态资源

相关注解

- PathVariable 接收前端请求请求 path 中的参数
- RequestParam 接收前端请求请求参数
- RequestBody 接收前端请求请求体
- RequestHeader 接收前端请求请求头
- CookieValue 接收前端请求 cookie

## restful

在`/src/main/java/com/mx/spring_boot_starter/controllers`下新建`RestfulController`类

```java

package com.mx.spring_boot_starter.controllers;

import java.io.File;
import java.io.IOException;
import java.util.*;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
@RequestMapping("restful")
public class RestfulController {

  // 通过 PathVariable 和 RequestParam 注解获取参数
  @GetMapping("path-and-param/{id}")
  public String getMethodName(@RequestParam String name, @PathVariable int id) {
    return "Hello path and param" + ",name is :" + name + ",id is :" + id + ", 类型是" + this.getVariableType(id);
  }

  // 通过 RequestBody 和 RequestHeader 以及 CookieValue 注解获取参数

  @PostMapping("create")
  public String postMethodName(@RequestBody Map<String, Object> entity, @RequestHeader String token,
      @CookieValue String clientId) {
    return "entity is:" + entity.toString() + ",token is:" + token + ",clientId is:" + clientId;

  }

  // 文件上传
  @PostMapping("upload")
  public String upload(MultipartFile file) throws IOException {
    file.transferTo(new File("D:/物料/" + file.getOriginalFilename()));
    return "上传成功";
  }

  public final String getVariableType(Object var) {
    if (var instanceof Integer) {
      return "Integer";
    } else if (var instanceof Double) {
      return "Double";
    } else if (var instanceof String) {
      return "String";
    } else if (var instanceof Boolean) {
      return "Boolean";
    }
    // 可以添加更多的类型检查
    return var.getClass().getName(); // 输出不在上述列表中的其他类型
  }

}

```

### 测试

path 和 param 测试

![path 和 param 测试](https://bucket.edgexie.top/for-blog/java/spring-boot/p24-06-25-1.png)

body、header、cookie 测试

![body、header、cookie 测试](https://bucket.edgexie.top/for-blog/java/spring-boot/p24-06-25-2.png)

文件上传测试

![文件上传测试](https://bucket.edgexie.top/for-blog/java/spring-boot/p24-06-25-3.png)

## 静态资源

tips：现在静态资源都交予前端进行管理。

静态资源放在`/src/main/resources/static`下，新建`index.html`。

默认访问地址是`http://localhost:8080/index.html`，如果需要修改访问地址，可以在`application.properties`中配置。

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>hello spring boot</h1>
  </body>
</html>
```
