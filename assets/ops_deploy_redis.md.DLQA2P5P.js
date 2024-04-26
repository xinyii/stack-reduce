import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.B8NZFltm.js";const F=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[],"relativePath":"ops/deploy/redis.md","filePath":"ops/deploy/redis.md","lastUpdated":1714128467000}'),t={name:"ops/deploy/redis.md"},l=e(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><ul><li><a href="https://redis.io/docs/getting-started/installation/" target="_blank" rel="noreferrer">安装说明</a></li></ul><h2 id="centos-7" tabindex="-1">CentOS 7 <a class="header-anchor" href="#centos-7" aria-label="Permalink to &quot;CentOS 7&quot;">​</a></h2><h3 id="yum-安装" tabindex="-1">YUM 安装 <a class="header-anchor" href="#yum-安装" aria-label="Permalink to &quot;YUM 安装&quot;">​</a></h3><h4 id="_1-启用-remi-存储库" tabindex="-1">1. 启用 Remi 存储库 <a class="header-anchor" href="#_1-启用-remi-存储库" aria-label="Permalink to &quot;1. 启用 Remi 存储库&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> epel-release</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum-utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://rpms.remirepo.net/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum-config-manager</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remi</span></span></code></pre></div><h4 id="_2-安装-redis" tabindex="-1">2. 安装 Redis <a class="header-anchor" href="#_2-安装-redis" aria-label="Permalink to &quot;2. 安装 Redis&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div><h4 id="_3-启动-redis" tabindex="-1">3. 启动 Redis <a class="header-anchor" href="#_3-启动-redis" aria-label="Permalink to &quot;3. 启动 Redis&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div><p>设置开机自启：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div><p>查看运行状态：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div>`,14),n=[l];function h(p,r,d,o,k,c){return i(),a("div",null,n)}const u=s(t,[["render",h]]);export{F as __pageData,u as default};
