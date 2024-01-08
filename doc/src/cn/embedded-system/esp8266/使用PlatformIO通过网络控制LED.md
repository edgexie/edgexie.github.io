> 通过 HTTP POST 请求控制 MCU 上的内置 LED 灯

usb 转 串口 `ch340h`官方[驱动下载地址]()<br />本文将学到

- platform io 的简单使用
- esp8266 使能一个 GPIO 为输出状态
- esp8266 的串口输出
- esp8266 的无线网连接
- eps8266 的 web service
- 一款好用的 rest client 插件

## 新建项目

![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-1.png)<br />现在平台是 NodeMCU 1.0，选择一个自己的目录存储项目。<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-2.png)<br />需要等一段时间，在这个期间，<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-3.png)<br />用 VSCODE 打开这个目录。<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-4.png)<br />看到工程目录如下<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-5.png)<br />其中 `main.cpp`是程序的入口文件，`lib`文件夹存放库文件。`platformio.ini`是`platformio`的配置文件。

## 编写代码

控制 LED 灯的程序：

```cpp
#include <Arduino.h>
#include <ESP8266WebServer.h> //  ESP8266WebServer库
#include <ESP8266WiFi.h>

ESP8266WebServer server(80);

// 登录wifi
void loginWifi();

// 初始化webserver
void webServerInit();

// 初始化的生命周期
void setup() {
  Serial.begin(9600); // 使串口工作在9600波特率
  // 使内置LED为输出状态
  pinMode(LED_BUILTIN, OUTPUT);
  loginWifi();

  // 初始化webserver
  webServerInit();
}

// 循环执行
void loop() {
  server.handleClient(); // web server 监听浏览器请求
}

/***************************** wifi 初始化*/
void loginWifi() {
  const char *ssid = "xie_share";
  const char *password = "pppppppp";
  WiFi.begin(ssid, password);

  // 串口打印连接信息
  Serial.print("正在连接：");
  Serial.print(ssid);
  Serial.println(" ...");

  int i = 0;
  while (WiFi.status() != WL_CONNECTED) { // WiFi.status()函数的返回值连接状态
    delay(1000); // 如果WiFi连接成功则返回值为WL_CONNECTED
    Serial.print(i++);
    Serial.print(' ');
  }

  Serial.println(""); // W连接成功后
  Serial.println("连接成功。");
  Serial.print(
      "node mcu的 IP 地址是:"); // 同时还将输出NodeMCU的IP地址。这一功能是通过调用
  Serial.println(
      WiFi.localIP()); // WiFi.localIP()函数来实现的。该函数的返回值即NodeMCU的IP地址。
}

/************************ web server 初始化*/
void handleRoot() { server.send(200, "text/plain", "hello world"); }
void handleOptions() {
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");
  server.sendHeader("Access-Control-Max-Age", "1728000");
  server.send(200);
}
// 控制LED
void handleLED() {
  digitalWrite(LED_BUILTIN,
               !digitalRead(LED_BUILTIN)); // 改变LED的点亮或者熄灭状态
  server.send(200, "text/plain", "操作成功");
}
void webServerInit() {
  server.enableCORS(true);              // 允许跨域访问
  server.begin();                       // 启动网站服务
  server.on("/", HTTP_GET, handleRoot); // GET 访问 / 的执行函数

  server.on("/led", HTTP_OPTIONS,
            handleOptions); // 跨域时会先进行一次 OPTIONS
                            // 请求，根据响应头，浏览器判断服务端是否允许跨域。
  server.on("/led", HTTP_POST,
            handleLED); // 设置处理LED控制请求的函数'handleLED'
}

```

装好驱动后，可以在 vscode 中选择开发板对应的驱动。<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-6.png)

## 上传程序

点击向右这个箭头上传程序。<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-7.png)<br />控制台看到这个提示表示成功。<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-8.png)

## 测试

这里推荐使用`REST Client`vscode 插件 来测试 HTTP 接口。<br />![image.png](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-9.png)

测试效果<br />![test9.gif](https://bucket.edgexie.top/for-blog/esp8266/esp8266-led-10.gif)
