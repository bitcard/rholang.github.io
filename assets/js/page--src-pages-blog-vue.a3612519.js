(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{283:function(t,e,s){},289:function(t,e,s){},298:function(t,e,s){"use strict";var a=s(283);s.n(a).a},302:function(t,e,s){"use strict";var a={props:{post:{type:Object,required:!0}}},o=(s(298),s(0)),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t.post.author?[t._v("\n      Posted "+t._s(t.post.date)+" by\n      "),t._l(t.post.author,(function(e,a){return[a&&a===t.post.author.length-1?s("span",[t._v(" and ")]):a>0?s("span",[t._v(", ")]):t._e(),e.avatar?s("g-image",{staticClass:"author-image",attrs:{alt:e.title,src:e.avatar}}):t._e(),s("g-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))])]})),t.post.timeToRead?s("span",[t._v(" - ")]):t._e()]:t._e(),t.post.timeToRead?[s("strong",[t._v(t._s(t.post.timeToRead)+" min read")])]:t._e()],2)])}),[],!1,null,null,null);e.a=n.exports},331:function(t,e,s){"use strict";var a=s(289);s.n(a).a},333:function(t,e,s){"use strict";var a={components:{PostMeta:s(302).a},props:{post:{type:Object,required:!0}}},o=(s(331),s(0)),n=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Card",{staticClass:"blog-posts__post",attrs:{link:this.post.path}},[e("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),e("PostMeta",{attrs:{post:this.post}})],1)}),[],!1,null,null,null);e.a=n.exports},404:function(t,e){},723:function(t,e,s){"use strict";var a=s(404),o=s.n(a);e.default=o.a},814:function(t,e,s){"use strict";s.r(e);var a={components:{PostCard:s(333).a},metaInfo:{title:"Blog"}},o=s(0),n=s(723),i=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Section",{staticClass:"blog-posts",attrs:{container:"md"}},[e("div",{staticClass:"mb-x2 container-sm text-center"},[e("h1",[this._v("Gridsome Blog")]),e("p",{staticStyle:{opacity:".8"}},[this._v("Follow our mission to make the easiest and most fun framework for building modern websites & apps that are fast by default.")])]),this._l(this.$page.posts.edges,(function(t){return e("PostCard",{key:t.node.id,attrs:{post:t.node}})})),e("p",{staticClass:"text-center"},[this._v("\n      Want to contribute to Gridsome blog?\n      "),e("g-link",{attrs:{to:"/docs/how-to-contribute#contributing-to-the-blog"}},[this._v(" Learn more here")])],1)],2)],1)}),[],!1,null,null,null);"function"==typeof n.default&&Object(n.default)(i);e.default=i.exports}}]);