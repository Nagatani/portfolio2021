var app=function(){"use strict";function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function l(){return Object.create(null)}function n(e){e.forEach(s)}function c(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,s,l,n){return e[1]&&n?t(l.ctx.slice(),e[1](n(s))):l.ctx}function i(e,t,s,l,n,c,a){const i=function(e,t,s,l){if(e[2]&&l){const n=e[2](l(s));if(void 0===t.dirty)return n;if("object"==typeof n){const e=[],s=Math.max(t.dirty.length,n.length);for(let l=0;l<s;l+=1)e[l]=t.dirty[l]|n[l];return e}return t.dirty|n}return t.dirty}(t,l,n,c);if(i){const n=r(t,s,l,a);e.p(n,i)}}function o(e){const t={};for(const s in e)"$"!==s[0]&&(t[s]=e[s]);return t}let d,v=!1;function u(e,t,s,l){for(;e<t;){const n=e+(t-e>>1);s(n)<=l?e=n+1:t=n}return e}function g(e,t){v?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,s=new Int32Array(t.length+1),l=new Int32Array(t.length);s[0]=-1;let n=0;for(let e=0;e<t.length;e++){const c=u(1,n+1,(e=>t[s[e]].claim_order),t[e].claim_order)-1;l[e]=s[c]+1;const a=c+1;s[a]=e,n=Math.max(a,n)}const c=[],a=[];let r=t.length-1;for(let e=s[n]+1;0!=e;e=l[e-1]){for(c.push(t[e-1]);r>=e;r--)a.push(t[r]);r--}for(;r>=0;r--)a.push(t[r]);c.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,s=0;t<a.length;t++){for(;s<c.length&&a[t].claim_order>=c[s].claim_order;)s++;const l=s<c.length?c[s]:null;e.insertBefore(a[t],l)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function p(e,t,s){v&&!s?g(e,t):(t.parentNode!==e||s&&t.nextSibling!==s)&&e.insertBefore(t,s||null)}function f(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function $(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function h(e){return document.createTextNode(e)}function w(){return h(" ")}function z(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function b(e){d=e}const j=[],x=[],_=[],k=[],T=Promise.resolve();let M=!1;function q(e){_.push(e)}let I=!1;const L=new Set;function H(){if(!I){I=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];b(t),S(t.$$)}for(b(null),j.length=0;x.length;)x.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];L.has(t)||(L.add(t),t())}_.length=0}while(j.length);for(;k.length;)k.pop()();M=!1,I=!1,L.clear()}}function S(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const A=new Set;function C(e,t){e&&e.i&&(A.delete(e),e.i(t))}function E(e,t,s,l){if(e&&e.o){if(A.has(e))return;A.add(e),undefined.c.push((()=>{A.delete(e),l&&(s&&e.d(1),l())})),e.o(t)}}function W(e,t){const s={},l={},n={$$scope:1};let c=e.length;for(;c--;){const a=e[c],r=t[c];if(r){for(const e in a)e in r||(l[e]=1);for(const e in r)n[e]||(s[e]=r[e],n[e]=1);e[c]=r}else for(const e in a)n[e]=1}for(const e in l)e in s||(s[e]=void 0);return s}function D(e){return"object"==typeof e&&null!==e?e:{}}function N(e){e&&e.c()}function B(e,t,l,a){const{fragment:r,on_mount:i,on_destroy:o,after_update:d}=e.$$;r&&r.m(t,l),a||q((()=>{const t=i.map(s).filter(c);o?o.push(...t):n(t),e.$$.on_mount=[]})),d.forEach(q)}function P(e,t){const s=e.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function R(e,t){-1===e.$$.dirty[0]&&(j.push(e),M||(M=!0,T.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,s,c,a,r,i,o=[-1]){const u=d;b(t);const g=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:r,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:l(),dirty:o,skip_bound:!1};let p=!1;if(g.ctx=c?c(t,s.props||{},((e,s,...l)=>{const n=l.length?l[0]:s;return g.ctx&&r(g.ctx[e],g.ctx[e]=n)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](n),p&&R(t,e)),s})):[],g.update(),p=!0,n(g.before_update),g.fragment=!!a&&a(g.ctx),s.target){if(s.hydrate){v=!0;const e=function(e){return Array.from(e.childNodes)}(s.target);g.fragment&&g.fragment.l(e),e.forEach(f)}else g.fragment&&g.fragment.c();s.intro&&C(t.$$.fragment),B(t,s.target,s.anchor,s.customElement),v=!1,H()}b(u)}class U{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function X(e){let t,s;return{c(){t=$("title"),s=h(e[0])},m(e,l){p(e,t,l),g(t,s)},p(e,t){1&t&&y(s,e[0])},d(e){e&&f(t)}}}function V(e){let t,s,l,n=e[0]&&X(e);const c=e[3].default,a=function(e,t,s,l){if(e){const n=r(e,t,s,l);return e[0](n)}}(c,e,e[2],null);return{c(){t=$("svg"),n&&n.c(),s=h(""),a&&a.c(),z(t,"xmlns","http://www.w3.org/2000/svg"),z(t,"viewBox",e[1]),z(t,"class","svelte-c8tyih")},m(e,c){p(e,t,c),n&&n.m(t,null),g(t,s),a&&a.m(t,null),l=!0},p(e,[r]){e[0]?n?n.p(e,r):(n=X(e),n.c(),n.m(t,s)):n&&(n.d(1),n=null),a&&a.p&&(!l||4&r)&&i(a,c,e,e[2],l?r:-1,null,null),(!l||2&r)&&z(t,"viewBox",e[1])},i(e){l||(C(a,e),l=!0)},o(e){E(a,e),l=!1},d(e){e&&f(t),n&&n.d(),a&&a.d(e)}}}function G(e,t,s){let{$$slots:l={},$$scope:n}=t,{title:c=null}=t,{viewBox:a}=t;return e.$$set=e=>{"title"in e&&s(0,c=e.title),"viewBox"in e&&s(1,a=e.viewBox),"$$scope"in e&&s(2,n=e.$$scope)},[c,a,n,l]}class F extends U{constructor(e){super(),O(this,e,G,V,a,{title:0,viewBox:1})}}function J(e){let t;return{c(){t=$("path"),z(t,"d","M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function K(e){let s,l;const n=[{viewBox:"0 0 448 512"},e[0]];let c={$$slots:{default:[J]},$$scope:{ctx:e}};for(let e=0;e<n.length;e+=1)c=t(c,n[e]);return s=new F({props:c}),{c(){N(s.$$.fragment)},m(e,t){B(s,e,t),l=!0},p(e,[t]){const l=1&t?W(n,[n[0],D(e[0])]):{};2&t&&(l.$$scope={dirty:t,ctx:e}),s.$set(l)},i(e){l||(C(s.$$.fragment,e),l=!0)},o(e){E(s.$$.fragment,e),l=!1},d(e){P(s,e)}}}function Y(e,s,l){return e.$$set=e=>{l(0,s=t(t({},s),o(e)))},[s=o(s)]}class Z extends U{constructor(e){super(),O(this,e,Y,K,a,{})}}function Q(e){let t;return{c(){t=$("path"),z(t,"d","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function ee(e){let s,l;const n=[{viewBox:"0 0 448 512"},e[0]];let c={$$slots:{default:[Q]},$$scope:{ctx:e}};for(let e=0;e<n.length;e+=1)c=t(c,n[e]);return s=new F({props:c}),{c(){N(s.$$.fragment)},m(e,t){B(s,e,t),l=!0},p(e,[t]){const l=1&t?W(n,[n[0],D(e[0])]):{};2&t&&(l.$$scope={dirty:t,ctx:e}),s.$set(l)},i(e){l||(C(s.$$.fragment,e),l=!0)},o(e){E(s.$$.fragment,e),l=!1},d(e){P(s,e)}}}function te(e,s,l){return e.$$set=e=>{l(0,s=t(t({},s),o(e)))},[s=o(s)]}class se extends U{constructor(e){super(),O(this,e,te,ee,a,{})}}function le(e){let t;return{c(){t=$("path"),z(t,"d","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function ne(e){let s,l;const n=[{viewBox:"0 0 448 512"},e[0]];let c={$$slots:{default:[le]},$$scope:{ctx:e}};for(let e=0;e<n.length;e+=1)c=t(c,n[e]);return s=new F({props:c}),{c(){N(s.$$.fragment)},m(e,t){B(s,e,t),l=!0},p(e,[t]){const l=1&t?W(n,[n[0],D(e[0])]):{};2&t&&(l.$$scope={dirty:t,ctx:e}),s.$set(l)},i(e){l||(C(s.$$.fragment,e),l=!0)},o(e){E(s.$$.fragment,e),l=!1},d(e){P(s,e)}}}function ce(e,s,l){return e.$$set=e=>{l(0,s=t(t({},s),o(e)))},[s=o(s)]}class ae extends U{constructor(e){super(),O(this,e,ce,ne,a,{})}}function re(e){let t;return{c(){t=m("input"),z(t,"type","checkbox"),z(t,"id","drawer-switch"),z(t,"class","svelte-nbpr42")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function ie(e){let t;return{c(){t=m("input"),z(t,"type","checkbox"),z(t,"id","drawer-switch"),t.checked=!0,z(t,"class","svelte-nbpr42")},m(e,s){p(e,t,s)},d(e){e&&f(t)}}}function oe(e){let t,s,l,n,c,a,r,i,o,d,v,u,$,h,y,b,j,x,_,k,T,M,I,L,H,S,A,W,D,R,O=!1,U=()=>{O=!1};function X(e,t){return e[0]>100?ie:re}q(e[1]);let V=X(e),G=V(e);return j=new Z({}),T=new se({}),H=new ae({}),{c(){s=m("aside"),G.c(),l=w(),n=m("div"),c=m("label"),a=w(),r=m("div"),i=w(),o=m("div"),d=w(),v=m("div"),v.innerHTML='<h1 class="svelte-nbpr42">TARO REIDAI</h1> \n      <p class="svelte-nbpr42">TARO REIDAI&#39;s portfolio</p> \n      <p class="svelte-nbpr42">UX Designer / Web Designer / Programmer</p>',u=w(),$=m("div"),h=m("ul"),y=m("li"),b=m("a"),N(j.$$.fragment),x=w(),_=m("li"),k=m("a"),N(T.$$.fragment),M=w(),I=m("li"),L=m("a"),N(H.$$.fragment),S=w(),A=m("h1"),A.textContent="TARO REIDAI's portfolio",z(c,"class","drawer-label svelte-nbpr42"),z(c,"for","drawer-switch"),z(r,"class","left svelte-nbpr42"),z(o,"class","bottom svelte-nbpr42"),z(v,"class","names svelte-nbpr42"),z(b,"href","mailto:taro@sample.ac.jp"),z(b,"class","svelte-nbpr42"),z(y,"class","svelte-nbpr42"),z(k,"href","https://twitter.com/"),z(k,"class","svelte-nbpr42"),z(_,"class","svelte-nbpr42"),z(L,"href","https://github.com/"),z(L,"class","svelte-nbpr42"),z(I,"class","svelte-nbpr42"),z(h,"class","svelte-nbpr42"),z($,"class","social svelte-nbpr42"),z(A,"class","closed_name svelte-nbpr42"),z(n,"class","drawer svelte-nbpr42"),z(s,"class","drawer_main")},m(f,m){var w,z,q,C;p(f,s,m),G.m(s,null),g(s,l),g(s,n),g(n,c),g(n,a),g(n,r),g(n,i),g(n,o),g(n,d),g(n,v),g(n,u),g(n,$),g($,h),g(h,y),g(y,b),B(j,b,null),g(h,x),g(h,_),g(_,k),B(T,k,null),g(h,M),g(h,I),g(I,L),B(H,L,null),g(n,S),g(n,A),W=!0,D||(w=window,z="scroll",q=()=>{O=!0,clearTimeout(t),t=setTimeout(U,100),e[1]()},w.addEventListener(z,q,C),R=()=>w.removeEventListener(z,q,C),D=!0)},p(e,[n]){1&n&&!O&&(O=!0,clearTimeout(t),scrollTo(window.pageXOffset,e[0]),t=setTimeout(U,100)),V!==(V=X(e))&&(G.d(1),G=V(e),G&&(G.c(),G.m(s,l)))},i(e){W||(C(j.$$.fragment,e),C(T.$$.fragment,e),C(H.$$.fragment,e),W=!0)},o(e){E(j.$$.fragment,e),E(T.$$.fragment,e),E(H.$$.fragment,e),W=!1},d(e){e&&f(s),G.d(),P(j),P(T),P(H),D=!1,R()}}}function de(e,t,s){let l;return[l,function(){s(0,l=window.pageYOffset)}]}class ve extends U{constructor(e){super(),O(this,e,de,oe,a,{})}}function ue(t){let s;return{c(){s=m("section"),s.innerHTML='<div class="scrolldown1 svelte-6vmpuc"><span class="svelte-6vmpuc">scroll</span></div>',z(s,"class","hero svelte-6vmpuc")},m(e,t){p(e,s,t)},p:e,i:e,o:e,d(e){e&&f(s)}}}class ge extends U{constructor(e){super(),O(this,e,null,ue,a,{})}}function pe(t){let s,l,n;return{c(){s=m("section"),s.innerHTML='<section class="aboutme svelte-ewszfs"><figure class="profile-photo"><img src="https://placehold.jp/300x300.png" alt=""/></figure> \n    <div class="text svelte-ewszfs"><dl><dt class="svelte-ewszfs">氏名</dt><dd class="text__name svelte-ewszfs" data-en="Taro Reidai">例題 太郎</dd><dt class="svelte-ewszfs">出身</dt><dd class="svelte-ewszfs">愛知県豊田市</dd><dt class="svelte-ewszfs">生まれ年</dt><dd class="svelte-ewszfs">2000年</dd></dl></div></section>',l=w(),n=m("section"),n.innerHTML='<section class="read svelte-ewszfs"><div class="trying"><h2 class="svelte-ewszfs">目指していること</h2> \n      <h3 class="svelte-ewszfs">デザインによるスムーズな問題解決</h3> \n      <p class="svelte-ewszfs">デザインに科学的知識を取り入れ、論理的に問題を解決できるデザイナーを目指しています。<br/>\n        単純に美しく見せることだけを突き詰めるのではなく、様々な視点を取り入れられるよう勉学に励み、スムーズな問題解決を促すデザイン能力を磨いています。</p></div> \n    <div class="doing"><h2 class="svelte-ewszfs">やりたいこと・今進めていること</h2> \n      <h3 class="svelte-ewszfs">グラフィックデザイン / インフォグラフィックス</h3> \n      <p class="svelte-ewszfs">グラフィックデザインによる行動設計や、それに伴うリサーチや、マーケティングなどの様々な観点を取り入れられるようになりたい。</p></div></section>',z(s,"class","profile svelte-ewszfs"),z(n,"class","profile2 svelte-ewszfs")},m(e,t){p(e,s,t),p(e,l,t),p(e,n,t)},p:e,i:e,o:e,d(e){e&&f(s),e&&f(l),e&&f(n)}}}class fe extends U{constructor(e){super(),O(this,e,null,pe,a,{})}}function me(t){let s;return{c(){s=m("section"),s.innerHTML='<section class="inner svelte-e7675t"><dl><dt class="svelte-e7675t">学歴</dt><dd class="svelte-e7675t">豊田〇〇高等学校 普通科 2019年卒業</dd><dd class="svelte-e7675t">愛知工業大学 情報科学科 メディア情報専攻 2023年卒業予定</dd><dt class="svelte-e7675t">インターン経験</dt><dd class="svelte-e7675t">株式会社 〇〇デザイン(グラフィックデザイナー、デザインアシスタント)</dd><dd class="svelte-e7675t">〇〇PhotoGraph Co.(SNSマーケター)</dd><dt class="svelte-e7675t">アルバイト経験</dt><dd class="svelte-e7675t">有限会社〇〇(Webデザイナー, DTPデザイナー)</dd><dd class="svelte-e7675t">株式会社□□□フォト(カメラマン、カメラアシスタント)</dd><dd class="svelte-e7675t">株式会社〇〇リクルート(イベントスタッフ)</dd></dl></section>',z(s,"class","career svelte-e7675t")},m(e,t){p(e,s,t)},p:e,i:e,o:e,d(e){e&&f(s)}}}class $e extends U{constructor(e){super(),O(this,e,null,me,a,{})}}function he(t){let s;return{c(){s=m("section"),s.innerHTML='<div class="inner svelte-zpi0al"><h2 class="svelte-zpi0al">Skills<span class="svelte-zpi0al">職能</span></h2> \n    <div class="skills svelte-zpi0al"><div class="skills-image svelte-zpi0al"><img src="./images/skills.svg" alt="skills"/></div> \n      <div class="skills-text svelte-zpi0al"><dl><dt class="svelte-zpi0al">Design</dt><dd class="svelte-zpi0al">設計・構築が得意。UXを意識したUIデザイン及び実装を一気貫通で行えるのが強みです。</dd><dt class="svelte-zpi0al">Programming</dt><dd class="svelte-zpi0al">JavaScript(Client Side, Server Side), Pythonを用いた統計情報分析からアプリ開発まで経験があります。</dd><dt class="svelte-zpi0al">Web</dt><dd class="svelte-zpi0al">UI/UXを意識したWebサイト構築を設計から行えます。Programmingスキルと組み合わせて、Webアプリ、Webシステムの開発経験があります。</dd><dt class="svelte-zpi0al">Photograph</dt><dd class="svelte-zpi0al">インターンにてカメラの技術について学び、個人でも商品撮影やWeb制作に使用する素材の撮影等を行っています。</dd><dt class="svelte-zpi0al">Business</dt><dd class="svelte-zpi0al">マネジメントや会計学について大学とインターン先にて学びました。個の強みと能力を最大限活かせるタスクディレクションが得意です。</dd></dl></div></div></div>',z(s,"class","skills-container svelte-zpi0al")},m(e,t){p(e,s,t)},p:e,i:e,o:e,d(e){e&&f(s)}}}class we extends U{constructor(e){super(),O(this,e,null,he,a,{})}}function ze(t){let s,l,n,c,a,r,i,o,d,v,u,$,b,j;return{c(){s=m("section"),l=m("div"),n=w(),c=m("main"),a=m("div"),r=m("span"),i=h(t[0]),o=w(),d=m("h1"),v=h(t[1]),u=w(),$=m("div"),b=w(),j=m("div"),z(l,"class","left svelte-1nzwgbl"),z(r,"class","title svelte-1nzwgbl"),z(d,"class","svelte-1nzwgbl"),z(a,"class","maskingtape svelte-1nzwgbl"),z(c,"class","svelte-1nzwgbl"),z($,"class","left-bottom svelte-1nzwgbl"),z(j,"class","footer svelte-1nzwgbl"),z(s,"class","separator svelte-1nzwgbl")},m(e,t){p(e,s,t),g(s,l),g(s,n),g(s,c),g(c,a),g(a,r),g(r,i),g(a,o),g(a,d),g(d,v),g(s,u),g(s,$),g(s,b),g(s,j)},p(e,[t]){1&t&&y(i,e[0]),2&t&&y(v,e[1])},i:e,o:e,d(e){e&&f(s)}}}function ye(e,t,s){let{title:l}=t,{text:n}=t;return e.$$set=e=>{"title"in e&&s(0,l=e.title),"text"in e&&s(1,n=e.text)},[l,n]}class be extends U{constructor(e){super(),O(this,e,ye,ze,a,{title:0,text:1})}}function je(t){let s,l,n;return{c(){s=m("section"),s.innerHTML='<h2 class="svelte-1ql0zj9">モバイルアプリ開発<span class="svelte-1ql0zj9">〇〇を□□するアプリ</span></h2>',l=w(),n=m("section"),n.innerHTML='<h2 class="svelte-1ql0zj9">詳細</h2> \n  <div class="container svelte-1ql0zj9"><section class="text svelte-1ql0zj9"><h3 class="svelte-1ql0zj9">時代に合わせた〇〇を、□□にする</h3> \n      <p class="svelte-1ql0zj9">□□株式会社主催 △△アプリアワード 優秀賞受賞</p> \n      <p class="svelte-1ql0zj9">大学のサークル活動にて募った開発メンバー5名で、1ヶ月掛けて作成しました。<br/>その中で、私はUIデザイナー、プログラマとして活動を行いました。</p> \n      <p class="svelte-1ql0zj9">数ある制作アプリの中で、このアプリが唯一受賞できました。</p> \n      <p class="svelte-1ql0zj9">ここは本当はもう少し詳しく書けると良い。</p> \n\n      <dl class="svelte-1ql0zj9"><dt class="svelte-1ql0zj9">制作期間</dt><dd class="svelte-1ql0zj9">1ヶ月(2021年6月〜7月)</dd><dt class="svelte-1ql0zj9">開発メンバー</dt><dd class="svelte-1ql0zj9">5名(ディレクター1名,デザイナー1名,プログラマ3名)</dd><dt class="svelte-1ql0zj9">役割</dt><dd class="svelte-1ql0zj9">UIデザイナー / プログラマ</dd><dt class="svelte-1ql0zj9">使用ツール</dt><dd class="svelte-1ql0zj9">Illustrator, Photoshop, Xd, Flutter, Android Studio, Xcode</dd></dl></section> \n\n    <section class="image svelte-1ql0zj9"><img src="../images/mobile-mockup-1627101791259.png" alt="mockups" class="svelte-1ql0zj9"/></section></div>',z(s,"class","content-summary svelte-1ql0zj9"),z(n,"class","content-description svelte-1ql0zj9")},m(e,t){p(e,s,t),p(e,l,t),p(e,n,t)},p:e,i:e,o:e,d(e){e&&f(s),e&&f(l),e&&f(n)}}}class xe extends U{constructor(e){super(),O(this,e,null,je,a,{})}}function _e(t){let s,l,n;return{c(){s=m("section"),s.innerHTML='<h2 class="svelte-4w1yg0">Webサイト制作<span class="svelte-4w1yg0">✗✗のプロモーションサイト</span></h2>',l=w(),n=m("section"),n.innerHTML='<h2 class="svelte-4w1yg0">詳細</h2> \n  <div class="container svelte-4w1yg0"><section class="text svelte-4w1yg0"><h3 class="svelte-4w1yg0">□□を〇〇する✗✗のプロモーション</h3> \n      <p class="svelte-4w1yg0">Webサイト制作に関する説明をここに書きます。</p> \n      <p class="svelte-4w1yg0">ここは本当はもう少し詳しく書けると良い。</p> \n      <p class="svelte-4w1yg0">サイトのURLを公開している場合は、URLを貼っておきましょう。</p></section> \n    <dl class="svelte-4w1yg0"><dt class="svelte-4w1yg0">制作期間</dt><dd class="svelte-4w1yg0">0.5ヶ月(2021年8月)</dd><dt class="svelte-4w1yg0">開発メンバー</dt><dd class="svelte-4w1yg0">2名(ディレクター1名,Webデザイナー1名)</dd><dt class="svelte-4w1yg0">役割</dt><dd class="svelte-4w1yg0">Webデザイナー</dd><dt class="svelte-4w1yg0">使用ツール</dt><dd class="svelte-4w1yg0">Xd, Visual Studio Code</dd><dt class="svelte-4w1yg0">開発環境</dt><dd class="svelte-4w1yg0">Node.js, Svelte, rollup, TypeScript, CSS</dd></dl></div>',z(s,"class","content-summary svelte-4w1yg0"),z(n,"class","content-description svelte-4w1yg0")},m(e,t){p(e,s,t),p(e,l,t),p(e,n,t)},p:e,i:e,o:e,d(e){e&&f(s),e&&f(l),e&&f(n)}}}class ke extends U{constructor(e){super(),O(this,e,null,_e,a,{})}}function Te(t){let s,l,n,c,a,r,i;return{c(){s=m("section"),s.innerHTML='<h2 class="svelte-1t9gze2">人物撮影</h2> \n  <div class="photo-container1 svelte-1t9gze2"><div class="area0 svelte-1t9gze2"><img src="../images/people/brooke-cagle-NoRsyXmHGpI-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area1 svelte-1t9gze2"><img src="../images/people/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area2 svelte-1t9gze2"><img src="../images/people/ian-dooley-d1UPkiFd04A-unsplash (1).jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area3 svelte-1t9gze2"><img src="../images/people/helena-lopes-DkGIAjlIJu0-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area4 svelte-1t9gze2"><img src="../images/people/zachary-nelson-98Elr-LIvD8-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div></div>',l=w(),n=m("section"),n.innerHTML='<h2 class="svelte-1t9gze2">お祭り</h2> \n  <div class="photo-container2 svelte-1t9gze2"><div class="area0 svelte-1t9gze2"><img src="../images/fest/4fc72f71-6186-4b42-9c6a-1d3bbfc47ed2.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area1 svelte-1t9gze2"><img src="../images/fest/fireworks-945386_1280.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area2 svelte-1t9gze2"><img src="../images/fest/concert-768722_640.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area3 svelte-1t9gze2"><img src="../images/fest/audience-1853662_640.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area4 svelte-1t9gze2"><img src="../images/fest/women-499337_1280.jpg" alt="" class="svelte-1t9gze2"/></div></div>',c=w(),a=m("section"),a.innerHTML='<h2 class="svelte-1t9gze2">その他風景</h2> \n  <div class="photo-container3 svelte-1t9gze2"><div class="area0 svelte-1t9gze2"><img src="../images/other/erik-eastman-4HG5hlhmZg8-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area1 svelte-1t9gze2"><img src="../images/other/nicki-eliza-schinow-BjJP2TN8WoI-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area2 svelte-1t9gze2"><img src="../images/other/ryoji-iwata-vWfKaO0k9pc-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area3 svelte-1t9gze2"><img src="../images/other/alex-knight-wfwUpfVqrKU-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div> \n    <div class="area4 svelte-1t9gze2"><img src="../images/other/clay-banks-hwLAI5lRhdM-unsplash.jpg" alt="" class="svelte-1t9gze2"/></div></div>',r=w(),i=m("section"),i.innerHTML='<h2 class="svelte-1t9gze2">詳細</h2> \n  <div class="container svelte-1t9gze2"><section class="text svelte-1t9gze2"><h3 class="svelte-1t9gze2">写真撮影</h3> \n      <p class="svelte-1t9gze2">テーマごとの説明をここにかきます。</p> \n      <dl class="svelte-1t9gze2"><dt class="svelte-1t9gze2">テーマ1: 人物撮影</dt><dd class="svelte-1t9gze2">〇〇を意識して✗✗を表現しました。</dd><dt class="svelte-1t9gze2">テーマ2: お祭り</dt><dd class="svelte-1t9gze2">独特の空気感を表現できるように努力しました。</dd><dt class="svelte-1t9gze2">テーマ3: その他風景</dt><dd class="svelte-1t9gze2">風景写真では、その風景が最も映える構図を意識しています。</dd></dl></section> \n    <dl class="svelte-1t9gze2"><dt class="svelte-1t9gze2">使用機材</dt><dd class="svelte-1t9gze2">カメラ本体：Nikon D850, Sigma DP3 Merrill, Nikon1 J5</dd><dd class="svelte-1t9gze2">レンズ：AF-S NIKKOR 14-24mm f/2.8G ED, etc..</dd><dd class="svelte-1t9gze2">光学機材：GODOX AD600Pro etc..</dd><dt class="svelte-1t9gze2">役割</dt><dd class="svelte-1t9gze2">カメラマン</dd><dt class="svelte-1t9gze2">使用ツール</dt><dd class="svelte-1t9gze2">Lightroom Classic, Photoshop</dd></dl></div>',z(s,"class","content-summary svelte-1t9gze2"),z(n,"class","content-summary svelte-1t9gze2"),z(a,"class","content-summary svelte-1t9gze2"),z(i,"class","content-description svelte-1t9gze2")},m(e,t){p(e,s,t),p(e,l,t),p(e,n,t),p(e,c,t),p(e,a,t),p(e,r,t),p(e,i,t)},p:e,i:e,o:e,d(e){e&&f(s),e&&f(l),e&&f(n),e&&f(c),e&&f(a),e&&f(r),e&&f(i)}}}class Me extends U{constructor(e){super(),O(this,e,null,Te,a,{})}}function qe(t){let s,l,n,c,a,r,i,o,d,v,u,$,h,y,b,j,x,_,k;return a=new be({props:{title:"制作物",text:"1. モバイルアプリ開発"}}),o=new xe({}),v=new be({props:{title:"制作物",text:"2. Webサイト制作"}}),h=new ke({}),b=new be({props:{title:"制作物",text:"3. 写真撮影技術(テーマごとの写真ギャラリー)"}}),_=new Me({}),{c(){s=m("section"),l=m("section"),l.innerHTML='<h2 class="svelte-j3eswn">Contents <span class="svelte-j3eswn">制作物</span></h2> \n    <div class="inner svelte-j3eswn"><ol class="contents-text svelte-j3eswn"><li class="svelte-j3eswn">モバイルアプリ開発<span class="svelte-j3eswn">〇〇を□□するアプリ</span></li> \n        <li class="svelte-j3eswn">Webサイト制作<span class="svelte-j3eswn">✗✗のプロモーションサイト</span></li> \n        <li class="svelte-j3eswn">写真撮影技術<span class="svelte-j3eswn">テーマごとの写真ギャラリー</span></li></ol> \n      <ul class="contents-container svelte-j3eswn"><li class="svelte-j3eswn"><div class="work1-container svelte-j3eswn"></div></li> \n        <li class="svelte-j3eswn"><div class="work2-container svelte-j3eswn"></div></li> \n        <li class="svelte-j3eswn"><div class="work3-container svelte-j3eswn"></div></li></ul></div>',n=w(),c=m("section"),N(a.$$.fragment),r=w(),i=m("div"),N(o.$$.fragment),d=w(),N(v.$$.fragment),u=w(),$=m("div"),N(h.$$.fragment),y=w(),N(b.$$.fragment),j=w(),x=m("div"),N(_.$$.fragment),z(l,"class","contents-list svelte-j3eswn"),z(i,"id","work1"),z($,"id","work2"),z(x,"id","work3"),z(c,"class","contents"),z(s,"class","works svelte-j3eswn")},m(e,t){p(e,s,t),g(s,l),g(s,n),g(s,c),B(a,c,null),g(c,r),g(c,i),B(o,i,null),g(c,d),B(v,c,null),g(c,u),g(c,$),B(h,$,null),g(c,y),B(b,c,null),g(c,j),g(c,x),B(_,x,null),k=!0},p:e,i(e){k||(C(a.$$.fragment,e),C(o.$$.fragment,e),C(v.$$.fragment,e),C(h.$$.fragment,e),C(b.$$.fragment,e),C(_.$$.fragment,e),k=!0)},o(e){E(a.$$.fragment,e),E(o.$$.fragment,e),E(v.$$.fragment,e),E(h.$$.fragment,e),E(b.$$.fragment,e),E(_.$$.fragment,e),k=!1},d(e){e&&f(s),P(a),P(o),P(v),P(h),P(b),P(_)}}}class Ie extends U{constructor(e){super(),O(this,e,null,qe,a,{})}}function Le(t){let s,l,n,c,a,r,i,o,d,v,u,$,h,y,b,j,x,_,k,T,M,q;return u=new Z({}),b=new se({}),k=new ae({}),{c(){s=m("section"),l=m("div"),n=m("h2"),n.innerHTML="最後まで読んでいただき、<br/>本当にありがとうございます。",c=w(),a=m("p"),a.textContent="例題 太郎",r=w(),i=m("div"),o=m("ul"),d=m("li"),v=m("a"),N(u.$$.fragment),$=w(),h=m("li"),y=m("a"),N(b.$$.fragment),j=w(),x=m("li"),_=m("a"),N(k.$$.fragment),T=w(),M=m("p"),M.textContent="© 2021 TARO REIDAI",z(n,"class","svelte-91y4j7"),z(a,"class","name svelte-91y4j7"),z(v,"href","mailto:taro@sample.ac.jp"),z(v,"class","svelte-91y4j7"),z(d,"class","svelte-91y4j7"),z(y,"href","https://twitter.com/"),z(y,"class","svelte-91y4j7"),z(h,"class","svelte-91y4j7"),z(_,"href","https://github.com/"),z(_,"class","svelte-91y4j7"),z(x,"class","svelte-91y4j7"),z(o,"class","svelte-91y4j7"),z(i,"class","social svelte-91y4j7"),z(M,"class","copyright svelte-91y4j7"),z(l,"class","text svelte-91y4j7"),z(s,"class","footer svelte-91y4j7")},m(e,t){p(e,s,t),g(s,l),g(l,n),g(l,c),g(l,a),g(l,r),g(l,i),g(i,o),g(o,d),g(d,v),B(u,v,null),g(o,$),g(o,h),g(h,y),B(b,y,null),g(o,j),g(o,x),g(x,_),B(k,_,null),g(l,T),g(l,M),q=!0},p:e,i(e){q||(C(u.$$.fragment,e),C(b.$$.fragment,e),C(k.$$.fragment,e),q=!0)},o(e){E(u.$$.fragment,e),E(b.$$.fragment,e),E(k.$$.fragment,e),q=!1},d(e){e&&f(s),P(u),P(b),P(k)}}}class He extends U{constructor(e){super(),O(this,e,null,Le,a,{})}}function Se(t){let s,l,n,c,a,r,i,o,d,v,u,$,h,y,b;return l=new ve({}),c=new ge({}),r=new fe({}),o=new $e({}),v=new we({}),$=new Ie({}),y=new He({}),{c(){s=m("main"),N(l.$$.fragment),n=w(),N(c.$$.fragment),a=w(),N(r.$$.fragment),i=w(),N(o.$$.fragment),d=w(),N(v.$$.fragment),u=w(),N($.$$.fragment),h=w(),N(y.$$.fragment),z(s,"id","main")},m(e,t){p(e,s,t),B(l,s,null),g(s,n),B(c,s,null),g(s,a),B(r,s,null),g(s,i),B(o,s,null),g(s,d),B(v,s,null),g(s,u),B($,s,null),g(s,h),B(y,s,null),b=!0},p:e,i(e){b||(C(l.$$.fragment,e),C(c.$$.fragment,e),C(r.$$.fragment,e),C(o.$$.fragment,e),C(v.$$.fragment,e),C($.$$.fragment,e),C(y.$$.fragment,e),b=!0)},o(e){E(l.$$.fragment,e),E(c.$$.fragment,e),E(r.$$.fragment,e),E(o.$$.fragment,e),E(v.$$.fragment,e),E($.$$.fragment,e),E(y.$$.fragment,e),b=!1},d(e){e&&f(s),P(l),P(c),P(r),P(o),P(v),P($),P(y)}}}return new class extends U{constructor(e){super(),O(this,e,null,Se,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
