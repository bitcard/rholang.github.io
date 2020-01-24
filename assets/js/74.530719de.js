(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{280:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},756:function(t,a,s){"use strict";s.r(a);var e=s(0),n=s(54),r=(s(53),s(17),s(28),s(280)),p=s(1),o=(p.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===Object(n.a)(o[t])&&"function"==typeof o[t].render?a[t]=o[t]:s[t]=function(){return o[t]}}))},l=p.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",i={excerpt:null,title:"Pages"};var v=function(t){t.options[u]&&(t.options[u]=i),p.default.util.defineReactive(t.options,u,i),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"pages"}},[s("a",{attrs:{href:"#pages","aria-hidden":"true"}},[t._v("#")]),t._v("Pages")]),s("blockquote",[s("p",[t._v("Pages are responsible for presenting your data at a URL. Each page will be generated statically and have its own "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("index.html")]),t._v(" file with the markup.")])]),s("p",[t._v("You have two options for creating pages in Gridsome:")]),s("ol",[s("li",[s("strong",[s("a",{attrs:{href:"#file-based-pages"}},[t._v("Using the file system")])]),t._v(" - For creating pages with "),s("g-link",{attrs:{to:"https://vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Single File Components")])],1),s("li",[s("strong",[s("a",{attrs:{href:"#programmatic-pages"}},[t._v("Using the Pages API")])]),t._v(" - For creating pages programmatically.")])]),s("h2",{attrs:{id:"file-based-pages"}},[s("a",{attrs:{href:"#file-based-pages","aria-hidden":"true"}},[t._v("#")]),t._v("File-based pages")]),s("p",[s("g-link",{attrs:{to:"https://vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Single File Components")]),t._v(" in the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages")]),t._v(" directory will automatically be available with their own URLs. The file location is used to generate the URL and here are a few basic examples:")],1),s("ul",[s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/Index.vue")]),t._v(" becomes "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/")]),s("em",[t._v("(The frontpage)")])]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/AboutUs.vue")]),t._v(" becomes "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/about-us")])]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/about/Vision.vue")]),t._v(" becomes "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/about/vision")])]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/blog/Index.vue")]),t._v(" becomes "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/blog")])])]),s("p",[t._v("A simple page component might look like this:")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, world!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[t._v("Pages in "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages")]),t._v(" are typically used for fixed URLs like "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/about")]),t._v(" or for listing blog posts at, for example "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/blog")]),t._v(". "),s("a",{attrs:{href:"/docs/collections/"}},[t._v("Read more about how to create pages for single blog posts etc.")])]),s("h2",{attrs:{id:"programmatic-pages"}},[s("a",{attrs:{href:"#programmatic-pages","aria-hidden":"true"}},[t._v("#")]),t._v("Programmatic pages")]),s("p",[t._v("Pages can be created programmatically by using the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("createPages")]),t._v(" hook in "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("gridsome.server.js")]),t._v(". This is useful if you want to manually create pages from an external API "),s("a",{attrs:{href:"/docs/pages-api#create-pages-from-external-apis"}},[t._v("without using GraphQL data layer")]),t._v(".")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createPage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/templates/MyPage.vue'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[s("a",{attrs:{href:"/docs/pages-api/"}},[t._v("Read more about the Pages API")])]),s("h2",{attrs:{id:"dynamic-routing"}},[s("a",{attrs:{href:"#dynamic-routing","aria-hidden":"true"}},[t._v("#")]),t._v("Dynamic routing")]),s("p",[t._v("Pages can have dynamic routes. Dynamic routes are useful for pages that only need client-side routing. For example user pages that fetch info from an external API in production based on a segment in the URL.")]),s("p",[t._v("Learn more about "),s("a",{attrs:{href:"/docs/dynamic-routing/"}},[t._v("dynamic routing")])]),s("h2",{attrs:{id:"page-meta-info"}},[s("a",{attrs:{href:"#page-meta-info","aria-hidden":"true"}},[t._v("#")]),t._v("Page meta info")]),s("p",[t._v("Gridsome uses "),s("g-link",{attrs:{to:"https://vue-meta.nuxtjs.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("vue-meta")]),t._v(" for handling meta info about the page.")],1),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, world!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  metaInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, world!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'author'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[t._v("Learn more about "),s("a",{attrs:{href:"/docs/head/"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("populating <head>")])]),t._v(".")]),s("h2",{attrs:{id:"custom-404-page"}},[s("a",{attrs:{href:"#custom-404-page","aria-hidden":"true"}},[t._v("#")]),t._v("Custom 404 page")]),s("p",[t._v("Create a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/404.vue")]),t._v(" component to have a custom 404 page.")])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);a.default=_.exports}}]);