(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(2),u=n(1),l={0:{shape:[[0]],color:"#303030"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"#E0B4FF"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"#3DBEA8"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"#412485"},O:{shape:[["O","O"],["O","O"]],color:"#7D0000"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"#7B7484"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"#00669D"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"#91028B"}},s=function(){var e="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return l[e]},f=function(){return Array.from(Array(20),(function(){return new Array(10).fill([0,"clear"])}))},m=function(e,t,n){for(var r=n.x,a=n.y,o=e.position,c=e.tetromino,i=0;i<c.length;i++)for(var u=0;u<c[i].length;u++)if(0!==c[i][u]&&(!t[i+o.y+a]||!t[i+o.y+a][u+o.x+r]||"clear"!==t[i+o.y+a][u+o.x+r][1]))return!0};var p=a.a.memo((function(e){var t=e.type;return a.a.createElement("div",{className:"cell",style:{background:l[t].color,border:0===t?"1px solid":"4px solid",borderBottomColor:0===t?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.5)",borderRightColor:0===t?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.5)",borderLeftColor:0===t?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.7)",borderTopColor:0===t?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.7)"},type:t})})),b=function(e){var t=e.stage;return a.a.createElement("div",{className:"stage",style:{gridTemplateRows:"repeat(\n        ".concat(20,", \n        calc(38vw / ").concat(10,")\n      )"),gridTemplateColumns:"repeat(".concat(10,", 1fr)")}},t.map((function(e){return e.map((function(e,t){return a.a.createElement(p,{key:t,type:e[0]})}))})))},v=function(e){var t=e.gameOver,n=e.text;return a.a.createElement("div",{style:{color:t?"red":"#eee"},className:"display"},n)},O=function(e){var t=e.callback;return a.a.createElement(r.Fragment,null,a.a.createElement("button",{className:"startButton",onClick:t},"Start Game"))},y=function(){var e=Object(r.useState)({position:{x:0,y:0},tetromino:l[0].shape,collision:!1}),t=Object(u.a)(e,2),n=t[0],o=t[1],c=n.position,p=n.tetromino,y=n.collision,d=function(e,t){var n=e.map((function(t,n){return e.map((function(e){return e[n]}))}));return t>0?n.map((function(e){return e.reverse()})):n.reverse()},E=function(e){var t=e.x,n=e.y,r=e.collision;o((function(e){return Object(i.a)(Object(i.a)({},e),{},{position:{x:e.position.x+=t/2,y:e.position.y+=n/2},collision:r})}))},x=Object(r.useCallback)((function(){o({position:{x:4,y:0},tetromino:s().shape,collision:!1})}),[]),g=Object(r.useState)(f()),h=Object(u.a)(g,2),j=h[0],S=h[1],I=Object(r.useState)(0),k=Object(u.a)(I,2),C=k[0],J=k[1];Object(r.useEffect)((function(){J(0);var e=function(e){var t=e.map((function(e){return e.map((function(e){return"clear"===e[1]?[0,"clear"]:e}))}));return p.forEach((function(e,n){e.forEach((function(e,r){0!==e&&(t[n+c.y][r+c.x]=[e,"".concat(y?"merged":"clear")])}))})),y?(x(),function(e){return e.reduce((function(t,n){return-1===n.findIndex((function(e){return 0===e[0]}))?(J((function(e){return e+.5})),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(n),t)}),[])}(t)):t};S((function(t){return e(t)}))}),[c,p,y,x]);var T=Object(r.useState)(0),w=Object(u.a)(T,2),L=w[0],N=w[1],B=Object(r.useState)(0),Z=Object(u.a)(B,2),A=Z[0],D=Z[1],R=Object(r.useState)(0),F=Object(u.a)(R,2),M=F[0],G=F[1],K=Object(r.useCallback)((function(){var e=[40,100,300,1200];C>0&&(N((function(t){return t+e[C-1]*(M+1)})),D((function(e){return e+C})))}),[M,C]);Object(r.useEffect)((function(){K()}),[K,C,L]);var U=Object(r.useState)(null),W=Object(u.a)(U,2),q=W[0],z=W[1],H=Object(r.useState)(!1),P=Object(u.a)(H,2),Q=P[0],V=P[1],X=function(e){m(n,j,{x:e,y:0})||E({x:e,y:0})},Y=function(){A>10*(M+1)&&(G((function(e){return e+1})),z(1e3/(M+1)+200)),m(n,j,{x:0,y:1})?(c.y<1&&(V(!0),z(null)),E({x:0,y:0,collision:!0})):E({x:0,y:1,collision:!1})},$=function(e){var t=e.keyCode;Q||(37===t||65===t?X(-1):39===t||68===t?X(1):40===t||83===t?(z(null),Y()):38!==t&&87!==t||function(e,t){var r=JSON.parse(JSON.stringify(n));r.tetromino=d(r.tetromino,t);for(var a=c.x,i=1;m(r,e,{x:0,y:0});)if(r.position.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return d(r.tetromino,-t),void(r.position.x=a);o(r)}(j,1))};return function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){clearInterval(e)}}}),[t])}((function(){Y()}),q),a.a.createElement("div",{className:"tetrisWrapper",role:"button",tabIndex:"0",onKeyDown:function(e){return $(e)},onKeyUp:function(e){var t=e.keyCode;Q||40!==t&&83!==t||z(1e3/(M+1)+200)}},a.a.createElement("div",{className:"tetris"},a.a.createElement(b,{stage:j}),a.a.createElement("aside",null,Q?a.a.createElement(v,{gameOver:Q,text:"Game Over"}):a.a.createElement("div",null,a.a.createElement(v,{text:"Score: ".concat(L)}),a.a.createElement(v,{text:"Rows Cleared: ".concat(A)}),a.a.createElement(v,{text:"Level: ".concat(M)})),a.a.createElement(O,{callback:function(){S(f()),z(1e3),x(),V(!1),N(0),D(0),G(0)}}))))},d=(n(10),function(){return a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(y,null))});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.68096028.chunk.js.map