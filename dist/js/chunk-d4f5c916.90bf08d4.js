(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4f5c916"],{2734:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{attrs:{id:"knowledge-base-search"}},[n("b-card",{staticClass:"knowledge-base-bg text-center",style:{backgroundImage:"url("+r("707c")+")"},attrs:{"no-body":""}},[n("b-card-body",{staticClass:"card-body"},[n("h2",{staticClass:"text-primary"},[e._v(" Dedicated Source Used on Website ")]),n("b-card-text",{staticClass:"mb-2"},[n("span",[e._v("Popular searches: ")]),n("span",{staticClass:"font-weight-bolder"},[e._v("Sales automation, Email marketing")])]),n("b-form",{staticClass:"kb-search-input"},[n("b-input-group",{staticClass:"input-group-merge"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("feather-icon",{attrs:{icon:"SearchIcon"}})],1),n("b-form-input",{attrs:{id:"searchbar",placeholder:"Ask a question...."},model:{value:e.knowledgeBaseSearchQuery,callback:function(t){e.knowledgeBaseSearchQuery=t},expression:"knowledgeBaseSearchQuery"}})],1)],1)],1)],1)],1),n("section",{attrs:{id:"knowledge-base-content"}},[n("b-row",{staticClass:"kb-search-content-info match-height"},[e._l(e.filteredKB,(function(t){return n("b-col",{key:t.id,staticClass:"kb-search-content",attrs:{md:"4",sm:"6"}},[n("b-card",{staticClass:"text-center cursor-pointer",attrs:{"img-src":t.img,"img-alt":t.img.slice(5),"img-top":""},on:{click:function(r){return e.$router.push({name:"pages-knowledge-base-category",params:{category:t.category}})}}},[n("h4",[e._v(e._s(t.title))]),n("b-card-text",{staticClass:"mt-1"},[e._v(" "+e._s(t.desc)+" ")])],1)],1)})),n("b-col",{directives:[{name:"show",rawName:"v-show",value:!e.filteredKB.length,expression:"!filteredKB.length"}],staticClass:"text-center",attrs:{cols:"12"}},[n("h4",{staticClass:"mt-4"},[e._v(" Search result not found!! ")])])],2)],1)])},c=[],a=(r("4de4"),r("d3b7"),r("caad"),r("2532"),r("a15b")),s=r("b28b"),o=r("205f"),i=r("6197"),u=r("d6e4"),l=r("11de"),b=r("5e12"),d=r("3656"),p=r("4797"),f={components:{BRow:a["a"],BCol:s["a"],BCard:o["a"],BCardBody:i["a"],BCardText:u["a"],BForm:l["a"],BInputGroup:b["a"],BInputGroupPrepend:d["a"],BFormInput:p["a"]},data:function(){return{knowledgeBaseSearchQuery:"",kb:[]}},computed:{filteredKB:function(){var e=this.knowledgeBaseSearchQuery.toLowerCase();return this.kb.filter((function(t){return t.title.toLowerCase().includes(e)||t.desc.toLowerCase().includes(e)}))}},created:function(){var e=this;this.$http.get("/kb/data/knowledge_base").then((function(t){e.kb=t.data}))}},g=f,h=(r("8997"),r("2877")),O=Object(h["a"])(g,n,c,!1,null,null,null);t["default"]=O.exports},8997:function(e,t,r){"use strict";r("b85f")},a15b:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r("b42e"),c=r("c637"),a=r("a723"),s=r("2326"),o=r("228e"),i=r("6c06"),u=r("b508"),l=r("d82f"),b=r("cf75"),d=r("fa73");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=["start","end","center"],O=Object(u["a"])((function(e,t){return t=Object(d["h"])(Object(d["g"])(t)),t?Object(d["c"])(["row-cols",e,t].filter(i["a"]).join("-")):null})),j=Object(u["a"])((function(e){return Object(d["c"])(e.replace("cols",""))})),m=[],w=function(){var e=Object(o["b"])().reduce((function(e,t){return e[Object(b["g"])(t,"cols")]=Object(b["c"])(a["p"]),e}),Object(l["c"])(null));return m=Object(l["h"])(e),Object(b["d"])(Object(l["m"])(f(f({},e),{},{alignContent:Object(b["c"])(a["u"],null,(function(e){return Object(s["a"])(Object(s["b"])(h,"between","around","stretch"),e)})),alignH:Object(b["c"])(a["u"],null,(function(e){return Object(s["a"])(Object(s["b"])(h,"between","around"),e)})),alignV:Object(b["c"])(a["u"],null,(function(e){return Object(s["a"])(Object(s["b"])(h,"baseline","stretch"),e)})),noGutters:Object(b["c"])(a["g"],!1),tag:Object(b["c"])(a["u"],"div")})),c["Ob"])},y={name:c["Ob"],functional:!0,get props(){return delete this.props,this.props=w(),this.props},render:function(e,t){var r,c=t.props,a=t.data,s=t.children,o=c.alignV,i=c.alignH,u=c.alignContent,l=[];return m.forEach((function(e){var t=O(j(e),c[e]);t&&l.push(t)})),l.push((r={"no-gutters":c.noGutters},g(r,"align-items-".concat(o),o),g(r,"justify-content-".concat(i),i),g(r,"align-content-".concat(u),u),r)),e(c.tag,Object(n["a"])(a,{staticClass:"row",class:l}),s)}}},b85f:function(e,t,r){}}]);
//# sourceMappingURL=chunk-d4f5c916.90bf08d4.js.map