(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s,r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"antialiased bg-black h-screen"},[n("mdx-deck",{ref:"markdown",staticClass:"hidden"}),n(t.modeComponent,{tag:"component",staticClass:"h-full",attrs:{decks:t.decks,page:t.page},on:{"go-page":t.goPage}},[n("div",{staticClass:"relative h-full overflow-hidden bg-theme-background"},[n("transition",{attrs:{name:t.transitionName}},[n("router-view",{key:t.$route.name+(t.$route.params.page||""),attrs:{page:t.page,decks:t.decks}})],1),"normal"===t.mode?n("div",[n("div",{staticClass:"fixed bottom-0 inset-x-0 mb-2 flex justify-center"},[t._l(t.decks.length,(function(e){return n("button",{key:e,staticClass:"block p-1 border-2 border-transparent focus:border-theme-dot rounded-full cursor-default focus:outline-none",class:[e<=t.page?"opacity-50":"opacity-25"],attrs:{type:"button"},on:{click:function(n){return t.goPage(e)}}},[n("span",{staticClass:"block w-2 h-2 bg-theme-dot rounded-full"})])})),n("div",{staticClass:"fixed w-16 h-full top-0 left-0",attrs:{role:"button",title:"Previous Slide"},on:{click:t.previous}}),n("div",{staticClass:"fixed w-16 h-full top-0 right-0",attrs:{role:"button",title:"Next Slide"},on:{click:t.next}})],2)]):t._e()],1)])],1)},o=[],i=(n("e25e"),n("ac1f"),n("1276"),n("8a60")),l=n.n(i),c=n("2638"),d=n.n(c),u=n("dfdf"),p=n("30f8"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},f=[],m=(n("4160"),n("a630"),n("3ca3"),n("159b"),n("99af"),n("c975"),{data:function(){return{componentPage:null}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$el.closest(".markdown");e&&(t.componentPage=Array.from(e.parentElement.children).indexOf(e)+1)}))},beforeDestroy:function(){this.$store.commit("setSteps",0)},watch:{active:function(t){t&&this.$store.commit("setSteps",this.steps)},step:function(t){this.active&&history.pushState({},"","/#/".concat(this.currentPage).concat(t?".".concat(t):""))}},computed:{currentPage:function(){return parseInt(this.$route.params.page)},active:function(){return this.currentPage===this.componentPage},step:function(){return this.$store.state.step||0}}}),g={mixins:[m],data:function(){return{steps:this.$slots.default.length}},mounted:function(){var t=this;this.$nextTick((function(){Array.from(t.$el.children).forEach((function(e,n){n+1>t.step&&e.classList.add("opacity-0")}))}))},watch:{step:function(t){Array.from(this.$el.children).forEach((function(e,n){n+1<=t?e.classList.remove("opacity-0"):e.classList.add("opacity-0")}))}}},v=g,b=n("2877"),x=Object(b["a"])(v,h,f,!1,null,null,null),w=x.exports,y={props:["src"],render:function(t){return t("div",{attrs:{class:"w-full"}},[t("img",{attrs:{class:"mx-auto h-full",src:this.src}})])}},k=(n("a15b"),n("d81d"),n("d4cd")()),$=n("553b"),C=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return e.children?t(e.children,e.tag,e.data?e.data.class:""):"<".concat(n,' class="').concat(s,'">').concat(e.text,"</").concat(n,">")})).join("")},S=function(t,e,n){var s=n.lineNumbers;if(e.default[1]){var r=e.default[1].children[0].data.className;return t("div",{attrs:{class:"".concat(r)}},[e.default[1]])}var a=$(C(e.default),{indent:4,newline:"\n    "}),o=k.render("\n    ".concat(a,"\n    "));return t("div",{attrs:{class:"language-html ".concat(s?"line-numbers":"")},domProps:{innerHTML:o}})},N={render:function(t){return t("div",{attrs:{class:"relative w-full max-w-3xl overflow-hidden mb-8"}},[t("div",{attrs:{class:"bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4"}},[this.$slots.default[0]]),t("div",{attrs:{class:"rounded-b-lg bg-gray-800"}},[S(t,this.$slots,{lineNumbers:this.$attrs.lineNumbers||!1})])])}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen w-screen flex flex-col items-center justify-center"},[t.title?n("h1",{staticClass:"text-gray-400 font-bold mt-8 mb-4",domProps:{textContent:t._s(t.title)}}):t._e(),n("div",{staticClass:"flex-grow flex items-center overflow-hidden"},[n("pre",{ref:"code",class:"language-"+t.lang,domProps:{innerHTML:t._s(t.html)}},[t._v("    ")])]),n("p",{staticClass:"h-16 mt-4 mb-10"},[t._v(" "+t._s(t.notes)+" ")])])},j=[],P=(n("caad"),n("2532"),n("498a"),n("8c7a")),M=n.n(P),T=(n("cb55"),n("416b"),n("6605"),n("8009"),n("289e"),n("6cf3"),n("6217"),n("8e9b"),n("0a31"),n("183f"),n("f393"),{mixins:[m],data:function(){return{title:this.$attrs.title,lang:this.$attrs.lang||"javascript",code:this.$attrs.code,codeSteps:this.$attrs.steps,steps:this.$attrs.steps.length-1,html:""}},watch:{step:{immediate:!0,handler:function(t){this.goStep(t)}}},computed:{notes:function(){return this.codeSteps[this.step]?this.codeSteps[this.step].notes:""}},methods:{goStep:function(t){var e=this;if(this.codeSteps[t]){var n=this.codeSteps[t],s=n.lines,r=n.range,a=n.ranges;this.html="";var o=this.code.default||this.code;o.trim().split("\n").forEach((function(t,n){var o=!1,i=n+1;s||r||a?(s&&s.includes(i)&&(o=!0),r&&2===r.length&&i>=r[0]&&i<=r[1]&&(o=!0),a&&a.forEach((function(t){t&&2===t.length&&i>=t[0]&&i<=t[1]&&(o=!0)}))):o=!0;var l="token-line ".concat(o?"":"opacity-25"," transition-normal"),c=t?M.a.highlight(t,M.a.languages[e.lang],e.lang):'<span class="inline-block"></span>';e.html+='<div class="'.concat(l,'">').concat(c,"</div>")}))}}}}),E=T,O=Object(b["a"])(E,_,j,!1,null,null,null),L=O.exports,A=(n("fb6a"),n("284c")),z={render:function(t){return t("div",{attrs:{class:"w-full flex flex-row -mx-2"}},[t("div",{attrs:{class:"w-1/2 mx-2 flex items-center justify-center"}},[this.$slots.default[0]]),t("div",{attrs:{class:"w-1/2 mx-2 flex flex-col items-center justify-center"}},Object(A["a"])(this.$slots.default.slice(1)))])}},D={},I="div";function H(t){var e=t.components,n=Object(u["a"])(t,["components"]);return s(I,d()([{},D,{},n,{attrs:{components:e,mdxType:"MDXLayout"}}]),[s("h1",["MDX VUE DECK"]),s("h2",["Vue version MDX-based presentation decks"]),s("hr"),s("h1",["PRESENTATION DECKS"]),s("hr"),s("h1",["BUILT WITH ",s("a",{attrs:{href:"https://github.com/mdx-js/mdx",target:"_blank"}},["MDX"])]),s("hr"),s("h1",["List"]),s("ul",[s("li",{attrs:{parentName:"ul"}},[s("p",{attrs:{parentName:"li"}},["Make bulleted lists"]),s("ul",{attrs:{parentName:"li"}},[s("li",{attrs:{parentName:"ul"}},["1"]),s("li",{attrs:{parentName:"ul"}},["2"]),s("li",{attrs:{parentName:"ul"}},["3"]),s("li",{attrs:{parentName:"ul"}},["4"])])]),s("li",{attrs:{parentName:"ul"}},[s("p",{attrs:{parentName:"li"}},["To help make your point"])])]),s("hr"),s("pre",[s("code",["<button>code example</button>\n"])]),s("hr"),s("pre",[s("code",{class:"language-jsx"},["export default {\n    data() {\n        return {\n            message: 'hello'\n        }\n    }\n}\n"])]),s("hr"),s("pre",[s("code",{class:"language-diff"},['+ <div class="z-40 ml-0 mt-0 bg-gray-400">z-40</div>\n- <div class="z-30 ml-2 mt-2 bg-gray-500">z-30</div>\n  <div class="z-20 ml-4 mt-4 bg-gray-600">z-20</div>\n  <div class="z-10 ml-6 mt-6 bg-gray-700">z-10</div>\n  <div class="z-0 ml-8 mt-8 bg-gray-800">z-0</div>\n'])]),s("hr"),s("h1",["Code Sample Component"]),s(N,{attrs:{lineNumbers:!0,mdxType:"CodeSample"}},[s("div",{class:"relative h-32 text-center"},[s("div",{class:"z-40 absolute w-24 h-24 ml-0 mt-0 bg-gray-400 flex justify-center items-center"},["z-40"]),s("div",{class:"z-30 absolute w-24 h-24 ml-2 mt-2 bg-gray-500 flex justify-center items-center"},["z-30"]),s("div",{class:"z-20 absolute w-24 h-24 ml-4 mt-4 bg-gray-600 flex justify-center items-center"},["z-20"]),s("div",{class:"z-10 absolute w-24 h-24 ml-6 mt-6 bg-gray-700 flex justify-center items-center"},["z-10"]),s("div",{class:"z-0 absolute w-24 h-24 ml-8 mt-8 bg-gray-800 flex justify-center items-center"},["z-0"])])]),s("hr"),s("p",[s("img",{attrs:{src:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80"}})]),s("hr"),s(z,{attrs:{mdxType:"Split"}},[s("p",[s("img",{attrs:{src:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80"}})]),s("h1",["SPLIT LAYOUT"])]),s("hr"),s(y,{attrs:{src:"./images/think.gif",mdxType:"BGImage"}}),s("hr"),s("h1",["Appear"]),s(w,{attrs:{mdxType:"Appear"}},[s("li",{class:"text-blue-700"},["One"]),s("li",["Two"]),s("li",["Three"])]),s("hr"),s(L,{attrs:{lang:"javascript",steps:[{lines:[3],notes:"Import the Apollo Client"},{lines:[4],notes:"Import Vue Apollo for using Apollo with vue"},{lines:[7,8,9,10,11],notes:"Create the provider and give it the URL"},{lines:[14],notes:"Tell Vue to use Apollo"},{lines:[15,16,17,18,19],notes:"Mount Vue"}],code:'\nimport Vue from "vue"\nimport App from "./App"\nimport ApolloClient from "apollo-boost"\nimport VueApollo from "vue-apollo"\n\n\nconst apolloProvider = new VueApollo({\n  defaultClient: new ApolloClient({\n    uri: "https://api.graphcms.com/simple/v1/awesomeTalksClone"\n  })\n})\n\n\nVue.use(VueApollo)\nnew Vue({\n  el: "#app",\n  provide: apolloProvider.provide(),\n  render: h => h(App)\n})\n  ',mdxType:"CodeSurfer"}}),s("hr"),s("h1",["Table"]),s("table",[s("thead",{attrs:{parentName:"table"}},[s("tr",{attrs:{parentName:"thead"}},[s("th",d()([{attrs:{parentName:"tr"}},{align:null}]),["Month"]),s("th",d()([{attrs:{parentName:"tr"}},{align:null}]),["Savings"]),s("th",d()([{attrs:{parentName:"tr"}},{align:null}]),["Spending"])])]),s("tbody",{attrs:{parentName:"table"}},[s("tr",{attrs:{parentName:"tbody"}},[s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["January"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$100"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$900"])]),s("tr",{attrs:{parentName:"tbody"}},[s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["July"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$750"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$1000"])]),s("tr",{attrs:{parentName:"tbody"}},[s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["December"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$250"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$300"])]),s("tr",{attrs:{parentName:"tbody"}},[s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["April"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$400"]),s("td",d()([{attrs:{parentName:"tr"}},{align:null}]),["$700"])])])]),s("hr"),s("div",{class:"w-full max-w-5xl"},[s("p",{class:"codepen",attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"godkin-mo","data-slug-hash":"exJqRZ","data-pen-title":"Sprite Sheet"},style:"height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"},[s("span",["See the Pen ",s("a",{attrs:{href:"https://codepen.io/godkin-mo/pen/exJqRZ"}},["Sprite Sheet"])," by godkin.mo (",s("a",{attrs:{href:"https://codepen.io/godkin-mo"}},["@godkin-mo"]),") on ",s("a",{attrs:{href:"https://codepen.io"}},["CodePen"]),"."])]),s("script",{attrs:{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}})])])}H.isMDXComponent=!0;var V={name:"Mdx",render:function(t){return s=p["a"].bind({vueCreateElement:t}),H({})}},J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex-auto flex flex-row p-8"},[n("div",{staticClass:"flex flex-col h-full w-3/4 mr-8"},[t._t("default")],2),n("div",{staticClass:"w-1/4"},[t.page<t.decks.length?n("div",{staticClass:"relative overflow-hidden",staticStyle:{"padding-bottom":"56.25%"}},[n("div",{staticClass:"absolute markdown pointer-events-none",staticStyle:{width:"400%",height:"400%",transform:"scale(.25)","transform-origin":"0px 0px"},domProps:{innerHTML:t._s(t.decks[t.page])}})]):t._e()])]),n("div",{staticClass:"flex-shrink-0 h-24 p-8 text-white font-bold font-mono tracking-widest"},[t._v(" "+t._s(t.page)+"/"+t._s(t.decks.length)+" ")])])},B=[],X={props:["decks","page"]},q=X,R=Object(b["a"])(q,J,B,!1,null,null,null),U=R.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row"},[n("ul",{ref:"decks",staticClass:"h-screen w-1/6 overflow-auto pt-4"},t._l(t.decks,(function(e,s){return n("li",{key:s,staticClass:"px-4 mb-4"},[n("div",{staticClass:"relative border-4 cursor-pointer overflow-hidden",class:[t.page===s+1?"border-blue-500":"border-transparent"],staticStyle:{"padding-bottom":"56.25%"},on:{click:function(e){return t.$emit("go-page",s+1)}}},[n("div",{staticClass:"absolute markdown pointer-events-none",staticStyle:{width:"600%",height:"600%",transform:"scale(0.166667)","transform-origin":"0px 0px"},domProps:{innerHTML:t._s(t.decks[s])}})])])})),0),n("div",{staticClass:"flex flex-col h-screen w-5/6 pt-4"},[t._t("default"),n("div",{staticClass:"p-4 text-right text-white font-bold font-mono"},[t._v(" "+t._s(t.page)+"/"+t._s(t.decks.length)+" ")])],2)])},W=[],G={props:["decks","page"],watch:{page:function(t){this.scrollToHighlighted(t-1)}},mounted:function(){var t=this;this.$nextTick((function(){t.scrollToHighlighted(t.page-1,"end")}))},methods:{scrollToHighlighted:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nearest";this.$refs.decks.children[t].scrollIntoView({block:e})}}},K=G,Q=Object(b["a"])(K,F,W,!1,null,null,null),Z=Q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"flex flex-wrap"},t._l(t.decks,(function(e,s){return n("li",{key:s,staticClass:"w-1/4"},[n("div",{staticClass:"relative border-2 cursor-pointer overflow-hidden",class:[t.page===s+1?"border-blue-500":"border-black"],staticStyle:{"padding-bottom":"56.25%"},on:{click:function(e){return t.$emit("go-page",s+1)}}},[n("div",{staticClass:"absolute markdown pointer-events-none",staticStyle:{width:"400%",height:"400%",transform:"scale(.25)","transform-origin":"0px 0px"},domProps:{innerHTML:t._s(t.decks[s])}})])])})),0)])},tt=[],et={props:["decks","page"]},nt=et,st=Object(b["a"])(nt,Y,tt,!1,null,null,null),rt=st.exports,at={page:"mdx-deck-page",step:"mdx-deck-step"},ot={data:function(){return{focused:!0}},mounted:function(){window.addEventListener("focus",this.handleFocus),window.addEventListener("blur",this.handleBlur)},beforeDestroy:function(){window.removeEventListener("focus",this.handleFocus),window.removeEventListener("blur",this.handleBlur)},watch:{"$store.state.currentPage":function(t){this.focused&&localStorage.setItem(at.page,t)},"$store.state.step":function(t){localStorage.setItem(at.step,t)},focused:{immediate:!0,handler:function(t){t?window.removeEventListener("storage",this.handleStorageChange):window.addEventListener("storage",this.handleStorageChange)}}},methods:{handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},handleStorageChange:function(t){var e=parseInt(t.newValue,10);if(!isNaN(e))switch(t.key){case at.page:this.$router.push({name:"home",params:{page:e}});break;case at.step:this.$store.commit("setStep",e);break;default:break}}}},it={mixins:[ot],components:{MdxDeck:V,PresenterMode:U,OverviewMode:Z,GridMode:rt},data:function(){return{transitionName:"slide-left",decks:[]}},watch:{$route:function(t,e){var n=parseInt(t.params.page),s=parseInt(e.params.page);this.transitionName=n<s?"slide-right":"slide-left"}},computed:{mode:function(){return this.$store.state.mode},steps:function(){return this.$store.state.steps},step:function(){return this.$store.state.step||0},modeComponent:function(){return{normal:"div",presenter:"presenter-mode",overview:"overview-mode",grid:"grid-mode"}[this.mode]},page:function(){return parseInt(this.$route.hash.substr(1)||1)}},mounted:function(){var t=this;this.decks=this.$refs.markdown.$el.innerHTML.split("<hr>"),this.$store.commit("setStep",parseInt(location.hash.split(".")[1]||0)),l.a.bind("option+p",(function(){return t.$store.commit("toggleMode","presenter")})),l.a.bind("option+o",(function(){return t.$store.commit("toggleMode","overview")})),l.a.bind("option+g",(function(){return t.$store.commit("toggleMode","grid")})),l.a.bind(["right","pagedown","space"],(function(){return t.next()})),l.a.bind(["left","pageup","shift+space"],(function(){return t.previous()})),l.a.bind("esc",(function(){return t.$store.commit("toggleMode","normal")}))},methods:{goPage:function(t){"grid"===this.mode&&this.$store.commit("toggleMode","normal"),this.page!==t&&(this.$router.push({name:"home",params:{page:t}}),this.$store.commit("setStep",0))},next:function(){if(this.steps>0&&this.step<this.steps)return this.$store.commit("increaseStep");this.nextSlide()},nextSlide:function(){this.page>=this.decks.length||(this.$router.push({path:"/#".concat(this.page+1)}),this.$store.commit("setCurrentPage",this.page),this.$store.commit("setStep",0))},previous:function(){if(this.steps&&this.step>0)return this.$store.commit("decreaseStep");this.previousSlide()},previousSlide:function(){var t=this;this.page<=1||(this.$router.push({path:"/#".concat(this.page-1)}),this.$store.commit("setCurrentPage",this.page),setTimeout((function(){t.$store.commit("setStep",t.steps)}),0))}}},lt=it,ct=(n("8700"),Object(b["a"])(lt,a,o,!1,null,null,null)),dt=ct.exports,ut=n("8c4f"),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute inset-0 overflow-hidden"},[n("mdx-deck",{ref:"deck",staticClass:"flex flex-row justify-start w-full h-full transition-transform transition-normal",style:t.styleObj})],1)},ht=[],ft={components:{MdxDeck:V},props:["page","decks"],computed:{styleObj:function(){return{transform:"translateX(-".concat(100*((1===Math.abs(this.$store.state.currentPage-this.page)?this.page:this.$store.state.currentPage)-1),"%)")}}},mounted:function(){var t=this;this.$nextTick((function(){console.error(t.page),t.$store.commit("setCurrentPage",t.page)})),M.a.highlightAll(),this.transformMdxDom()},methods:{transformMdxDom:function(){var t=this,e=1,n=[[]];Array.from(this.$refs.deck.$el.children).forEach((function(t){"<hr>"!==t.outerHTML?n[e-1].push(t):(n[e]=[],e++)})),this.$refs.deck.$el.innerHTML="",n.forEach((function(e){var n=document.createElement("div"),s="markdown w-full h-full flex-shrink-0";s.split(" ").forEach((function(t){return n.classList.add(t)})),e.forEach((function(t){return n.appendChild(t)})),t.$refs.deck.$el.append(n)}))}}},mt=ft,gt=Object(b["a"])(mt,pt,ht,!1,null,null,null),vt=gt.exports;r["a"].use(ut["a"]);var bt=new ut["a"]({mode:"history",base:"",routes:[{path:"/:page?",name:"home",component:vt}]}),xt=n("2f62");r["a"].use(xt["a"]);var wt=new xt["a"].Store({state:{currentPage:1,mode:"normal",steps:0,step:0},mutations:{toggleMode:function(t,e){t.mode=t.mode===e?"normal":e},setCurrentPage:function(t,e){t.currentPage=e},setSteps:function(t,e){t.steps=e},setStep:function(t,e){t.step=e},increaseStep:function(t){t.step+=1},decreaseStep:function(t){t.step-=1}}});r["a"].config.productionTip=!1,new r["a"]({router:bt,store:wt,render:function(t){return t(dt)}}).$mount("#app")},8700:function(t,e,n){"use strict";var s=n("fb3d"),r=n.n(s);r.a},fb3d:function(t,e,n){}});
//# sourceMappingURL=app.4b45f50c.js.map