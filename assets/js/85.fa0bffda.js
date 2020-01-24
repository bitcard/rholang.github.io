(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{280:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},747:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(54),r=(n(53),n(17),n(28),n(280)),s=n(1),i=(s.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===Object(o.a)(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:n[t]=function(){return i[t]}}))},p=s.default.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"Troubleshooting"};var d=function(t){t.options[c]&&(t.options[c]=l),s.default.util.defineReactive(t.options,c,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},v=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"troubleshooting"}},[n("a",{attrs:{href:"#troubleshooting","aria-hidden":"true"}},[t._v("#")]),t._v("Troubleshooting")]),n("h3",{attrs:{id:"debugging-hydration-errors"}},[n("a",{attrs:{href:"#debugging-hydration-errors","aria-hidden":"true"}},[t._v("#")]),t._v("Debugging hydration errors")]),n("p",[t._v("Vue fails silently in production mode and doesn't give a warning about where hydration failed. Set "),n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("mode")]),t._v(" to "),n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("development")]),t._v(" in "),n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("chainWebpack")]),t._v(" to activate warnings:")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("h3",{attrs:{id:"problems-after-an-upgrade"}},[n("a",{attrs:{href:"#problems-after-an-upgrade","aria-hidden":"true"}},[t._v("#")]),t._v("Problems after an upgrade")]),n("p",[t._v("If you have problems after upgrading try remove "),n("code",{pre:!0,attrs:{class:"language-text"}},[t._v(".cache")]),t._v(" and "),n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("node_modules")]),t._v(" folder and run "),n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("yarn")]),t._v(" again.")])])}),[],!1,null,null,null);"function"==typeof u&&u(v),"function"==typeof d&&d(v);e.default=v.exports}}]);