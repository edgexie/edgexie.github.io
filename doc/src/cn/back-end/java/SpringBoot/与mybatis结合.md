# 与 mybatis 接口

步骤：

1. 添加`mybatis-spring-boot-starter`依赖
2. 配置数据库连接信息和`mybatis`
3. 在`src/main/java/com/mx/spring_boot_starter/pojo`下新建实体类`User.java`
4. 在`src/main/java/com/mx/spring_boot_starter/mapper`下新建映射类`UserMapper.java`
5. 在`src/main/resources/mapper/`下新建映射文件`UserMapper.xml`
6. 在`src/main/java/com/mx/spring_boot_starter/service`下新建业务类`UserService.java`
7. 在`src/main/java/com/mx/spring_boot_starter/controller`下新建控制类`UserController.java`
8. 在启动类`SpringBootStarterApplication.java`中，添加`MapperScan`注解
9. 启动项目，访问`http://localhost:8080/user`

## 添加依赖

```xml
<dependency>
  <groupId>org.mybatis.spring.boot</groupId>
  <artifactId>mybatis-spring-boot-starter</artifactId>
  <version>3.0.3</version>
</dependency>

<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.18.32</version>
</dependency>
```

## 配置数据库连接信息和`mybatis`

```yml
spring:
  application:
    name: spring-boot-starter-web-demo # 应用名称
  datasource:
    type: com.zaxxer.hikari.HikariDataSource # 使用Hikari连接池
    driver-class-name: com.mysql.cj.jdbc.Driver # 数据库驱动
    url: jdbc:mysql://localhost:3306/mx?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai # 数据库连接地址
    username: root
    password: 123456

mybatis:
  type-aliases-package: com.mx.spring_boot_starter.pojo # 扫描实体类
  mapper-locations: classpath:mapper/*.xml # 扫描映射文件
```

## 新建实体类`User.java`

```java
package com.mx.spring_boot_starter.pojo;

import lombok.Data;

@Data
public class User {
  private int id;
  private String username;
  private String email;
  private String password;
  private int age;
  private String gender;
  private boolean is_active;
  private int department_id;
}
```

## 新建映射类`UserMapper.java`

```java
package com.mx.spring_boot_starter.mapper;

import com.mx.spring_boot_starter.pojo.User;
import java.util.List;

public interface UserMapper {

  List<User> getAll();
}
```

## 新建映射文件`UserMapper.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.mx.spring_boot_starter.mapper.UserMapper">
  <select id="getAll" resultType="User"> select * from user </select>
</mapper>
```

## 业务类`UserService.java`

```java
package com.mx.spring_boot_starter.service;

import com.mx.spring_boot_starter.mapper.UserMapper;
import com.mx.spring_boot_starter.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserService {

  @Autowired
  private UserMapper userMapper;

  public List<User> getAll() {

    return userMapper.getAll();
  }
}
```

## 新建控制类`UserController.java`

```java
package com.mx.spring_boot_starter.controllers;

import com.mx.spring_boot_starter.pojo.User;
import com.mx.spring_boot_starter.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/user")
  public List<User> getAll() {
    return userService.getAll();
  }
}
```

## 添加`MapperScan`注解

```java
package com.mx.spring_boot_starter;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// 表明当前项目为SpringBoot项目， 启动类， 启动SpringBoot项目
@SpringBootApplication
@MapperScan("com.mx.spring_boot_starter.mapper") // 扫描mapper
public class SpringBootStarterApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootStarterApplication.class, args);
	}

}

```

## 访问
