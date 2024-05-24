# Script

## Java 独立程序启停脚本

支持命令

```shell
./myapp.sh start
./myapp.sh stop
./myapp.sh restart
./myapp.sh status
```

脚本内容

```shell
#!/bin/bash

# 配置部分
JAVA_CMD="/path/to/java"  # Java 命令路径
JAR_FILE="/path/to/myapp.jar"  # JAR 文件路径
PID_FILE="/path/to/myapp.pid"  # PID 文件路径
LOG_FILE="/path/to/myapp.log"  # 日志文件路径

# 检查 PID 文件是否存在以及是否包含运行中的进程
check_pid() {
  if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if [ -d "/proc/$PID" ]; then
      return 0
    else
      rm -f "$PID_FILE"
    fi
  fi
  return 1
}

# 启动函数
start() {
  if check_pid; then
    echo "应用程序已经在运行 (PID: $(cat $PID_FILE))"
  else
    nohup $JAVA_CMD -jar $JAR_FILE > $LOG_FILE 2>&1 &
    echo $! > $PID_FILE
    echo "应用程序启动成功 (PID: $(cat $PID_FILE))"
  fi
}

# 停止函数
stop() {
  if check_pid; then
    kill -9 $(cat $PID_FILE)
    rm -f $PID_FILE
    echo "应用程序已停止"
  else
    echo "应用程序未运行"
  }
}

# 重启函数
restart() {
  stop
  start
}

# 用法说明
usage() {
  echo "用法: $0 {start|stop|restart|status}"
  exit 1
}

# 状态检查函数
status() {
  if check_pid; then
    echo "应用程序正在运行 (PID: $(cat $PID_FILE))"
  else
    echo "应用程序未运行"
  }
}

# 脚本主逻辑
case "$1" in
  start)
    start
    ;;
  stop)
    stop
    ;;
  restart)
    restart
    ;;
  status)
    status
    ;;
  *)
    usage
    ;;
esac

```
