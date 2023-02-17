import{_ as s,c as a,o as n,a as l}from"./app.0b5c939b.js";const C=JSON.parse('{"title":"BasicDialog","description":"","frontmatter":{"category":"Components","subtitle":"基础弹窗","group":"数据展示","title":"BasicDialog","cover":null,"demo":null},"headers":[{"level":2,"title":"何时使用","slug":"何时使用","link":"#何时使用","children":[]},{"level":2,"title":"代码演示","slug":"代码演示","link":"#代码演示","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"BasicDialog","slug":"basicdialog","link":"#basicdialog","children":[]}]}],"relativePath":"component/basic-dialog.md","lastUpdated":1676628931000}'),o={name:"component/basic-dialog.md"},t=l(`<h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-hidden="true">#</a></h2><p>需要用户处理事务，或者不希望跳转页面以致打断工作流程时，可以使用 <code>BasicDialog</code> 在当前页面使用一个对话框，承载相应的操作。</p><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- bottom --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/pages-extend/employment/apply.jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">直聘上传简历展示</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/pages-supply/supplier/my-appraise.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ß</span></span>
<span class="line"><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">我的评价显示删除操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">code</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- center --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/pages-supply/mall/all-order.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">完成订单</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">showDialog</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setShowDialog</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setShowDialog</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">打开弹窗</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BasicDialog</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example-dailog</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">visible</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">showDialog</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">onClose</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#82AAFF;">setShowDialog</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">   &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    弹窗内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setShowDialog</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">完成</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">BasicDialog</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="basicdialog" tabindex="-1">BasicDialog <a class="header-anchor" href="#basicdialog" aria-hidden="true">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>弹窗位置</td><td><code>center</code> | <code>bottom</code></td><td>&#39;center&#39;</td></tr><tr><td>classname</td><td>同一般 ReactNode 节点的 classname (挂在弹窗的 body-content 上)</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>visible</td><td>控制弹窗的显示与隐藏</td><td>boolean</td><td>false</td></tr><tr><td>mask</td><td>是否隐藏遮罩</td><td>boolean</td><td>true</td></tr><tr><td>maskClosable</td><td>点击其他区域是否能关闭</td><td>boolean</td><td>false</td></tr><tr><td>closable</td><td>是否展示关闭按钮</td><td>boolean</td><td>true</td></tr><tr><td>noPadding</td><td>取消弹窗(body-content)默认的 padding 除了靠屏幕的一边(可以通过 classname 设置)</td><td>boolean</td><td>false</td></tr><tr><td>children</td><td>弹窗展示内容</td><td>ReactNode</td><td>-</td></tr><tr><td>onClose</td><td>关闭回调(在关闭回调中设置 setShowDialog(false)确保下一次还能打开弹窗 )</td><td>function(e)</td><td>-</td></tr></tbody></table>`,8),p=[t];function e(c,r,F,D,y,d){return n(),a("div",null,p)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};
