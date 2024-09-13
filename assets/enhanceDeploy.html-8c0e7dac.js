import{_ as o,r as l,o as s,c,a as i,b as e,d as a,e as n}from"./app-2a91d8ab.js";const r={},d=n('<h1 id="enhanced-analysis-module-deployment" tabindex="-1"><a class="header-anchor" href="#enhanced-analysis-module-deployment" aria-hidden="true">#</a> Enhanced Analysis Module Deployment</h1><p>In addition to integrating well-known analysis tools in the industry, TCA also has its own independently developed tools, which serve as the enhanced analysis module of TCA.</p><p>The TCA enhanced analysis module requires users to additionally deploy the License authentication microservice and apply for a License by email.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>1. License application is completely free!</strong> 2. Enterprises or universities are given priority in applying for a License.</p></div><h2 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h2><ul><li>Independent tools: Code analysis tools independently developed by TCA;</li><li>CLS(Common License Server): The License authentication microservice for TCA independent tools.</li></ul><h2 id="module-features" tabindex="-1"><a class="header-anchor" href="#module-features" aria-hidden="true">#</a> Module Features</h2><ul><li>Supports Objective-C/C++ code specification check;</li><li>Supports analysis of project dependency components;</li><li>Supports analysis of whether dependency components have vulnerabilities and other issues;</li><li>Supports Java/Kotlin API and function call chain analysis;</li><li>Supports code safety, null pointer check, memory leak, and other rules.</li></ul><p><strong>Continuously updating...</strong></p><h2 id="tca-official-website-version-enhanced-capability-application" tabindex="-1"><a class="header-anchor" href="#tca-official-website-version-enhanced-capability-application" aria-hidden="true">#</a> TCA official website version enhanced capability application</h2>',10),h={href:"https://tca.tencent.com/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://tca.tencent.com/document/zh/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A5%E5%85%A5/License%E9%85%8D%E7%BD%AE.html",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="tca-private-deployment-enhanced-capability-application" tabindex="-1"><a class="header-anchor" href="#tca-private-deployment-enhanced-capability-application" aria-hidden="true">#</a> TCA Private Deployment Enhanced Capability Application</h2><p>If you are using TCA in an enterprise intranet environment and want to experience the enhanced analysis module capabilities of TCA on the intranet, you can apply as follows.</p><h3 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h3><ul><li>A dedicated machine for the CLS microservice, the CLS microservice needs to be bound to this machine</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Note: The CLS directory cannot be deleted at will</strong></p></div><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h3><ol><li>Execute the following command in the <code>server/cls</code> directory of the TCA source code to obtain the <code>Server ID</code> and <code>Client License</code></li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Note: The command needs to be executed in the CLS directory</strong></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># install Git LFS
$ bash ./scripts/base/install_git_lfs.sh
# If the cls binary is not found in this directory, you can execute the following command to synchronize.
$ bash ./scripts/base/install_bin.sh
$ cd server/cls
$ ./cls server
2022-04-13 18:35:29.356510559 +0800 CST [INFO] Version: 20220328.1
2022-04-13 18:35:29.44083463 +0800 CST [INFO] The client license is:
xxx
2022-04-13 18:35:29.454552966 +0800 CST [INFO] License Server ID: xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Server ID</code>: Machine code, used to apply for License authorization from the TCA team</li><li><code>Client License</code>: Provided to the TCA Client to facilitate tool authentication (important, it is recommended to back up)</li></ul><ol start="2"><li>Configure the CLS microservice information in the <code>config.ini</code> of the TCA Client directory, for example</li></ol><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>[LICENSE_CONFIG]
; [optional] Fill in when using independent tools, no need by default
; Domain name and port of the License service
URL=http://&lt;IP or domain name&gt;:&lt;port&gt;
BASE_PATH=
LICENSE=&lt;Client License&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note: The URL corresponding value does not need to follow the slash <code>/</code> at the end.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Different deployment methods can modify the <code>config.ini</code> configuration according to the following methods:</p><ul><li>Source code deployment: <ul><li>Modify the <code>client/config.ini</code> in the source code directory</li><li>Restart the client: <code>./quick_install.sh local start client</code></li></ul></li><li>Docker deployment: <ul><li>Method 1: Modify the <code>.docker_temp/configs/client/config.ini</code> in the source code directory and restart the <code>tca-services</code> container</li><li>Method 2: Enter the <code>tca-service</code> container, modify <code>/CodeAnalysis/client/config.ini</code>, and exit and restart the <code>tca-services</code> container</li><li>Restart the container method: <code>docker restart tca-service</code></li></ul></li><li>Docker-Compose deployment: <ul><li>Modify the <code>client/config.ini</code> in the source code directory and restart the <code>client</code> container</li><li>Restart the container method: <code>docker-compose restart client</code></li></ul></li></ul></div><ol start="3"><li>Submit a private cloud license application on the TCA Cloud official website</li></ol>`,15),m={href:"https://tca.tencent.com/",target:"_blank",rel:"noopener noreferrer"},v=n("<li>(2) Enter the team that needs to apply for a private cloud license (if there is no team, you need to create a corresponding team);</li><li>(3) On the team page, enter the [Node Management]-&gt;[Private Cloud License Configuration] page in turn, then click the [Apply for License] button in the upper right corner, fill in the relevant information and submit the application. The specific information is as follows: <ul><li>Applicant name</li><li>Applicant&#39;s organization name</li><li>Applicant&#39;s organization type: company/university/individual</li><li>Applicant&#39;s email address</li><li>Applicant&#39;s mobile phone number</li><li>Server ID: <code>Server ID</code> output in step 1, the machine code for the first registration</li><li>Client License: <code>Client License</code> output in step 1</li><li>Application scenario</li></ul></li><li>(4) Then wait for the application license to be reviewed and approved, you can copy the private cloud license and continue with the following step 4.</li>",3),f=n(`<ol start="4"><li>Fill in the License in the <code>config.yaml</code> file in the CLS directory</li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note: Follow the yaml format, for example:</p><ul><li>In key-value pairs, there is a blank character after the colon <code>:</code>, for example <code>key: value</code>.</li></ul></div><ol start="5"><li>Execute the following command to start CLS</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cls server -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>Verify that the CLS process starts normally</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># Find if there is a CLS process
ps aux|grep cls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note: If the above command does not find the CLS process, it means that CLS did not start normally.<br> Please try to change the port in the <code>config.yaml</code> file to another port, such as 8080, the default is port 80, and then re-execute the command in step 5.</p></div><ol start="7"><li>Start the TCA analysis task Check the independent tool-related rule package in the analysis plan on the TCA platform, such as the dependency component analysis rule package, and then start an analysis task. If it runs normally, it means the setting takes effect.</li></ol><h3 id="cls-operation-and-maintenance" tabindex="-1"><a class="header-anchor" href="#cls-operation-and-maintenance" aria-hidden="true">#</a> CLS Operation and Maintenance</h3><h4 id="automatic-restart" tabindex="-1"><a class="header-anchor" href="#automatic-restart" aria-hidden="true">#</a> Automatic Restart</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># Find the CLS process ID
ps aux|grep cls
# Restart the microservice
kill -USR2 &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="network-exception" tabindex="-1"><a class="header-anchor" href="#network-exception" aria-hidden="true">#</a> Network Exception</h4><p>If the above deployment steps have been completed, but the enhanced function still encounters the <code>License check failed! Please check the license. License Server is not available!</code> exception. You can troubleshoot as follows:</p><ul><li>Enter the task page, click on the abnormal tool, and download the execution log of the tool. If the following logs appear in the log, it means that the network access to CLS is abnormal;</li></ul><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code>method(head) call fails on error: &lt;urlopen error [Errno 111] Connection refused&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Continue to verify. If it is Docker or Docker-Compose deployment method, enter the TCA Client container. If it is a source code deployment, go to the TCA Client machine. Execute the following command to confirm whether the network is accessible:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ping &lt;CLS IP or domain name filled in config.ini&gt;
telnet &lt;CLS IP or domain name filled in config.ini&gt; &lt;corresponding port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If the network is not accessible, please check: <ul><li>Whether the firewall has opened the corresponding port;</li><li>Whether the corresponding domain name of CLS is set in the host;</li><li>Whether the IP setting is wrong.</li></ul></li></ul><h5 id="case-sharing" tabindex="-1"><a class="header-anchor" href="#case-sharing" aria-hidden="true">#</a> Case Sharing</h5><p>Background: Xiao Ming deployed TCA in Docker mode and deployed the CLS service on the same host. Then he set the IP in the URL in config.ini to <code>127.0.0.1</code>, restarted and started the enhanced function task and encountered the above network disconnection exception.<br> Reason: The reason is that the <code>127.0.0.1</code> at this time points to the TCA Client container itself, not the CLS service deployed on the host.<br> Solution: Change <code>127.0.0.1</code> to the host&#39;s own IP.</p><h4 id="cls-update" tabindex="-1"><a class="header-anchor" href="#cls-update" aria-hidden="true">#</a> CLS Update</h4><ol><li>Use the following command to find the cls process and kill the process</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># Find the CLS process ID
ps aux|grep cls
# Restart the microservice
kill -9 &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Download the latest version of cls and replace the cls binary file in it</li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note: You cannot delete the original cls directory, you only need to replace the cls binary file in it.</p></div><ol start="3"><li>Use the following command to restart the cls service</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cls server -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27);function g(b,y){const t=l("ExternalLinkIcon");return s(),c("div",null,[d,i("p",null,[e("If users usually use "),i("a",h,[e("TCA official website version public service"),a(t)]),e(" and want to experience the analysis capabilities of the enhanced analysis module on the official website version, they can follow "),i("a",p,[e("this help document"),a(t)]),e(" to apply for configuration.")]),u,i("ul",null,[i("li",null,[e("(1) Register or log in to an account on the "),i("a",m,[e("TCA Cloud official website"),a(t)]),e(";")]),v]),f])}const w=o(r,[["render",g],["__file","enhanceDeploy.html.vue"]]);export{w as default};
