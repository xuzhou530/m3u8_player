(function(t){function e(e){for(var r,i,l=e[0],s=e[1],u=e[2],f=0,p=[];f<l.length;f++)i=l[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pure-g",attrs:{id:"app"}},[n("div",{staticClass:"pure-u-1-5"}),n("div",{staticClass:"pure-u-3-5"},[n("div",{staticClass:"search pure-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"search-box",attrs:{type:"text",placeholder:"Please input link ..."},domProps:{value:t.url},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchUrl(e)},input:function(e){e.target.composing||(t.url=e.target.value)}}}),n("button",{staticClass:"pure-button search-btn",on:{click:t.switchUrl}},[t._v("Play !")])]),n("div",{ref:"player",staticClass:"player"},[n("div",{directives:[{name:"show",rawName:"v-show",value:null!==t.title,expression:"title !== null"}],staticClass:"title"},[t._v("标题："+t._s(t.title))]),n("div",{attrs:{id:"xg"}})])]),n("div",{staticClass:"pure-u-1-5"},[n("div",{staticClass:"aboutBtn",on:{click:t.openAbout}},[t._v("=")])]),n("about",{ref:"about"})],1)},a=[],i=(n("386d"),n("4917"),n("3b2b"),n("5392"),n("9000")),l=n.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"about pure-u-1-5"},[n("article",{staticClass:"content"},[n("div",{staticClass:"close",on:{click:t.close}},[t._v("+")]),n("h3",[t._v("使用方式：")]),n("p",[t._v("第一种：直接在输入框内填写正确的 m3u8 视频链接，按回车键或者点击 Play ! 按钮，即可缓冲播放视频。")]),t._m(0),n("h3",[t._v("资源网站：")]),t._m(1),t._m(2),t._m(3),t._m(4),n("h3",[t._v("免责声明：")]),n("p",[t._v("该网站只提供播放功能，用于学习交流。")])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("第二种：配合 "),n("a",{attrs:{href:"",target:"_blank"}},[t._v("m3u8资源助手")]),t._v(" 脚本使用。需要安装 Tampermonkey 浏览器扩展插件。推荐这种！")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"http://zuidazy.net/",target:"_blank"}},[t._v("最大资源网：http://zuidazy.net/")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"http://www.okzyw.com/",target:"_blank"}},[t._v("OK资源网：http://www.okzyw.com/")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"http://www.172zy.net/",target:"_blank"}},[t._v("172资源网：http://www.172zy.net/")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"http://www.1977zy.com/",target:"_blank"}},[t._v("1977资源网：http://www.1977zy.com/")])])}],c={data:function(){return{show:!0}},methods:{close:function(){this.show=!1}}},f=c,p=(n("f991"),n("2877")),d=Object(p["a"])(f,s,u,!1,null,"859222ce",null),h=d.exports,v={name:"app",data:function(){return{xg:null,url:null,title:null,config:{id:"xg",url:null,fluid:!0,autoplay:!1,keyShortcut:"on",defaultPlaybackRate:1,playbackRate:[.5,.75,1,1.5,2]}}},components:{about:h},methods:{getParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!==n?unescape(n[2]):null},getUrl:function(){this.url=this.getParam("url"),this.title=this.getParam("title"),this.url&&(this.playUrl(this.url),this.url=null)},switchUrl:function(){var t=this;if(this.url&&this.xg){this.xg.destroy();var e=setTimeout(function(){t.xg=null;var n=document.createElement("div");n.id="xg",t.$refs.player.appendChild(n),t.playUrl(t.url),t.url=null,clearTimeout(e)},0)}},playUrl:function(t){t&&(this.config.url=t,this.xg=new l.a(this.config))},openAbout:function(){this.$refs.about.show=!0}},mounted:function(){this.getUrl()}},w=v,m=(n("5c0b"),Object(p["a"])(w,o,a,!1,null,null,null)),g=m.exports,b=n("9483");Object(b["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("e811");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},"8bde":function(t,e,n){},f991:function(t,e,n){"use strict";var r=n("8bde"),o=n.n(r);o.a}});