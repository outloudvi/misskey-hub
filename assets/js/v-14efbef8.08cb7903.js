"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[5656],{4009:(s,n,a)=>{a.r(n),a.d(n,{default:()=>j});var e=a(6252);const l=(0,e._)("h1",{id:"misskey構築の手引き",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#misskey構築の手引き","aria-hidden":"true"},"#"),(0,e.Uk)(" Misskey構築の手引き")],-1),t=(0,e._)("p",null,"このガイドではMisskeyのインストール・セットアップ方法について解説します。",-1),i={class:"custom-container tip"},p=(0,e._)("i",{class:"fas fa-info"},null,-1),r=(0,e._)("p",{class:"custom-container-title"},"前提条件",-1),c=(0,e._)("p",null,"以下のソフトウェアがインストール・設定されていること",-1),o={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Node.js"),d=(0,e.Uk)(" (12.x, 14.x)"),m={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("PostgreSQL"),k=(0,e.Uk)(" (10以上)"),h={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("Redis"),v={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("Yarn"),f=(0,e.Uk)(" (v1系)"),_={href:"https://www.ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("FFmpeg"),E=(0,e.uE)('<p>環境変数が次のように設定されていること</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),U=(0,e.uE)('<h2 id="ユーザーの作成" tabindex="-1"><a class="header-anchor" href="#ユーザーの作成" aria-hidden="true">#</a> ユーザーの作成</h2><p>Misskeyはrootユーザーで実行しない方がよいため、代わりにユーザーを作成します。 Debianの例:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login misskey\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="misskeyのインストール" tabindex="-1"><a class="header-anchor" href="#misskeyのインストール" aria-hidden="true">#</a> Misskeyのインストール</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production\n<span class="token function">su</span> - misskey\n<span class="token function">git</span> clone --recursive -b master git://github.com/misskey-dev/misskey.git\n<span class="token function">git</span> submodule update --init\n<span class="token builtin class-name">cd</span> misskey\n<span class="token function">git</span> checkout master\n<span class="token function">yarn</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="設定" tabindex="-1"><a class="header-anchor" href="#設定" aria-hidden="true">#</a> 設定</h2><p>設定サンプルの<code>.config/example.yml</code>をコピーし、<code>default.yml</code>にリネームします。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/example.yml .config/default.yml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>default.yml</code> をファイル内の指示に従って編集します。</p><h2 id="ビルドと初期化" tabindex="-1"><a class="header-anchor" href="#ビルドと初期化" aria-hidden="true">#</a> ビルドと初期化</h2><p>次のコマンドでMisskeyのビルドとデータベースの初期化を行います。 これにはしばらく時間がかかります。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> build\n<span class="token function">yarn</span> run init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p>Debianをお使いであれば、<code>build-essential</code>パッケージをインストールする必要があります。</p></div><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">エラーが発生する場合</p><p>何らかのモジュールでエラーが発生する場合はnode-gypを使ってください:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx node-gyp configure\nnpx node-gyp build\n<span class="token function">yarn</span> build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="起動" tabindex="-1"><a class="header-anchor" href="#起動" aria-hidden="true">#</a> 起動</h2><p>お疲れ様でした。以下のコマンドでMisskeyを起動できます。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>GLHF✨</p><details class="custom-container details"><summary>systemdを用いた管理</summary><p>systemdサービスのファイルを作成</p><p><code>/etc/systemd/system/misskey.service</code></p><p>エディタで開き、以下のコードを貼り付けて保存:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">Misskey daemon</span>\n\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>\n<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>\n<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/npm start</span>\n<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/misskey/misskey</span>\n<span class="token key attr-name">Environment</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">NODE_ENV=production</span>&quot;</span>\n<span class="token key attr-name">TimeoutSec</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>\n<span class="token key attr-name">StandardOutput</span><span class="token punctuation">=</span><span class="token value attr-value">syslog</span>\n<span class="token key attr-name">StandardError</span><span class="token punctuation">=</span><span class="token value attr-value">syslog</span>\n<span class="token key attr-name">SyslogIdentifier</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>\n<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>\n\n<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>CentOSで1024以下のポートを使用してMisskeyを使用する場合は<code>ExecStart=/usr/bin/sudo /usr/bin/npm start</code>に変更する必要があります。</p></div><p>systemdを再読み込みしmisskeyサービスを有効化</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload<span class="token punctuation">;</span> systemctl <span class="token builtin class-name">enable</span> misskey\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>misskeyサービスの起動</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start misskey\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p><code>systemctl status misskey</code>と入力すると、サービスの状態を調べることができます。</p></div></details><h2 id="misskeyのアップデート方法" tabindex="-1"><a class="header-anchor" href="#misskeyのアップデート方法" aria-hidden="true">#</a> Misskeyのアップデート方法</h2>',20),w={class:"custom-container warning"},M=(0,e._)("i",{class:"fas fa-exclamation"},null,-1),S=(0,e.Uk)("アップデートの際は必ず"),D={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},N=(0,e.Uk)("リリースノート"),W=(0,e.Uk)("を確認し、変更点や追加で必要になる作業の有無(ほとんどの場合ありません)を予め把握するようにしてください。"),O=(0,e.uE)('<p>masterをpullし直し、インストール、ビルド、データベースのマイグレーションを行います:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master\n<span class="token function">git</span> pull\n<span class="token function">git</span> submodule update --init\n<span class="token function">yarn</span> <span class="token function">install</span>\n<span class="token function">yarn</span> build\n<span class="token function">yarn</span> migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>アップデート内容、およびデータベースの規模によっては時間がかかることがあります。</p><p>アップデートが終わり次第、Misskeyプロセスを再起動してください。</p><div class="custom-container tip"><i class="fas fa-info"></i><p>なにかビルドや起動時にエラーが発生した場合は、以下のコマンドをお試しください:</p><ul><li><code>yarn clean</code>または<code>yarn cleanall</code></li><li><code>npm rebuild</code></li></ul></div>',5),j={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,t,(0,e._)("div",i,[p,r,c,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("strong",null,[(0,e._)("a",o,[u,(0,e.Wm)(a)])]),d]),(0,e._)("li",null,[(0,e._)("strong",null,[(0,e._)("a",m,[b,(0,e.Wm)(a)])]),k]),(0,e._)("li",null,[(0,e._)("strong",null,[(0,e._)("a",h,[g,(0,e.Wm)(a)])])]),(0,e._)("li",null,[(0,e._)("strong",null,[(0,e._)("a",v,[y,(0,e.Wm)(a)])]),f]),(0,e._)("li",null,[(0,e._)("strong",null,[(0,e._)("a",_,[x,(0,e.Wm)(a)])])])]),E]),U,(0,e._)("div",w,[M,(0,e._)("p",null,[S,(0,e._)("a",D,[N,(0,e.Wm)(a)]),W])]),O],64)}}},8085:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-14efbef8",path:"/docs/install/manual.html",title:"Misskey構築の手引き",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"ユーザーの作成",slug:"ユーザーの作成",children:[]},{level:2,title:"Misskeyのインストール",slug:"misskeyのインストール",children:[]},{level:2,title:"設定",slug:"設定",children:[]},{level:2,title:"ビルドと初期化",slug:"ビルドと初期化",children:[]},{level:2,title:"起動",slug:"起動",children:[]},{level:2,title:"Misskeyのアップデート方法",slug:"misskeyのアップデート方法",children:[]}],filePathRelative:"docs/install/manual.md",git:{updatedTime:1635558836e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:4}]}}}}]);