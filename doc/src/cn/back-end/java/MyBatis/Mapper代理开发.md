# 代理开发

痛点：存在硬编码，没有 IDE 提示、自动补全、代码检查。

代理开发：通过代理类，实现接口，实现接口方法，通过接口方法调用 Mapper 方法。

## 创建代理接口

在 `src/main/java/com/mx`下创建 `mappers`文件夹，随后在其中创建`WebsiteMapper.java`

```java
// src/main/java/com/mx.pojo 中的 Website.java
package com.mx.pojo;

public class Website {
  private int id;
  private String name;
  private String url;
  private int alexa;
  private char[] country;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public int getAlexa() {
    return alexa;
  }

  public void setAlexa(int alexa) {
    this.alexa = alexa;
  }

  public char[] getCountry() {
    return country;
  }

  public void setCountry(char[] country) {
    this.country = country;
  }
}

// WebsiteMapper.java
package com.mx.mappers;

import com.mx.pojo.Website;
import java.util.List;

public interface WebsiteMapper {
  List<Website> selectAll();  // 函数名需与Mapper.xml中的id一致
}
```

## WebsiteMapper.xml

在`src/main/resources`下创建`com/mx/mappers`文件夹，随后在其中创建`WebsiteMapper.xml`。

`WebsiteMapper.xml` 在 `com/mx/mappers` 文件夹下不是必须，这里只做规范约定。

注意：命名空间必须与接口的全路径一致。 id 与接口方法名一致。 resultType 与接口方法的返回值类型一致。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.mx.mappers.WebsiteMapper">
  <select id="selectAll" resultType="com.mx.pojo.Website"> select * from websites </select>
</mapper>
```

## 修改 mybatis-config.xml

使用包扫描的方式简化 SQL 映射文件的加载。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "https://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC" />
      <dataSource type="POOLED">
        <property name="driver" value="com.mysql.cj.jdbc.Driver" />
        <property name="url" value="JDBC:mysql://localhost:3306/mx" />
        <property name="username" value="root" />
        <property name="password" value="nrglmsz" />
      </dataSource>
    </environment>
  </environments>
  <mappers>
    <mapper resource="WebsiteMapper.xml" />  // [!code --]
    <package name="com.mx.mappers" />  // [!code ++]
  </mappers>
</configuration>
```

## 测试

```java
package com.mx;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.mx.mappers.WebsiteMapper;
import com.mx.pojo.Website;

public class App {
  public static void main(String[] args) throws IOException {
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    List<Website> websites = sqlSession.selectList("com.mx.mappers.WebsiteMapper.selectAll");   // [!code --]
    websites.forEach((e) -> {   // [!code --]
      System.out.println(e.getName());  // [!code --]
    }); // [!code --]
    WebsiteMapper mapper = sqlSession.getMapper(WebsiteMapper.class); // [!code ++]
    List<Website> websites2 = mapper.selectAll(); // [!code ++]
    websites2.forEach((e) -> {  // [!code ++]
        System.out.println(e.getName());  // [!code ++]
    }); // [!code ++]

    sqlSession.close();
  }
}
```
