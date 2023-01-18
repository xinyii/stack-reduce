# NodeJS

## Linux

### NVM 安装（推荐）

> Node Version Manager - NodeJS 多版本管理器。

- [安装说明](https://github.com/nvm-sh/nvm#installing-and-updating)

#### 1. 安装 NVM

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

或

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

#### 2. 安装 NodeJS

安装最新版本：

```shell
nvm install node
```

安装指定版本：

```shell
nvm install 14.7.0
```

#### 3. 检查 NodeJS 版本

```shell
node -v
```
