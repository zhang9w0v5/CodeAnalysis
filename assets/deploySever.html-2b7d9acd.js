import{_ as o,a as s,b as c}from"./planPage-27225805.js";import{_ as r}from"./start_scan_02-3fe00a0e.js";import{_ as n,a as h,b as u}from"./start_scan_04-65ab4d48.js";import{_ as p,r as _,o as m,c as E,a as e,b as a,d as l,w as d,e as t}from"./app-2a91d8ab.js";const b={},A=e("h1",{id:"部署-tca",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署-tca","aria-hidden":"true"},"#"),a(" 部署 TCA")],-1),v=e("br",null,null,-1),f=t(`<h2 id="docker快速部署" tabindex="-1"><a class="header-anchor" href="#docker快速部署" aria-hidden="true">#</a> Docker快速部署</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>仅适用于Docker部署体验，生产环境建议使用专业的 MySQL、Redis 等服务</p></div><h3 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h3><ul><li>系统环境 <ul><li>Linux、macOS、Windows</li><li>最低配置：2核4G内存、100G硬盘存储空间</li></ul></li><li>环境准备 <ul><li>Docker</li></ul></li><li>权限准备 <ul><li>需要开放80、8000端口的访问权限(80为TCA平台访问端口，8000为TCA Server访问端口)</li></ul></li></ul><h3 id="部署对象" tabindex="-1"><a class="header-anchor" href="#部署对象" aria-hidden="true">#</a> 部署对象</h3><p>Server、Web 与 Client</p><h3 id="操作说明" tabindex="-1"><a class="header-anchor" href="#操作说明" aria-hidden="true">#</a> 操作说明</h3><h4 id="首次启动操作" tabindex="-1"><a class="header-anchor" href="#首次启动操作" aria-hidden="true">#</a> 首次启动操作</h4><ol><li>进入CodeAnalysis工作目录（例如<code>~/CodeAnalysis</code>)，以下路径均为目录内的相对路径</li><li>执行命令：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="custom-container tip"><p class="custom-container-title">提示</p><ol><li>通过Docker部署默认会从DockerHub上拉取 <code>tencenttca/tca:latest </code>镜像</li><li>通过Docker部署默认会在当前根目录下的挂载三个路径： <ul><li><code>.docker_temp/logs</code>：容器内的<code>/var/log/tca/</code>，存放TCA平台的日输出文件；</li><li><code>.docker_temp/data</code>：容器内的<code>/var/opt/tca/</code>, 存放TCA平台的服务数据，主要是Mariadb、Redis；</li><li><code>.docker_temp/configs</code>：容器内的<code>/etc/tca</code>，存放TCA平台的配置文件，主要是<code>config.sh</code></li></ul></li></ol></div><h4 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h4><ol><li>更新代码</li><li>执行以下命令： <ul><li><code>TCA_IMAGE_BUILD=true ./quick_install.sh docker deploy</code>：重新构建并启动tca容器</li></ul></li></ol><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>TCA_IMAGE_BUILD=true</code>表示从本地构建TCA镜像运行</p></div><h4 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h4><p>如果已经在机器上执行过<code>docker deploy</code>，并保留容器数据的，可以执行以下命令启动容器，继续运行TCA</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> 停止容器</h4><p>如果容器正在运行，希望停止容器，可以运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="使用tca" tabindex="-1"><a class="header-anchor" href="#使用tca" aria-hidden="true">#</a> 使用TCA</h1><p>成功部署TCA后，请开始您的代码分析。</p><h2 id="进入平台页面" tabindex="-1"><a class="header-anchor" href="#进入平台页面" aria-hidden="true">#</a> 进入平台页面</h2><p>在浏览器输入<code>http://部署机器IP/</code>，点击立即体验，完成登录后即可跳转到团队列表页</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>默认平台登录账号/密码：CodeDog/admin</p><p>如部署过程中，已调整默认账号密码，请按照调整后的账号密码进行登录</p></div><h2 id="创建团队及项目" tabindex="-1"><a class="header-anchor" href="#创建团队及项目" aria-hidden="true">#</a> 创建团队及项目</h2><ul><li><p>完成团队创建</p></li><li><p>完成项目创建</p></li></ul><h2 id="登记代码库" tabindex="-1"><a class="header-anchor" href="#登记代码库" aria-hidden="true">#</a> 登记代码库</h2><p>登记代码库，输入代码库地址以及凭证信息等，完成代码库登记。</p><p><img src="`+o+'" alt="registerCodeRepo"></p><h2 id="创建分析项目" tabindex="-1"><a class="header-anchor" href="#创建分析项目" aria-hidden="true">#</a> 创建分析项目</h2><p><img src="'+r+'" alt="开始分析"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><ol><li>用户可选择使用分析方案模板，或创建分析方案的方式，利用方案的分析配置进行代码分析。</li><li>点击确认时，平台会首先创建该代码库的分析方案，然后根据代码库分支、当前分析方案创建分析项目。</li></ol></div><h3 id="分析方案说明" tabindex="-1"><a class="header-anchor" href="#分析方案说明" aria-hidden="true">#</a> 分析方案说明</h3>',33),g=e("li",null,[e("p",null,"分析方案是用于对代码库进行分析的一套配置集合。")],-1),k=e("p",null,[e("img",{src:s,alt:"creataAnalysePlan"})],-1),x={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"提示",-1),B=e("p",null,[e("img",{src:c,alt:"planPage"})],-1),D=e("h2",{id:"执行代码分析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#执行代码分析","aria-hidden":"true"},"#"),a(" 执行代码分析")],-1),T=e("p",null,[a("初始化创建项目后，可通过 "),e("code",null,"在线分析"),a(" 或 "),e("code",null,"客户端分析"),a(" 来启动代码分析。")],-1),y=e("p",null,[e("img",{src:n,alt:"代码分析"})],-1),S={class:"custom-container tip"},L=e("p",{class:"custom-container-title"},"提示",-1),q=e("li",null,[a("TCA推荐使用"),e("code",null,"在线分析"),a("，您可根据具体使用场景选择其一。")],-1),z=e("li",null,[e("code",null,"在线分析"),a("表示配置代码库链接后，TCA客户端拉取代码后进行分析；"),e("code",null,"客户端分析"),a("在配置本地待扫描代码路径后，无需代码拉取直接分析本地代码。")],-1),F=e("code",null,"在线分析",-1),I=e("code",null,"客户端分析",-1),R=t('<h2 id="查看分析历史" tabindex="-1"><a class="header-anchor" href="#查看分析历史" aria-hidden="true">#</a> 查看分析历史</h2><p>分析结束后，数据会上报到服务端。可进入分析历史页面查看分析记录以及分析结果。</p><p><img src="'+h+'" alt="分析历史"></p><h2 id="查看分析概览" tabindex="-1"><a class="header-anchor" href="#查看分析概览" aria-hidden="true">#</a> 查看分析概览</h2>',4),w=e("p",null,[e("img",{src:u,alt:"分支概览"})],-1);function G(M,N){const i=_("RouterLink");return m(),E("div",null,[A,e("p",null,[a("TCA提供部署脚本，支持一键式快速部署Server、Web、Client。"),v,a(" 脚本共提供三种部署方式：Docker部署(推荐)、"),l(i,{to:"/zh/quickStarted/dockercomposeDeploy.html"},{default:d(()=>[a("Docker-Compose部署")]),_:1}),a("、"),l(i,{to:"/zh/quickStarted/codeDeploy.html"},{default:d(()=>[a("源码部署")]),_:1}),a("，可根据您的具体使用场景任意选择其一进行部署。")]),f,e("ul",null,[g,e("li",null,[e("p",null,[a("更多分析方案配置可查阅"),l(i,{to:"/zh/guide/%E5%88%86%E6%9E%90%E6%96%B9%E6%A1%88/%E5%9F%BA%E7%A1%80%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE.html"},{default:d(()=>[a("帮助文档-分析方案")]),_:1})])])]),k,e("div",x,[C,e("p",null,[a("本次部署会默认启动运行环境为「Codedog_Linux」的客户端，若需扩展更多运行环境，详见客户端"),l(i,{to:"/zh/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.html"},{default:d(()=>[a("常驻节点分析")]),_:1})])]),B,D,T,y,e("div",S,[L,e("ul",null,[q,z,e("li",null,[F,a("与"),I,a("具体详情及配置参考"),l(i,{to:"/zh/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E9%85%8D%E7%BD%AE%E8%AF%A6%E6%83%85.html"},{default:d(()=>[a("TCA客户端配置详情")]),_:1})])])]),R,e("p",null,[a("分析结束后，进入分支概览可以查看该分支指定分析方案的概览数据以及 "),l(i,{to:"/zh/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C%E6%9F%A5%E7%9C%8B.html"},{default:d(()=>[a("问题列表")]),_:1}),a(" 等。")]),w])}const H=p(b,[["render",G],["__file","deploySever.html.vue"]]);export{H as default};