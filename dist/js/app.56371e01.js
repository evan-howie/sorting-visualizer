(function(){"use strict";var t={7434:function(t,e,n){var r=n(9242),i=n(3396);const o={class:"app"},s=(0,i._)("canvas",null,null,-1);function l(t,e,n,r,l,a){const u=(0,i.up)("control-panel");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(u,{onSort:a.sortNumbers,onElements:a.setNumbers,onScramble:e[0]||(e[0]=()=>{a.scramble(l.numbers),a.drawArray(l.numbers)}),onDelay:a.setDelay},null,8,["onSort","onElements","onDelay"]),s])}const a=t=>((0,i.dD)("data-v-5a0cf6a8"),t=t(),(0,i.Cn)(),t),u={class:"main"},c={key:0,class:"controls"},h=a((()=>(0,i._)("h1",null,"Algorithm",-1))),d={class:"algorithms"},m=a((()=>(0,i._)("h1",null,"Elements",-1))),f={class:"elements"},b=a((()=>(0,i._)("label",{for:"elements"},"Number: ",-1))),g=["max"],v=a((()=>(0,i._)("label",{for:"delay"},"Delay: ",-1)));function y(t,e,n,o,s,l){const a=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",u,[t.is_visible?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",null,[h,(0,i._)("div",d,[(0,i._)("button",{onClick:e[0]||(e[0]=e=>t.$emit("sort",t.merge))},"Merge Sort"),(0,i._)("button",{onClick:e[1]||(e[1]=e=>t.$emit("sort",t.bubble))},"Bubble Sort"),(0,i._)("button",{onClick:e[2]||(e[2]=e=>t.$emit("sort",t.insertion))},"Insertion Sort"),(0,i._)("button",{onClick:e[3]||(e[3]=e=>t.$emit("sort",t.quick))},"Quick Sort"),(0,i._)("button",{onClick:e[4]||(e[4]=e=>t.$emit("sort",t.bogo))},"Bogo Sort")])]),(0,i._)("div",null,[m,(0,i._)("div",f,[(0,i._)("div",null,[b,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=e=>t.num_elements=e),min:"1",max:l.max_width,name:"elements",onChange:e[6]||(e[6]=e=>t.$emit("elements",t.num_elements))},null,40,g),[[r.nr,t.num_elements]])]),(0,i._)("div",null,[v,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=e=>t.delay=e),min:"0.5",max:"100",name:"delay",onChange:e[8]||(e[8]=e=>t.$emit("delay",t.delay))},null,544),[[r.nr,t.delay]])]),(0,i._)("button",{onClick:e[9]||(e[9]=e=>t.$emit("scramble"))},"Scramble")])])])):(0,i.kq)("",!0),(0,i._)("button",{class:"visibility-btn",onClick:e[10]||(e[10]=e=>t.is_visible=!t.is_visible)},[(0,i.Wm)(a,{icon:"fa-solid fa-chevron-"+(t.is_visible?"up":"down")},null,8,["icon"])])])}function*p(t){for(let e=0;e<t.length;e++)for(let n=1;n<t.length-e;n++)t[n-1]>t[n]&&([t[n-1],t[n]]=[t[n],t[n-1]]),yield[n-1,n]}n(7658);function*w(t){const e=[],n=function(t,r){e.push([t,r]);const i=Math.ceil((t+r)/2);r-i>1&&n(i,r),i-t>1&&n(t,i)};t.length>1&&n(0,t.length);const r=new Array(t.length);while(e.length){const[n,i]=e.pop(),o=Math.ceil((n+i)/2);for(let e=n,s=o,l=n;l<i;l++)e<o?s<i?(yield[e,s],t[e]<=t[s]?r[l]=t[e++]:r[l]=t[s++]):r[l]=t[e++]:s<i&&(r[l]=t[s++]);for(let e=n;e<i;e++)yield[e],t[e]=r[e]}}var _=w;function*k(t){for(let e=1;e<t.length;e++){let n=t[e],r=e-1;while(r>=0&&t[r]>n)yield[e,r],t[r+1]=t[r--];t[r+1]=n}}function C(t){return A(t,0,t.length-1)}function*A(t,e,n){if(e>=n)return;let r=t[n],i=e-1;for(let o=e;o<n;o++)yield[o,i,n],t[o]<r&&(i++,[t[o],t[i]]=[t[i],t[o]]);yield[i+1,n],[t[i+1],t[n]]=[t[n],t[i+1]],yield*A(t,e,i),yield*A(t,i+2,n)}function*O(t){while(!x(t))for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));yield[e,n],[t[e],t[n]]=[t[n],t[e]]}}function x(t){for(let e=1;e<t.length;e++)if(t[e]<t[e-1])return!1;return!0}var S={name:"ControlPanel",data:()=>({is_visible:!0,num_elements:100,bubble:p,merge:_,insertion:k,quick:C,bogo:O,delay:2}),computed:{max_width(){return window.innerWidth-200}},methods:{toggleSound(){this.sound=!this.sound,this.$emit("sound")}}},q=n(89);const D=(0,q.Z)(S,[["render",y],["__scopeId","data-v-5a0cf6a8"]]);var M=D,$={name:"App",components:{"control-panel":M},data(){return{numbers:[],canvas:null,gc:null,delay:2,sorting:!1}},beforeMount(){this.numbers=this.fillArray(100),this.scramble(this.numbers)},mounted(){this.setupCanvas(),this.drawArray(this.numbers)},methods:{scramble(t){this.sorting=!1;for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}},fillArray(t){return[...Array(t).keys()].map((t=>t+1))},setupCanvas(){const t=document.querySelector("canvas");t.width=window.innerWidth-200,t.height=window.innerHeight-150,this.canvas=t,this.gc=t.getContext("2d")},drawArray(t,e=[]){const[n,r]=[this.canvas.width,this.canvas.height],i=n/t.length,o=r/t.length;this.gc.clearRect(0,0,n,r);for(const[s,l]of t.entries())this.gc.fillStyle=e.includes(s)?"red":"#1282a2",this.gc.fillRect(s*i,r-l*o,i,l*o)},sortNumbers(t){if(this.sorting)return;this.sorting=!0;let e=t(this.numbers),n=new(window.AudioContext||window.webkitAudioContext),r=this.createOscillatorNodes(n);const i=()=>{const t=setTimeout((()=>{const o=e.next();if(!this.sorting||o.done)return r.forEach((t=>t.stop())),clearTimeout(t),this.sorting=!1,void this.drawArray(this.numbers);if(!o.done)for(let t=0;t<o.value.length;t++)r[t].connect(n.destination),r[t].frequency.value=261.6+1047*o.value[t]/this.numbers.length,console.log(r[t].frequency);this.drawArray(this.numbers,o.value??[],"red"),requestAnimationFrame(i)}),this.delay)};i(this.delay)},setNumbers(t){this.sorting=!1,t=parseInt(t),this.numbers=this.fillArray(t),this.scramble(this.numbers),this.drawArray(this.numbers)},setDelay(t){this.sorting&&(this.sorting=!1,this.drawArray(this.numbers)),this.sorting||(this.delay=t)},createOscillatorNodes(t){const e=[t.createOscillator(),t.createOscillator(),t.createOscillator()];return e.forEach((t=>{t.type="square",t.start()})),e}}};const N=(0,q.Z)($,[["render",l]]);var j=N,E=n(3494),T=n(7749),I=n(8539);E.vI.add(I.mTx,I.ptq),(0,r.ri)(j).component("font-awesome-icon",T.GN).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(l=!1,o<s&&(s=o));if(l){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],l=r[1],a=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var c=a(n)}for(e&&e(r);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunksorting_visualizer"]=self["webpackChunksorting_visualizer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7434)}));r=n.O(r)})();
//# sourceMappingURL=app.56371e01.js.map