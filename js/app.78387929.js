(function(e){function t(t){for(var n,l,o=t[0],u=t[1],i=t[2],s=0,f=[];s<o.length;s++)l=o[s],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&f.push(c[l][0]),c[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==c[u]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},c={app:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var b=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"6bf9":function(e,t,a){"use strict";a("c6b7")},"6cc2":function(e,t,a){"use strict";a("b6e0")},7113:function(e,t,a){"use strict";a("dd11")},7272:function(e,t,a){"use strict";a("e64d")},b6e0:function(e,t,a){},c6b7:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(e,t){var a=Object(n["A"])("router-view");return Object(n["t"])(),Object(n["d"])(a)}a("7272");var r=a("6b0d"),l=a.n(r);const o={},u=l()(o,[["render",c]]);var i=u,b=a("6c02"),s=function(e){return Object(n["w"])("data-v-8c5feb3e"),e=e(),Object(n["u"])(),e},f={id:"frame"},d=s((function(){return Object(n["g"])("h1",{class:"title"},[Object(n["h"])("Tic Tac"),Object(n["g"])("br"),Object(n["h"])("Toe")],-1)})),j=s((function(){return Object(n["g"])("span",null,"Csatlakozás",-1)})),O=s((function(){return Object(n["g"])("span",null,"Létrehozás",-1)}));function p(e,t,a,c,r,l){var o=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("div",f,[d,Object(n["i"])(o,{to:"/join",class:"button"},{default:Object(n["H"])((function(){return[j]})),_:1}),Object(n["i"])(o,{to:"/create",class:"button"},{default:Object(n["H"])((function(){return[O]})),_:1})])}var v=Object(n["j"])({name:"Menu",setup:function(){localStorage.clear()}});a("6cc2");const g=l()(v,[["render",p],["__scopeId","data-v-8c5feb3e"]]);var h=g,m=function(e){return Object(n["w"])("data-v-6b14a372"),e=e(),Object(n["u"])(),e},y=m((function(){return Object(n["g"])("h1",{class:"title"},"Létrehozás",-1)})),w={class:"inputfield"},k=["max"],x=Object(n["h"])("   X   "),_=["max"],C={class:"target"},I=m((function(){return Object(n["g"])("label",{for:"goal"},"Cél: ",-1)})),S=["max"],P=m((function(){return Object(n["g"])("h2",{class:"title2"},"Előnézet",-1)})),z={class:"checki"},G=m((function(){return Object(n["g"])("label",{for:"local"},"Lokális játék",-1)})),L=m((function(){return Object(n["g"])("span",null,"Létrehoz",-1)})),T=[L];function M(e,t,a,c,r,l){return Object(n["t"])(),Object(n["f"])(n["a"],null,[y,Object(n["g"])("div",w,[Object(n["I"])(Object(n["g"])("input",{type:"number",class:"numi",name:"width",min:"3",max:e.data.max,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.data.width=t})},null,8,k),[[n["F"],e.data.width]]),x,Object(n["I"])(Object(n["g"])("input",{type:"number",class:"numi",name:"height",min:"3",max:e.data.max,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.data.height=t})},null,8,_),[[n["F"],e.data.height]]),Object(n["g"])("div",C,[I,Object(n["I"])(Object(n["g"])("input",{type:"number",class:"numi",name:"goal",min:"3",max:e.data.height>=e.data.width?e.data.height:e.data.width,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.data.goal=t})},null,8,S),[[n["F"],e.data.goal]])])]),P,Object(n["g"])("div",{class:"preview",style:Object(n["p"])({"grid-template-rows":e.rows,"grid-template-columns":e.cols})},[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e.data.width*e.data.height,(function(e){return Object(n["t"])(),Object(n["f"])("div",{class:"tile",key:e})})),128))],4),Object(n["g"])("div",z,[Object(n["I"])(Object(n["g"])("input",{type:"checkbox",name:"local","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.data.isLocal=t})},null,512),[[n["E"],e.data.isLocal]]),G]),Object(n["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return e.CreateGame&&e.CreateGame.apply(e,arguments)})},T)],64)}a("d3b7"),a("25f0");var A=Object(n["j"])({name:"Create",setup:function(){var e=Object(n["x"])({height:3,width:3,goal:3,isLocal:!0,max:12});Object(n["G"])((function(){return e.height}),(function(t){t>e.max&&(e.height=e.max)})),Object(n["G"])((function(){return e.width}),(function(t){t>e.max&&(e.width=e.max)})),Object(n["G"])((function(){return e.goal}),(function(t){var a=e.height>=e.width?e.height:e.width;t>a&&(e.goal=a)}));var t=Object(n["b"])((function(){var t="/game";return e.isLocal&&(t="/game/local"),t})),a=Object(n["b"])((function(){for(var t="",a=0;a<e.height;a++)t+=" 1fr";return t})),c=Object(n["b"])((function(){for(var t="",a=0;a<e.width;a++)t+=" 1fr";return t})),r=Object(b["d"])();function l(){localStorage.setItem("table_width",e.width.toString()),localStorage.setItem("table_height",e.height.toString()),localStorage.setItem("table_goal",e.goal.toString()),r.push(t.value)}return{data:e,rows:a,cols:c,CreateGame:l}}});a("6bf9");const J=l()(A,[["render",M],["__scopeId","data-v-6b14a372"]]);var R=J,U=function(e){return Object(n["w"])("data-v-13ccb338"),e=e(),Object(n["u"])(),e},V=U((function(){return Object(n["g"])("h1",{class:"title"},"Csatlakozás",-1)})),F=U((function(){return Object(n["g"])("p",{class:"info"},"Kérd el a létrehozó féltől a kódot, majd add meg azt.",-1)})),Q=U((function(){return Object(n["g"])("input",{type:"text"},null,-1)})),W=U((function(){return Object(n["g"])("button",null,[Object(n["g"])("span",null,"Csatlakozás")],-1)}));function B(e,t,a,c,r,l){return Object(n["t"])(),Object(n["f"])(n["a"],null,[V,F,Q,W],64)}var E=Object(n["j"])({name:"Join",setup:function(){console.log()}});a("ead3");const H=l()(E,[["render",B],["__scopeId","data-v-13ccb338"]]);var K=H,N=(a("b0c0"),a("99af"),function(e){return Object(n["w"])("data-v-9027b230"),e=e(),Object(n["u"])(),e}),X={class:"frame"},q={class:"names"},D={class:"won"},Y={key:0},Z=["onClick"],$={key:0,version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 50 50","enable-background":"new 0 0 50 50","xml:space":"preserve"},ee=N((function(){return Object(n["g"])("g",{id:"Layer_3"},[Object(n["g"])("line",{id:"path2",fill:"none",stroke:"#000000","stroke-width":"3","stroke-miterlimit":"10",x1:"8.5",y1:"41.5",x2:"41.5",y2:"8.5"}),Object(n["g"])("line",{id:"path3",fill:"none",stroke:"#000000","stroke-width":"3","stroke-miterlimit":"10",x1:"41.5",y1:"41.5",x2:"8.5",y2:"8.5"})],-1)})),te=[ee],ae={key:1,version:"1.1",id:"circle",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 100 100","enable-background":"new 0 0 50 50","xml:space":"preserve"},ne=N((function(){return Object(n["g"])("circle",{fill:"none",stroke:"#000","stroke-width":"5","stroke-mitterlimit":"10",cx:"50",cy:"50",r:"45","stroke-dasharray":"360","stroke-linecap":"round",transform:"rotate(-90 ) translate(-100 0)"},[Object(n["g"])("animate",{attributeName:"stroke-dashoffset",values:"360;0",dur:"0.20s"})],-1)})),ce=[ne],re={class:"buttons"},le=N((function(){return Object(n["g"])("span",null,"Kilépés",-1)})),oe=[le],ue=N((function(){return Object(n["g"])("span",null,"Újrakezdés",-1)})),ie=[ue];function be(e,t,a,c,r,l){return Object(n["t"])(),Object(n["f"])("div",X,[Object(n["g"])("div",q,[Object(n["g"])("h1",{id:"player1",class:Object(n["o"])(e.data.player1.shape===e.activePlayer?"active":"")},Object(n["C"])(e.data.player1.name),3),Object(n["g"])("h1",{id:"player2",class:Object(n["o"])(e.data.player2.shape===e.activePlayer?"active":"")},Object(n["C"])(e.data.player2.name),3)]),Object(n["g"])("div",D,[null!=e.globalWin?(Object(n["t"])(),Object(n["f"])("h2",Y,Object(n["C"])(e.GetPlayer(e.globalWin).name)+" nyert!",1)):Object(n["e"])("",!0)]),Object(n["g"])("div",{class:"playarea",style:Object(n["p"])({"grid-template-columns":e.cols,"aspect-ratio":"".concat(e.width," / ").concat(e.height)})},[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e.table,(function(t,a){return Object(n["t"])(),Object(n["f"])("div",{class:"col",style:Object(n["p"])({"grid-template-rows":e.rows}),key:a},[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(t,(function(t,c){return Object(n["t"])(),Object(n["f"])("div",{class:"tile",key:t,onClick:function(t){return e.TileClick(c,a)}},[!0===t?(Object(n["t"])(),Object(n["f"])("svg",$,te)):Object(n["e"])("",!0),!1===t?(Object(n["t"])(),Object(n["f"])("svg",ae,ce)):Object(n["e"])("",!0)],8,Z)})),128))],4)})),128))],4),Object(n["g"])("div",re,[Object(n["g"])("button",{onClick:t[0]||(t[0]=function(){return e.Quit&&e.Quit.apply(e,arguments)})},oe),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return e.Restart&&e.Restart.apply(e,arguments)})},ie)])])}var se=a("3835"),fe=Object(n["j"])({name:"Game",setup:function(){var e=Object(b["c"])(),t=Object(b["d"])(),a=Object(n["x"])({player1:{name:"Player 1",shape:!0},player2:{name:"Player 2",shape:!1}}),c=Object(n["y"])(!0);function r(e){return!0===e?a.player1:a.player2}"local"==e.params.id&&console.log("local game");var l=Object(n["y"])(parseInt(localStorage.getItem("table_width"))),o=Object(n["y"])(parseInt(localStorage.getItem("table_height"))),u=Object(n["y"])(parseInt(localStorage.getItem("table_goal"))),i=Object(n["y"])(!0),s=Object(n["y"])(null);function f(e,t){if(i.value&&(console.log("Row: ".concat(e,", Column: ").concat(t)),void 0===p.value[t][e])){i.value=!1,p.value[t][e]=c.value;var a=p.value,n=0,b=!1;if(!b)for(var f=0;f<o.value;f++){if(!(n<u.value)){b=!0;break}if(a[t][f]===c.value){if(n++,n>=u.value){b=!0;break}}else n=0}if(n=0,!b)for(var d=0;d<l.value;d++){if(!(n<u.value)){b=!0;break}if(a[d][e]===c.value){if(n++,n>=u.value){b=!0;break}}else n=0}if(n=0,!b){for(var j=[0,0],O=t,v=e;O>=0&&v>=0;O--,v--)console.log(O,v),j=[O,v];for(var g=j,h=Object(se["a"])(g,2),m=h[0],y=h[1];m<l.value&&y<o.value;m++,y++){if(console.log(m,y,n,u.value),!(n<u.value)){b=!0;break}if(a[m][y]===c.value){if(n++,console.log(n),n>=u.value){b=!0;break}}else n=0}}if(n=0,!b){for(var w=[0,0],k=t,x=e;k<l.value&&x>=0;k++,x--)w=[k,x];for(var _=w,C=Object(se["a"])(_,2),I=C[0],S=C[1];I>=0&&S<o.value;I--,S++){if(!(n<u.value)){b=!0;break}if(a[I][S]===c.value){if(n++,n>=u.value){b=!0;break}}else n=0}}b?(s.value=c.value,console.log("".concat(r(c.value).name," nyert!"))):(c.value=!c.value,i.value=!0)}}l.value&&o.value&&u.value||t.push("/");var d=Object(n["b"])((function(){for(var e="",t=0;t<o.value;t++)e+=" 1fr";return e})),j=Object(n["b"])((function(){for(var e="",t=0;t<l.value;t++)e+=" 1fr";return e}));function O(){for(var e=new Array(l.value),t=0;t<e.length;t++)e[t]=new Array(o.value);return e}var p=Object(n["y"])(O());function v(){t.push("/")}function g(){p.value=O(),c.value=!c.value,i.value=!0,s.value=null}return{data:a,width:l,height:o,cols:j,rows:d,table:p,activePlayer:c,globalWin:s,Quit:v,Restart:g,GetPlayer:r,TileClick:f}}});a("7113");const de=l()(fe,[["render",be],["__scopeId","data-v-9027b230"]]);var je=de,Oe=[{path:"/",name:"Menu",component:h},{path:"/create",name:"Create",component:R},{path:"/join",name:"Join",component:K},{path:"/game/:id",name:"Game",component:je},{path:"/:catchAll(.*)",redirect:"/"}],pe=Object(b["a"])({history:Object(b["b"])(),routes:Oe}),ve=pe;Object(n["c"])(i).use(ve).mount("#app")},d1cb:function(e,t,a){},dd11:function(e,t,a){},e64d:function(e,t,a){},ead3:function(e,t,a){"use strict";a("d1cb")}});
//# sourceMappingURL=app.78387929.js.map