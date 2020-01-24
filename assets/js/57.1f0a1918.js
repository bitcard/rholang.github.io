(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{280:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},773:function(t,e,s){"use strict";s.r(e);var a=s(0),o=s(54),n=(s(53),s(17),s(28),s(280)),r=s(1),i=(r.default.config.optionMergeStrategies,{VueRemarkRoot:n.a}),u=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===Object(o.a)(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:s[t]=function(){return i[t]}}))},p=r.default.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"Add comments to Gridsome"};var d=function(t){t.options[c]&&(t.options[c]=l),r.default.util.defineReactive(t.options,c,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h1",{attrs:{id:"add-comments-to-gridsome"}},[s("a",{attrs:{href:"#add-comments-to-gridsome","aria-hidden":"true"}},[t._v("#")]),t._v("Add comments to Gridsome")]),s("p",[t._v("Adding comments to a static site can be easy, you have the option to use either external services that load an iframe into your site or applications that connect to your Github repository which commits the changes made on your site. We have listed some great services that integrate well with Gridsome.")]),s("h2",{attrs:{id:"disqus"}},[s("a",{attrs:{href:"#disqus","aria-hidden":"true"}},[t._v("#")]),t._v("Disqus")]),s("p",[t._v("Disqus is an external service that injects an iframe on your site, one easy way to use Disqus with Gridsome is to use the package "),s("a",{attrs:{href:"https://github.com/ktquez/vue-disqus",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("vue-disqus")]),t._v(" that provides you with a custom component that you can use across your project.")]),s("h4",{attrs:{id:"sign-up-on-disqus"}},[s("a",{attrs:{href:"#sign-up-on-disqus","aria-hidden":"true"}},[t._v("#")]),t._v("Sign up on Disqus")]),s("p",[t._v("First step is to sign up for an account on "),s("g-link",{attrs:{to:"https://disqus.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Disqus")]),t._v(". When presented with the option you want to choose 'I want to install Disqus on my site'. Continue by filling in all necessary information about your site and when you are asked 'What platform is your site on?', pick 'Universal Code' at the bottom of the page. ")],1),s("p",[t._v("Complete the setup of your site and take note of your "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("Shortname")]),t._v(" because this will be used later.")]),s("p",[s("g-image",{attrs:{src:"https://i.imgur.com/Ui1aoYi.png",alt:"shortname"}})],1),s("h4",{attrs:{id:"install-vue-disqus"}},[s("a",{attrs:{href:"#install-vue-disqus","aria-hidden":"true"}},[t._v("#")]),t._v("Install vue-disqus")]),s("p",[t._v("You can use vue-disqus for easier implementation or use disqus directly, but this guide is using vue-disqus.")]),s("p",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("yarn add vue-disqus")]),t._v("\nor with npm\n"),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("npm install vue-disqus")])]),s("p",[t._v("After it has been added to your package.json and installed you need to import vue-disqus in your "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("main.js")]),t._v(" which is located directly in the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src")]),t._v(" directory, and added to the vue instance. ")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueDisqus "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-disqus'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" head "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueDisqus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("Now you are free to use the disqus component anywhere you want, simply use it like this:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("disqus shortname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mygridsomesite"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$page.post.title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("disqus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("p",[t._v("You need to provide a shortname which you can find on "),s("g-link",{attrs:{to:"https://disqus.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Disqus")]),t._v(" under your site you configured after you signed up. You also need to provide an identifier, in this example we used the blogpost title from the GraphQL query.")],1),s("p",[t._v("Read more: "),s("g-link",{attrs:{to:"https://disqus.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Disqus")])],1),s("h2",{attrs:{id:"staticman"}},[s("a",{attrs:{href:"#staticman","aria-hidden":"true"}},[t._v("#")]),t._v("Staticman")]),s("p",[t._v("Staticman is an application that you connect to your Github repository which commits comments or any other type of user input to your site that you have configured.\nRead more: "),s("g-link",{attrs:{to:"https://staticman.net/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Staticman")])],1)])}),[],!1,null,null,null);"function"==typeof u&&u(v),"function"==typeof d&&d(v);e.default=v.exports}}]);