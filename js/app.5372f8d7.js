(function(t){function e(e){for(var n,o,l=e[0],i=e[1],u=e[2],b=0,f=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},c=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"350d":function(t,e,a){"use strict";a("4006")},4006:function(t,e,a){},"6cc2":function(t,e,a){"use strict";a("b6e0")},7272:function(t,e,a){"use strict";a("e64d")},a801:function(t,e,a){},b6e0:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(t,e){var a=Object(n["A"])("router-view");return Object(n["t"])(),Object(n["d"])(a)}a("7272");var c=a("6b0d"),o=a.n(c);const l={},i=o()(l,[["render",r]]);var u=i,s=a("6c02"),b=function(t){return Object(n["w"])("data-v-8c5feb3e"),t=t(),Object(n["u"])(),t},f={id:"frame"},d=b((function(){return Object(n["g"])("h1",{class:"title"},[Object(n["h"])("Tic Tac"),Object(n["g"])("br"),Object(n["h"])("Toe")],-1)})),j=b((function(){return Object(n["g"])("span",null,"Csatlakozás",-1)})),O=b((function(){return Object(n["g"])("span",null,"Létrehozás",-1)}));function p(t,e,a,r,c,o){var l=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("div",f,[d,Object(n["i"])(l,{to:"/join",class:"button"},{default:Object(n["H"])((function(){return[j]})),_:1}),Object(n["i"])(l,{to:"/create",class:"button"},{default:Object(n["H"])((function(){return[O]})),_:1})])}var v=Object(n["j"])({name:"Menu",setup:function(){localStorage.clear()}});a("6cc2");const g=o()(v,[["render",p],["__scopeId","data-v-8c5feb3e"]]);var h=g,m=function(t){return Object(n["w"])("data-v-27860661"),t=t(),Object(n["u"])(),t},y=m((function(){return Object(n["g"])("h1",{class:"title"},"Létrehozás",-1)})),w={class:"inputfield"},k=["max"],x=Object(n["h"])("   X   "),_=["max"],C={class:"target"},I=m((function(){return Object(n["g"])("label",{for:"goal"},"Cél: ",-1)})),S=["max"],z=m((function(){return Object(n["g"])("h2",{class:"title2"},"Előnézet",-1)})),P={class:"checki"},L=m((function(){return Object(n["g"])("label",{for:"local"},"Lokális játék",-1)})),G=m((function(){return Object(n["g"])("span",null,"Létrehoz",-1)})),T=[G];function M(t,e,a,r,c,o){return Object(n["t"])(),Object(n["f"])(n["a"],null,[y,Object(n["g"])("div",w,[Object(n["I"])(Object(n["g"])("input",{type:"number",class:"numi",name:"width",min:"3",max:t.data.max,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.data.width=e})},null,8,k),[[n["F"],t.data.width]]),x,Object(n["I"])(Object(n["g"])("input",{type:"number",class:"numi",name:"height",min:"3",max:t.data.max,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.data.height=e})},null,8,_),[[n["F"],t.data.height]]),Object(n["g"])("div",C,[I,Object(n["I"])(Object(n["g"])("input",{type:"number",class:"numi",name:"goal",min:"3",max:t.data.height>=t.data.width?t.data.height:t.data.width,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.data.goal=e})},null,8,S),[[n["F"],t.data.goal]])])]),z,Object(n["g"])("div",{class:"preview",style:Object(n["p"])({"grid-template-rows":t.rows,"grid-template-columns":t.cols})},[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(t.data.width*t.data.height,(function(t){return Object(n["t"])(),Object(n["f"])("div",{class:"tile",key:t})})),128))],4),Object(n["g"])("div",P,[Object(n["I"])(Object(n["g"])("input",{type:"checkbox",name:"local","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.data.isLocal=e})},null,512),[[n["E"],t.data.isLocal]]),L]),Object(n["g"])("button",{class:"button",onClick:e[4]||(e[4]=function(){return t.CreateGame&&t.CreateGame.apply(t,arguments)})},T)],64)}a("d3b7"),a("25f0");var A=Object(n["j"])({name:"Create",setup:function(){var t=Object(n["x"])({height:3,width:3,goal:3,isLocal:!0,max:12});Object(n["G"])((function(){return t.height}),(function(e){e>t.max&&(t.height=t.max)})),Object(n["G"])((function(){return t.width}),(function(e){e>t.max&&(t.width=t.max)})),Object(n["G"])((function(){return t.goal}),(function(e){var a=t.height>=t.width?t.height:t.width;e>a&&(t.goal=a)}));var e=Object(n["b"])((function(){var e="/game";return t.isLocal&&(e="/game/local"),e})),a=Object(n["b"])((function(){for(var e="",a=0;a<t.height;a++)e+=" 1fr";return e})),r=Object(n["b"])((function(){for(var e="",a=0;a<t.width;a++)e+=" 1fr";return e})),c=Object(s["d"])();function o(){localStorage.setItem("table_width",t.width.toString()),localStorage.setItem("table_height",t.height.toString()),localStorage.setItem("table_goal",t.goal.toString()),c.push(e.value)}return{data:t,rows:a,cols:r,CreateGame:o}}});a("d364");const J=o()(A,[["render",M],["__scopeId","data-v-27860661"]]);var R=J,U=function(t){return Object(n["w"])("data-v-13ccb338"),t=t(),Object(n["u"])(),t},V=U((function(){return Object(n["g"])("h1",{class:"title"},"Csatlakozás",-1)})),F=U((function(){return Object(n["g"])("p",{class:"info"},"Kérd el a létrehozó féltől a kódot, majd add meg azt.",-1)})),Q=U((function(){return Object(n["g"])("input",{type:"text"},null,-1)})),B=U((function(){return Object(n["g"])("button",null,[Object(n["g"])("span",null,"Csatlakozás")],-1)}));function E(t,e,a,r,c,o){return Object(n["t"])(),Object(n["f"])(n["a"],null,[V,F,Q,B],64)}var H=Object(n["j"])({name:"Join",setup:function(){console.log()}});a("ead3");const K=o()(H,[["render",E],["__scopeId","data-v-13ccb338"]]);var N=K,X=(a("b0c0"),a("99af"),function(t){return Object(n["w"])("data-v-440d541b"),t=t(),Object(n["u"])(),t}),q={class:"frame"},D={class:"names"},W=["onClick"],Y={key:0,version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 50 50","enable-background":"new 0 0 50 50","xml:space":"preserve"},Z=X((function(){return Object(n["g"])("g",{id:"Layer_3"},[Object(n["g"])("line",{id:"path2",fill:"none",stroke:"#000000","stroke-width":"3","stroke-miterlimit":"10",x1:"8.5",y1:"41.5",x2:"41.5",y2:"8.5"}),Object(n["g"])("line",{id:"path3",fill:"none",stroke:"#000000","stroke-width":"3","stroke-miterlimit":"10",x1:"41.5",y1:"41.5",x2:"8.5",y2:"8.5"})],-1)})),$=[Z],tt={key:1,version:"1.1",id:"circle",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 100 100","enable-background":"new 0 0 50 50","xml:space":"preserve"},et=X((function(){return Object(n["g"])("circle",{fill:"none",stroke:"#000","stroke-width":"5","stroke-mitterlimit":"10",cx:"50",cy:"50",r:"45","stroke-dasharray":"360","stroke-linecap":"round",transform:"rotate(-90 ) translate(-100 0)"},[Object(n["g"])("animate",{attributeName:"stroke-dashoffset",values:"360;0",dur:"0.20s"})],-1)})),at=[et],nt={class:"buttons"},rt=X((function(){return Object(n["g"])("span",null,"Kilépés",-1)})),ct=[rt],ot=X((function(){return Object(n["g"])("span",null,"Újrakezdés",-1)})),lt=[ot];function it(t,e,a,r,c,o){return Object(n["t"])(),Object(n["f"])("div",q,[Object(n["g"])("div",D,[Object(n["g"])("h1",{id:"player1",class:Object(n["o"])(t.data.player1.shape===t.activePlayer?"active":"")},Object(n["C"])(t.data.player1.name),3),Object(n["g"])("h1",{id:"player2",class:Object(n["o"])(t.data.player2.shape===t.activePlayer?"active":"")},Object(n["C"])(t.data.player2.name),3)]),Object(n["g"])("div",{class:"playarea",style:Object(n["p"])({"grid-template-columns":t.cols,"aspect-ratio":"".concat(t.width," / ").concat(t.height)})},[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(t.table,(function(e,a){return Object(n["t"])(),Object(n["f"])("div",{class:"col",style:Object(n["p"])({"grid-template-rows":t.rows}),key:a},[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e,(function(e,r){return Object(n["t"])(),Object(n["f"])("div",{class:"tile",key:e,onClick:function(e){return t.TileClick(r,a)}},[!0===e?(Object(n["t"])(),Object(n["f"])("svg",Y,$)):Object(n["e"])("",!0),!1===e?(Object(n["t"])(),Object(n["f"])("svg",tt,at)):Object(n["e"])("",!0)],8,W)})),128))],4)})),128))],4),Object(n["g"])("div",nt,[Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return t.Quit&&t.Quit.apply(t,arguments)})},ct),Object(n["g"])("button",{onClick:e[1]||(e[1]=function(){return t.Restart&&t.Restart.apply(t,arguments)})},lt)])])}var ut=a("3835"),st=Object(n["j"])({name:"Game",setup:function(){var t=Object(s["c"])(),e=Object(s["d"])(),a=Object(n["x"])({player1:{name:"Player 1",shape:!0},player2:{name:"Player 2",shape:!1}}),r=Object(n["y"])(!0);function c(t){return!0===t?a.player1:a.player2}"local"==t.params.id&&console.log("local game");var o=Object(n["y"])(parseInt(localStorage.getItem("table_width"))),l=Object(n["y"])(parseInt(localStorage.getItem("table_height"))),i=Object(n["y"])(parseInt(localStorage.getItem("table_goal"))),u=Object(n["y"])(!0);function b(t,e){if(u.value&&(console.log("Row: ".concat(t,", Column: ").concat(e)),void 0===O.value[e][t])){u.value=!1,O.value[e][t]=r.value;var a=O.value,n=0,s=!1;if(!s)for(var b=0;b<l.value;b++){if(!(n<i.value)){s=!0;break}if(a[e][b]===r.value){if(n++,n>=i.value){s=!0;break}}else n=0}if(n=0,!s)for(var f=0;f<o.value;f++){if(!(n<i.value)){s=!0;break}if(a[f][t]===r.value){if(n++,n>=i.value){s=!0;break}}else n=0}if(n=0,!s){for(var d=[0,0],j=e,p=t;j>=0&&p>=0;j--,p--)console.log(j,p),d=[j,p];for(var v=d,g=Object(ut["a"])(v,2),h=g[0],m=g[1];h<o.value&&m<l.value;h++,m++){if(console.log(h,m,n,i.value),!(n<i.value)){s=!0;break}if(a[h][m]===r.value){if(n++,console.log(n),n>=i.value){s=!0;break}}else n=0}}if(n=0,!s){for(var y=[0,0],w=e,k=t;w<o.value&&k>=0;w++,k--)y=[w,k];for(var x=y,_=Object(ut["a"])(x,2),C=_[0],I=_[1];C>=0&&I<l.value;C--,I++){if(!(n<i.value)){s=!0;break}if(a[C][I]===r.value){if(n++,n>=i.value){s=!0;break}}else n=0}}s?console.log("".concat(c(r.value).name," nyert!")):(r.value=!r.value,u.value=!0)}}var f=Object(n["b"])((function(){for(var t="",e=0;e<l.value;e++)t+=" 1fr";return t})),d=Object(n["b"])((function(){for(var t="",e=0;e<o.value;e++)t+=" 1fr";return t}));function j(){for(var t=new Array(o.value),e=0;e<t.length;e++)t[e]=new Array(l.value);return t}var O=Object(n["y"])(j());function p(){e.push("/")}function v(){O.value=j(),r.value=!r.value,u.value=!0}return{data:a,width:o,height:l,cols:d,rows:f,table:O,activePlayer:r,Quit:p,Restart:v,TileClick:b}}});a("350d");const bt=o()(st,[["render",it],["__scopeId","data-v-440d541b"]]);var ft=bt,dt=[{path:"/",name:"Menu",component:h},{path:"/create",name:"Create",component:R},{path:"/join",name:"Join",component:N},{path:"/game/:id",name:"Game",component:ft},{path:"/:catchAll(.*)",redirect:"/"}],jt=Object(s["a"])({history:Object(s["b"])(),routes:dt}),Ot=jt;Object(n["c"])(u).use(Ot).mount("#app")},d1cb:function(t,e,a){},d364:function(t,e,a){"use strict";a("a801")},e64d:function(t,e,a){},ead3:function(t,e,a){"use strict";a("d1cb")}});
//# sourceMappingURL=app.5372f8d7.js.map