(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(t,e,r){},315:function(t,e,r){"use strict";var n=r(288);r.n(n).a},332:function(t,e,r){"use strict";var n={props:{node:{type:Object,required:!0}}},s=(r(315),r(0)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{staticClass:"starter",attrs:{image:t.node.screenshot,link:t.node.path}},[r("h4",{staticClass:"starter__title"},[t._v("\n    "+t._s(t.node.title)+"\n  ")]),t.node.description?r("p",{staticClass:"starter__desc"},[t._v(" "+t._s(t.node.description)+" ")]):t._e(),r("div",{staticClass:"starter__footer"},[r("div",{staticClass:"starter__actions flex gap-15"},[t._v("\n      By "+t._s(t.node.author.title)+"\n    ")]),r("div",{staticClass:"starter__platform"},[t.node.platforms?r("g-image",{attrs:{src:t.node.platforms.logo}}):t._e()],1)])])}),[],!1,null,null,null);e.a=a.exports},359:function(t,e){},542:function(t,e,r){"use strict";var n=r(359),s=r.n(n);e.default=s.a},810:function(t,e,r){"use strict";r.r(e);var n=r(413),s=r(332),a={components:{Starters:n.a,StarterCard:s.a}},o=r(0),i=r(542),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Starters",[r("h1",[t._v(t._s(t.$page.platform.title)+" starters")]),r("div",{staticClass:"grid-cols grid-cols--3 mb"},[t._l(t.$page.platform.belongsTo.edges,(function(t){return r("StarterCard",{key:t.node.id,attrs:{node:t.node}})})),0==t.$page.platform.belongsTo.edges.length?r("div",[r("em",[t._v("Nothing here yet...")])]):t._e()],2),r("hr"),r("p",[t._v("\n    Feel free to join the\n    "),r("a",{attrs:{href:"//discord.gg/daeay6n",rel:"noopener noreferrer",target:"_blank"}},[t._v("\n      #"+t._s(t.$page.platform.title)+"\n    ")]),t._v("\n    community channel in Gridsome Discord.\n  ")])])}),[],!1,null,null,null);"function"==typeof i.default&&Object(i.default)(l);e.default=l.exports}}]);