import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.BMY8ZfS1.js";const y=JSON.parse('{"title":"Script","description":"","frontmatter":{},"headers":[],"relativePath":"ops/deploy/script.md","filePath":"ops/deploy/script.md","lastUpdated":1721293084000}'),p={name:"ops/deploy/script.md"},h=n(`<h1 id="script" tabindex="-1">Script <a class="header-anchor" href="#script" aria-label="Permalink to &quot;Script&quot;">​</a></h1><h2 id="java-独立程序启停脚本" tabindex="-1">Java 独立程序启停脚本 <a class="header-anchor" href="#java-独立程序启停脚本" aria-label="Permalink to &quot;Java 独立程序启停脚本&quot;">​</a></h2><p>支持命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./myapp.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./myapp.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./myapp.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./myapp.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><p>脚本内容</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置部分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JAVA_CMD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/java&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Java 命令路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JAR_FILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/myapp.jar&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # JAR 文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PID_FILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/myapp.pid&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # PID 文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LOG_FILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/myapp.log&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 日志文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查 PID 文件是否存在以及是否包含运行中的进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">check_pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PID_FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PID_FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/proc/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PID_FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> check_pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;应用程序已经在运行 (PID: $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PID_FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">))&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    nohup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $JAVA_CMD </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-jar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $JAR_FILE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $LOG_FILE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;&amp;1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PID_FILE</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;应用程序启动成功 (PID: $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PID_FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">))&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> check_pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PID_FILE)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PID_FILE</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;应用程序已停止&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;应用程序未运行&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用法说明</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;用法: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {start|stop|restart|status}&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 状态检查函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> check_pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;应用程序正在运行 (PID: $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PID_FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">))&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;应用程序未运行&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 脚本主逻辑</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">  start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">  stop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">  restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    restart</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">  status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    status</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  *)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    usage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">esac</span></span></code></pre></div>`,6),l=[h];function k(t,e,r,F,E,d){return a(),i("div",null,l)}const c=s(p,[["render",k]]);export{y as __pageData,c as default};
