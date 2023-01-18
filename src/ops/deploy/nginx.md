# Nginx

## CentOS

### 在线安装（推荐）

- [安装说明](http://nginx.org/en/linux_packages.html)

#### 1. 安装依赖

```shell
yum install yum-utils
```

#### 2. 创建 Yum Repository 配置文件

创建 `/etc/yum.repos.d/nginx.repo` 文件，添加以下内容：

```shell
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

#### 3. 安装 Nginx

> 默认安装最新稳定版。

```shell
yum install nginx
```
