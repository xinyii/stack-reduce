# Redis

- [安装说明](https://redis.io/docs/getting-started/installation/)

## CentOS 7

### YUM 安装

#### 1. 启用 Remi 存储库

```shell
yum install epel-release yum-utils
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi
```

#### 2. 安装 Redis

```shell
yum install redis
```

#### 3. 启动 Redis

```shell
systemctl start redis
```

设置开机自启：

```shell
systemctl enable redis
```

查看运行状态：

```shell
systemctl status redis
```
