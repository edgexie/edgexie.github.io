# stream

控制台输入

1. 使用 scanner

```java
import java.util.Scanner;

public class ScannerTest {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    while (scanner.hasNext()) {
      String next = scanner.next();
      System.out.println(next);
      if ("exit".equals(next)) {
        break;

      }
    }
    scanner.close();
  }

}

```

2. 使用 BufferedReader

read 读取字符。

```java
import java.io.*;
public class BRRead {
  public static void main(String[] args) throws IOException {
    char c;
    // 使用 System.in 创建 BufferedReader
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    System.out.println("输入字符, 按下 'q' 键退出。");
    // 读取字符
    do {
      c = (char) br.read();
      System.out.println(c);
    } while (c != 'q');
  }
}
```

readLine 读取一行。

```java
import java.io.*;

public class BRReadLines {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String str;
    do {
      str = br.readLine();
      System.out.println(str);
    } while (!str.equals("end"));
  }
}
```

## 文件

### 读文件 FileInputStream

- `public int read()throws IOException{}` 从输入流读取一个字节，返回当前读取的字节位置，如果到结尾则返回`-1`。

- `public int read(byte[] r) throws IOException{}` 从输入流读取 r.length 长度的字节，r 中存储读取的字节。返回读取的字节数。如果是文件结尾则返回-1。

```java
import java.io.*;

public class FileStreamTest {
  public static void main(String[] args) {
    try {
      FileInputStream input = new FileInputStream("test1.txt");
      int i = 0;
      i = input.read();
      while ((i = input.read()) != -1) {
        System.out.print((char) i);
      }
      input.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
    try {
      FileInputStream input = new FileInputStream("test.txt");
      int j = 0;
      byte[] b = new byte[12];
      input.read(b);
      System.out.println(new String(b));
      while (j < b.length) {
        System.out.println((char) b[j]);
        j++;
      }
      input.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
```

### 写文件 FileOutputStream

- `public void write(int b) throws IOException{}` 向输出流写入一个字节。
- `public void write(byte[] b) throws IOException{}` 向输出流写入 b.length 长度的字节。

```java
import java.io.*;

public class FileOutputStreamTest {
  public static void main(String[] args) {
    try {
      OutputStream os = new FileOutputStream("test2.txt");
      OutputStreamWriter writer = new OutputStreamWriter(os, "UTF-8");
      writer.append("Hello, World!那会");
      writer.close();
      os.close();
    } catch (IOException e) {
      System.out.println("IO error");
    }

  }
}
```
