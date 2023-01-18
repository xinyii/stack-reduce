# JDK

::: tip 提示  
1. LTS 代表长期维护版本，目前只有 8、11、17 是，只建议安装这些版本。
2. JDK 包括 JRE 和一些工具，程序只需要 JRE 即可运行，如果服务器资源有限，建议安装 JRE。  
:::

## OpenJDK

- [安装说明](https://openjdk.org/install/)
- [JDK 8 下载地址](https://jdk.java.net/java-se-ri/8-MR4)
- [JDK 17 下载地址](https://jdk.java.net/java-se-ri/17)

### CentOS Yum 方式安装

#### 1. 查看可安装的 JDK 版本

```shell
yum search jdk
```

#### 2. 安装指定的 JDK 版本

```shell
yum install java-1.8.0-openjdk
```

#### 3. 检查 JDK 版本

```shell
java --version
```

## OracleJDK

::: warning 注意  
OracleJDK 不免费商用，不要用于生产环境。  
:::

- [JDK 8 下载地址](https://www.oracle.com/java/technologies/downloads/#java8)
- [JDK 17 下载地址](https://www.oracle.com/java/technologies/downloads/#java17)
