(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"71da180d",3:"1bbeb9a3",4:"d55bdc9e",5:"7ed295e2",6:"869d3d6f",7:"608047ff",8:"4244d556",9:"de4acf57",10:"b8f7cbeb",11:"bff4e0db"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b05d"),c=n("2a19"),s=n("9c64");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],plugins:{Notify:c["a"],Meta:s["a"]}});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},l=[],p={name:"App"},d=p,f=n("2877"),h=Object(f["a"])(d,u,l,!1,null,null,null),b=h.exports,m=n("8c4f");n("ddb0");const v=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))},{path:"printer",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"3855"))},{path:"printer/edit/:id",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"f7a7"))},{path:"printer/new",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"c692"))},{name:"service_new",path:"service/add",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"e5f0"))},{path:"printer/scan",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"75b0"))},{path:"client",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"dcb6"))},{path:"client/edit/:id",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"4ac7"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e51e"))}];var y=v;r["a"].use(m["a"]);var w=function(){const e=new m["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},g=async function(){const e="function"===typeof w?await w({Vue:r["a"]}):w,t={router:e,render:e=>e(b),el:"#q-app"};return{app:t,router:e}};const P=e=>{c["a"].create({type:"positive",message:e})},j=e=>{c["a"].create({type:"negative",message:e})},O=e=>{c["a"].create({type:"warning",message:e})};var x=async({Vue:e})=>{e.prototype.$notify={success:P,error:j,warn:O}},_=n("bc3a"),$=n.n(_);r["a"].prototype.$axios=$.a;var S=n("9523"),k=n.n(S),M=n("f508");class V{constructor(e){var t=this;k()(this,"read",(async function(){return(await t.http.get("/")).data})),k()(this,"getById",(async function(e){return(await t.http.get(`/${e}`)).data})),k()(this,"post",(async function(e){return(await t.http.post("/",e)).data})),k()(this,"update",(async function(e,n){return(await t.http.put(`/${e}`,n)).data})),k()(this,"delete",(async function(e){return(await t.http.delete(`/${e}`)).data}));const n="https://datapac-server.herokuapp.com";this.http=$.a.create({baseURL:n+"/api/"+e,timeout:1e4,headers:{"Access-Control-Allow-Origin":"*"}}),this.http.interceptors.request.use((e=>(M["a"].show(),e)),(e=>Promise.reject(e))),this.http.interceptors.response.use((e=>(M["a"].hide(),e)),(e=>Promise.reject(e)))}}var q=V;class A extends q{constructor(){var e;super("printer"),e=this,k()(this,"getByBarcode",(async function(t){return(await e.http.get(`/barcode/${t}`)).data}))}}var B=A;class C extends q{constructor(){super("modelprinter")}}var E=C;class T extends q{constructor(){super("client")}}var L=T;const J={printer:new B,modelPrinter:new E,client:new L};var I=async({Vue:e})=>{e.prototype.$api=J},N=n("8179"),Q=async({Vue:e})=>{e.use(N["a"])};const R="";async function U(){const{app:e,router:t}=await g();let n=!1;const o=e=>{n=!0;const r=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,""),i=[x,void 0,I,Q];for(let s=0;!1===n&&s<i.length;s++)if("function"===typeof i[s])try{await i[s]({app:e,router:t,Vue:r["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:R})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&new r["a"](e)}U()}});