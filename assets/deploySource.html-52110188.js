import{_ as e,o as a,c as i,e as s}from"./app-2a91d8ab.js";const d={},o=s(`<h1 id="vm-部署文档" tabindex="-1"><a class="header-anchor" href="#vm-部署文档" aria-hidden="true">#</a> VM 部署文档</h1><h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h2><ol><li><p>Linux 环境</p></li><li><p>系统已安装 nginx</p></li><li><p>TCA Server 服务已部署完毕，具备后端服务地址</p></li></ol><h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤" aria-hidden="true">#</a> 部署步骤</h2><ol><li><p><strong>进入前端部署源码目录</strong></p><p>进入web服务目录，并切换至<code>tca-deploy-source</code>目录，将其视为工作目录（假设工作目录为 <code>/data/CodeAnalysis/web/tca-deploy-source</code>）</p></li><li><p><strong>部署/更新前端服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 部署、更新都使用此命令
sh ./scripts/deploy.sh init -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>具体请查阅部署脚本内容，可根据业务调整配置。</p></li><li><p><strong>额外说明</strong></p><p><code>tca-deploy-source/scripts/config.sh</code> 已配置默认环境变量，用户可根据需要调整环境变量再部署前端服务，具体可查阅脚本内容。</p></li></ol>`,5),r=[o];function c(n,l){return a(),i("div",null,r)}const p=e(d,[["render",c],["__file","deploySource.html.vue"]]);export{p as default};
