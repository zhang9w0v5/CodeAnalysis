import{_ as o,r as c,o as a,c as l,a as e,b as i,d as r,e as t}from"./app-2a91d8ab.js";const n={},s=t('<h1 id="tca-client" tabindex="-1"><a class="header-anchor" href="#tca-client" aria-hidden="true">#</a> TCA Client</h1><h2 id="一、基础配置" tabindex="-1"><a class="header-anchor" href="#一、基础配置" aria-hidden="true">#</a> 一、基础配置</h2><h3 id="_1-机器配置推荐" tabindex="-1"><a class="header-anchor" href="#_1-机器配置推荐" aria-hidden="true">#</a> 1. 机器配置推荐</h3><table><thead><tr><th style="text-align:right;">操作系统</th><th style="text-align:left;">推荐配置</th></tr></thead><tbody><tr><td style="text-align:right;">Linux</td><td style="text-align:left;">8核16G内存，硬盘空间256G（可用空间不低于100G）</td></tr><tr><td style="text-align:right;">Mac</td><td style="text-align:left;">8核16G内存，硬盘空间256G（可用空间不低于100G）</td></tr><tr><td style="text-align:right;">Windows</td><td style="text-align:left;">8核16G内存，硬盘空间256G（可用空间不低于100G）</td></tr></tbody></table><p>以上为推荐配置，实际情况需要考虑扫描对象代码库的大小，按实际情况增加磁盘空间。</p><h3 id="_2-配置client-config-ini文件" tabindex="-1"><a class="header-anchor" href="#_2-配置client-config-ini文件" aria-hidden="true">#</a> 2. 配置client/config.ini文件</h3><p>-（1）将<code>&lt;Server IP地址&gt;</code>替换成实际的serve ip（可包含端口号）。</p><h3 id="_3-配置client-codedog-ini文件-分布式节点模式无需配置" tabindex="-1"><a class="header-anchor" href="#_3-配置client-codedog-ini文件-分布式节点模式无需配置" aria-hidden="true">#</a> 3. 配置client/codedog.ini文件（分布式节点模式无需配置）</h3><p>填写以下必填项：<code>token</code>,<code>org_sid</code>,<code>team_name</code>,<code>source_dir</code></p><table><thead><tr><th style="text-align:right;">字段名</th><th style="text-align:left;">填写说明</th></tr></thead><tbody><tr><td style="text-align:right;"><code>token</code></td><td style="text-align:left;">从tca页面获取，前往[个人中心]-[个人令牌]-复制Token</td></tr><tr><td style="text-align:right;"><code>org_sid</code>(团队编号)</td><td style="text-align:left;">从tca项目概览页面URL中获取，项目概览URL格式：<code>http://{域名}/t/{org_sid}/p/{team_name}/profile</code></td></tr><tr><td style="text-align:right;"><code>team_name</code>(项目名称)</td><td style="text-align:left;">同上</td></tr><tr><td style="text-align:right;"><code>source_dir</code></td><td style="text-align:left;">本地代码目录路径</td></tr></tbody></table><p>其他可选项按需填写。</p><h2 id="二、使用docker环境快速体验" tabindex="-1"><a class="header-anchor" href="#二、使用docker环境快速体验" aria-hidden="true">#</a> 二、使用docker环境快速体验</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>适用于快速上手体验。使用docker运行，可以免去客户端环境依赖的安装，避免环境兼容性问题。</p><p>但是由于环境受限于docker，会无法复用本地的编译环境，部分需要编译的工具无法使用。</p></div><h3 id="_1-下载和安装docker" tabindex="-1"><a class="header-anchor" href="#_1-下载和安装docker" aria-hidden="true">#</a> 1. 下载和安装Docker</h3>',14),h={href:"https://docs.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"},p=t(`<h3 id="_2-构建docker镜像" tabindex="-1"><a class="header-anchor" href="#_2-构建docker镜像" aria-hidden="true">#</a> 2. 构建docker镜像</h3><p>在<code>client</code>目录下，执行以下命令：<code>docker build -t tca-client .</code></p><h3 id="_3-执行docker容器-扫描代码-可选以下两种方式" tabindex="-1"><a class="header-anchor" href="#_3-执行docker容器-扫描代码-可选以下两种方式" aria-hidden="true">#</a> 3. 执行docker容器，扫描代码，可选以下两种方式</h3><h4 id="_1-直接使用docker运行" tabindex="-1"><a class="header-anchor" href="#_1-直接使用docker运行" aria-hidden="true">#</a> (1)直接使用docker运行</h4><ul><li>在client目录下，执行以下命令：</li><li>(注意：按照实际情况填写<code>SOURCE_DIR</code>环境变量值)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>export SOURCE_DIR=需要扫描的代码目录绝对路径
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用docker内bash终端运行" tabindex="-1"><a class="header-anchor" href="#_2-使用docker内bash终端运行" aria-hidden="true">#</a> (2)使用docker内bash终端运行</h4><ul><li>通过以下方式，进入容器内的bash终端后，通过命令行启动client代码：</li><li>在client目录下，执行以下命令：</li><li>(注意：按照实际情况填写<code>SOURCE_DIR</code>环境变量值)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>export SOURCE_DIR=需要扫描的代码目录绝对路径
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client bash
# 进入容器内终端，通过命令行执行扫描
python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用本地机器环境运行" tabindex="-1"><a class="header-anchor" href="#三、使用本地机器环境运行" aria-hidden="true">#</a> 三、使用本地机器环境运行</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>适用于深度体验，可以复用本地编译环境，使用编译型代码分析工具。</p><p>可能会有系统环境兼容问题。</p></div><h3 id="_1-安装python环境和第三方库" tabindex="-1"><a class="header-anchor" href="#_1-安装python环境和第三方库" aria-hidden="true">#</a> 1. 安装Python环境和第三方库</h3><ul><li>(1) 预装Python3.7、pip，支持 <code>python3</code> 和 <code>pip3</code> 命令</li><li>(2) 安装依赖：<code>pip3 install -r client/requirements/app_reqs.pip</code></li></ul><h3 id="_2-安装第三方工具" tabindex="-1"><a class="header-anchor" href="#_2-安装第三方工具" aria-hidden="true">#</a> 2. 安装第三方工具</h3><ul><li>(1) 进入到<code>client/requirements</code>目录</li><li>(2) 在命令行中执行安装脚本<code>install.sh</code>(linux/mac环境)或<code>install.bat</code>(windows环境)</li></ul><h3 id="_3-启动代码分析" tabindex="-1"><a class="header-anchor" href="#_3-启动代码分析" aria-hidden="true">#</a> 3. 启动代码分析</h3><ul><li>(1) 进入到<code>client</code>目录下</li><li>(2) 执行命令：<code>python3 codepuppy.py localscan</code></li></ul><h2 id="四、使用分布式节点模式执行客户端" tabindex="-1"><a class="header-anchor" href="#四、使用分布式节点模式执行客户端" aria-hidden="true">#</a> 四、使用分布式节点模式执行客户端</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>CA客户端除了通过<code>localscan</code>命令启动单次的代码分析，也可以作为一个分布式分析节点启动，作为常驻进程，多个节点可以分布式并行执行服务端下发的任务，提高扫描效率。</li><li>和本地执行任务一样，需要先安装环境和必要的工具，并配置好服务端地址。</li></ul></div><h3 id="_1-安装python环境和第三方库-1" tabindex="-1"><a class="header-anchor" href="#_1-安装python环境和第三方库-1" aria-hidden="true">#</a> 1. 安装Python环境和第三方库</h3><ul><li>(1) 预装Python3.7、pip，支持 <code>python3</code> 和 <code>pip3</code> 命令</li><li>(2) 安装依赖：<code>pip3 install -r client/requirements/app_reqs.pip</code></li></ul><h3 id="_2-安装第三方工具-1" tabindex="-1"><a class="header-anchor" href="#_2-安装第三方工具-1" aria-hidden="true">#</a> 2. 安装第三方工具</h3><ul><li>进入到<code>client/requirements</code>目录</li><li>在命令行中执行安装脚本<code>install.sh</code>(linux/mac环境)或<code>install.bat</code>(windows环境)</li></ul><h3 id="_3-启动代码分析节点" tabindex="-1"><a class="header-anchor" href="#_3-启动代码分析节点" aria-hidden="true">#</a> 3. 启动代码分析节点</h3><ul><li>（1）从tca页面<code>个人中心</code>-<code>个人令牌</code>-复制Token</li><li>（2）进入到<code>client</code>目录下，执行命令：<code>python3 codepuppy.py -l codepuppy.log start -t &lt;token&gt;</code></li><li>（3）启动后，可以在命令行输出或<code>codepuppy.log</code>中查看运行日志，如果未报异常，且输出<code>task loop is started.</code>，表示节点已经正常启动。</li></ul><h3 id="_4-配置节点" tabindex="-1"><a class="header-anchor" href="#_4-配置节点" aria-hidden="true">#</a> 4. 配置节点</h3><ul><li>从tca页面<code>管理入口</code>-<code>节点管理</code>，可以看到当前在线的节点，可以修改节点名称、标签、负责人等信息。</li><li>可以进入工具进程配置页面，对节点支持的工具进程进行管理（默认会全部勾选），未勾选的工具进程，将不会在该节点上执行。</li><li>节点所属标签会与分析方案中的运行环境标签进行匹配，只有相同标签的任务才会下发到该机器节点上。</li></ul><h2 id="五、其他配置与用法" tabindex="-1"><a class="header-anchor" href="#五、其他配置与用法" aria-hidden="true">#</a> 五、其他配置与用法</h2><h3 id="_1-配置使用本地工具" tabindex="-1"><a class="header-anchor" href="#_1-配置使用本地工具" aria-hidden="true">#</a> 1. 配置使用本地工具</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果由于网络原因，执行时无法从github自动拉取工具，或拉取比较慢，可以参考基础配置腾讯工蜂工具地址，或使用以下方式预先下载好工具，配置使用本地工具目录。</p></div><ul><li>（1）下载工具配置库 <code>https://github.com/TCATools/puppy-tools-config.git</code> ，存放到 <code>tools</code>目录下（如果未生成，可先创建该目录）。</li><li>（2）根据当前机器操作系统，查看<code>puppy-tools-config</code>目录下的<code>linux_tools.ini</code>或<code>mac_tools.ini</code>或<code>windows_tools.ini</code>文件，将<code>[tool_url]</code>中声明的所有工具下载到 <code>tools</code>目录下。</li><li>（3）填写<code>client/config.ini</code>中的配置：<code>USE_LOCAL_TOOL</code>=<code>True</code>，即可使用下载好的本地工具，不自动拉取和更新工具。</li></ul><h3 id="_2-使用自建git-server存放工具" tabindex="-1"><a class="header-anchor" href="#_2-使用自建git-server存放工具" aria-hidden="true">#</a> 2. 使用自建git server存放工具</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果自己搭建了一套git server，可以将工具配置库 <code>https://github.com/TCATools/puppy-tools-config.git</code> 以及里面声明的工具仓库，存放到自建git serevr上。</p></div><ul><li>（1）将工具配置库 <code>https://github.com/TCATools/puppy-tools-config.git</code> 上传到自建git仓库。</li><li>（2）按所需的操作系统，将<code>puppy-tools-config</code>仓库下的<code>linux_tools.ini</code>或<code>mac_tools.ini</code>或<code>windows_tools.ini</code>文件中<code>[tool_url]</code>声明的所有工具库，上传到自建git仓库。</li><li>（3）修改<code>linux_tools.ini</code>或<code>mac_tools.ini</code>或<code>windows_tools.ini</code>文件中<code>[base_value]</code>中的<code>git_url</code>为自建git server地址。</li><li>（4）修改<code>client/config.ini</code>中的<code>TOOL_CONFIG_URL</code>为自建git server的<code>puppy-tools-config</code>仓库地址。</li><li>（5）填写<code>client/config.ini</code>中的<code>[TOOL_LOAD_ACCOUNT]</code>配置，输入有拉取权限的用户名密码，即可使用自建git server拉取工具。</li></ul><h3 id="_3-git-lfs带宽和存储配额不够问题" tabindex="-1"><a class="header-anchor" href="#_3-git-lfs带宽和存储配额不够问题" aria-hidden="true">#</a> 3. git lfs带宽和存储配额不够问题</h3><ul><li>如果git拉取工具时，出现git lfs拉取失败，可能是lfs带宽和存储配额不够，可以打开对应的工具github页面，通过<code>Download ZIP</code>的方式下载工具压缩包，再解压到<code>tools</code>目录下。</li></ul>`,36);function u(_,g){const d=c("ExternalLinkIcon");return a(),l("div",null,[s,e("p",null,[i("参考Docker官方文档："),e("a",h,[i("Docker下载和安装"),r(d)])]),p])}const f=o(n,[["render",u],["__file","配置说明.html.vue"]]);export{f as default};
