# vscode 开发 java

熟悉前端的朋友都比较熟悉 vscode，`vscode` 是一个轻量级的 `IDE`，可以支持 `java` 开发。
利用 `vscode` 的强大功能，Java 开发人员可以获得一个出色的工具，既可以快速编辑代码，又可以进行完整的调试和测试周期。

[官方文档 overview](https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java)

## 安装插件

打开 vscode 搜索`extension pack for java`，这个插件是 `vscode` 开发 `java` 扩展包的集合，其中包括：

- Language Support for Java™ by Red Hat
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Project Manager for Java
- Visual Studio IntelliCode

在 vscode `ctrl+shift+p`，搜索：`java: extensions guide` 可以查看到已经安装的插件。

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p1.png)

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p2.png)

## 安装 jdk

如果系统中未安装 JDK 可以选择用 `extension pack for java` 插件去安装。在 vscode `ctrl+shift+p`，搜索：`java: install new jdk`。
![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p3.png)

## 创建工程

在 vscode `ctrl+shift+p`，搜索：`java: create java project`，插件会询问我们选择什么打包工具，这里先选择不使用打包工具。
![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p4.png)

然后插件会让选择一个文件夹，然后会询问我们 java 工程的名字，我们输入`my-java-app`。随后 vscode 会自动打开这个工程。

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p5.png)

## 运行

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p6.png)

## debug

点击 run 旁边的 debug 按钮

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p7.png)

## 手动导入 jar 包

以 `mysql-connector-j-8.4.0`为例

下载[mysql-connector-j-8.4.0.tar.gz](https://dev.mysql.com/downloads/connector/j/)

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p8.png)

解压后将`mysql-connector-j-8.4.0.jar` 文件复制到工程中的`lib`目录下，可以看到 `JAVA PROJECTS`中的`Referenced Libraries`中多了一个`mysql-connector-j-8.4.0.jar`，表明导入成功。

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p9.png)

## 使用 maven 工具构建项目

先决条件：系统中需有 maven 工具，如果没有，可以参考[maven](https://maven.apache.org/download.cgi)下载安装。下载压缩文件后解压，并添加到系统环境变量中。

查看系统中是否有 maven 工具：`mvn -v`

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p10.png)

安装依赖
![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p11.png)

写代码测试：

```java
package com.mx;

import java.sql.*;

public class MysqlTest {
  // MySQL 8.0 以上版本 - JDBC 驱动名及数据库 URL
  static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
  static final String DB_URL = "jdbc:mysql://localhost:3306/mx_user";

  // 数据库的用户名与密码，需要根据自己的设置
  static final String USER = "root";
  static final String PASS = "123456";

  public static void main(String[] args) throws Exception {
    Connection conn = null;
    Statement stmt = null;
    try {
      // 注册 JDBC 驱动
      Class.forName(JDBC_DRIVER);

      // 打开链接
      System.out.println("连接数据库...");
      conn = DriverManager.getConnection(DB_URL, USER, PASS);

      // 执行查询
      System.out.println(" 实例化Statement对象...");
      stmt = conn.createStatement();
      String sql;
      sql = "SELECT id, name, url FROM websites";
      ResultSet rs = stmt.executeQuery(sql);

      // 展开结果集数据库
      while (rs.next()) {
        // 通过字段检索
        int id = rs.getInt("id");
        String name = rs.getString("name");
        String url = rs.getString("url");

        // 输出数据
        System.out.print("ID: " + id);
        System.out.print(", 站点名称: " + name);
        System.out.print(", 站点 URL: " + url);
        System.out.print("\n");
      }
      // 完成后关闭
      rs.close();
      stmt.close();
      conn.close();
    } catch (SQLException se) {
      // 处理 JDBC 错误
      se.printStackTrace();
    } catch (Exception e) {
      // 处理 Class.forName 错误
      e.printStackTrace();
    } finally {
      // 关闭资源
      try {
        if (stmt != null)
          stmt.close();
      } catch (SQLException se2) {
      } // 什么都不做
      try {
        if (conn != null)
          conn.close();
      } catch (SQLException se) {
        se.printStackTrace();
      }
    }
    System.out.println("Goodbye!");
  }
}

```

运行：

![img](https://bucket.edgexie.top/for-blog/java/vscode-for-java/p12.png)
