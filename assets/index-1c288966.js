(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Va(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function Ao(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oo(e,t,n){return t&&qa(e.prototype,t),n&&qa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function la(e,t){return Eo(e)||Io(e,t)||Qi(e,t)||No()}function fn(e){return Co(e)||So(e)||Qi(e)||To()}function Co(e){if(Array.isArray(e))return Rr(e)}function Eo(e){if(Array.isArray(e))return e}function So(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Io(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Qi(e,t){if(e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function To(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function No(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xa=function(){},fa={},es={},ts=null,ns={mark:Xa,measure:Xa};try{typeof window<"u"&&(fa=window),typeof document<"u"&&(es=document),typeof MutationObserver<"u"&&(ts=MutationObserver),typeof performance<"u"&&(ns=performance)}catch{}var Mo=fa.navigator||{},Ga=Mo.userAgent,Ja=Ga===void 0?"":Ga,Qe=fa,J=es,Za=ts,bn=ns;Qe.document;var Ke=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",rs=~Ja.indexOf("MSIE")||~Ja.indexOf("Trident/"),yn,_n,wn,xn,kn,Be="___FONT_AWESOME___",Lr=16,as="fa",is="svg-inline--fa",vt="data-fa-i2svg",$r="data-fa-pseudo-element",Fo="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",Qa="fontawesome-i2svg",Ro="async",Lo=["HTML","HEAD","STYLE","SCRIPT"],ss=function(){try{return!0}catch{return!1}}(),G="classic",ee="sharp",da=[G,ee];function cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var Jt=cn((yn={},ne(yn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(yn,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yn)),Zt=cn((_n={},ne(_n,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(_n,ee,{solid:"fass",regular:"fasr",light:"fasl"}),_n)),Qt=cn((wn={},ne(wn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(wn,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),wn)),$o=cn((xn={},ne(xn,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(xn,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),jo=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,os="fa-layers-text",Do=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,zo=cn((kn={},ne(kn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(kn,ee,{900:"fass",400:"fasr",300:"fasl"}),kn)),ls=[1,2,3,4,5,6,7,8,9,10],Uo=ls.concat([11,12,13,14,15,16,17,18,19,20]),Bo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Zt[G]).map(en.add.bind(en));Object.keys(Zt[ee]).map(en.add.bind(en));var Ho=[].concat(da,fn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(ls.map(function(e){return"".concat(e,"x")})).concat(Uo.map(function(e){return"w-".concat(e)})),Vt=Qe.FontAwesomeConfig||{};function Wo(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Ko=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ko.forEach(function(e){var t=la(e,2),n=t[0],r=t[1],a=Yo(Wo(n));a!=null&&(Vt[r]=a)})}var fs={styleDefault:"solid",familyDefault:"classic",cssPrefix:as,replacementClass:is,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vt.familyPrefix&&(Vt.cssPrefix=Vt.familyPrefix);var Tt=O(O({},fs),Vt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var E={};Object.keys(fs).forEach(function(e){Object.defineProperty(E,e,{enumerable:!0,set:function(n){Tt[e]=n,qt.forEach(function(r){return r(E)})},get:function(){return Tt[e]}})});Object.defineProperty(E,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,qt.forEach(function(n){return n(E)})},get:function(){return Tt.cssPrefix}});Qe.FontAwesomeConfig=E;var qt=[];function Vo(e){return qt.push(e),function(){qt.splice(qt.indexOf(e),1)}}var qe=Lr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qo(e){if(!(!e||!Ke)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Xo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=Xo[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ma(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function cs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Go(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(cs(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pa(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function Jo(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Zo(e){var t=e.transform,n=e.width,r=n===void 0?Lr:n,a=e.height,i=a===void 0?Lr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&rs?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function us(){var e=as,t=is,n=E.cssPrefix,r=E.replacementClass,a=Qo;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ei=!1;function Ar(){E.autoAddCss&&!ei&&(qo(us()),ei=!0)}var el={mixout:function(){return{dom:{css:us,insertCss:Ar}}},hooks:function(){return{beforeDOMElementCreation:function(){Ar()},beforeI2svg:function(){Ar()}}}},He=Qe||{};He[Be]||(He[Be]={});He[Be].styles||(He[Be].styles={});He[Be].hooks||(He[Be].hooks={});He[Be].shims||(He[Be].shims=[]);var Oe=He[Be],ds=[],tl=function e(){J.removeEventListener("DOMContentLoaded",e),Wn=1,ds.map(function(t){return t()})},Wn=!1;Ke&&(Wn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Wn||J.addEventListener("DOMContentLoaded",tl));function nl(e){Ke&&(Wn?setTimeout(e,0):ds.push(e))}function un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?cs(e):"<".concat(t," ").concat(Go(r),">").concat(i.map(un).join(""),"</").concat(t,">")}function ti(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var rl=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},Or=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?rl(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<s;l++)c=i[l],u=o(u,t[c],c,t);return u};function al(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function jr(e){var t=al(e);return t.length===1?t[0].toString(16):null}function il(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ni(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ni(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,ni(t)):Oe.styles[e]=O(O({},Oe.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var Pn,An,On,kt=Oe.styles,sl=Oe.shims,ol=(Pn={},ne(Pn,G,Object.values(Qt[G])),ne(Pn,ee,Object.values(Qt[ee])),Pn),ha=null,ms={},ps={},hs={},gs={},vs={},ll=(An={},ne(An,G,Object.keys(Jt[G])),ne(An,ee,Object.keys(Jt[ee])),An);function fl(e){return~Ho.indexOf(e)}function cl(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!fl(a)?a:null}var bs=function(){var t=function(i){return Or(kt,function(s,o,l){return s[l]=Or(o,i,{}),s},{})};ms=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),ps=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),vs=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in kt||E.autoFetchSvg,r=Or(sl,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});hs=r.names,gs=r.unicodes,ha=nr(E.styleDefault,{family:E.familyDefault})};Vo(function(e){ha=nr(e.styleDefault,{family:E.familyDefault})});bs();function ga(e,t){return(ms[e]||{})[t]}function ul(e,t){return(ps[e]||{})[t]}function dt(e,t){return(vs[e]||{})[t]}function ys(e){return hs[e]||{prefix:null,iconName:null}}function dl(e){var t=gs[e],n=ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return ha}var va=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=Jt[r][e],i=Zt[r][e]||Zt[r][a],s=e in Oe.styles?e:null;return i||s||null}var ri=(On={},ne(On,G,Object.keys(Qt[G])),ne(On,ee,Object.keys(Qt[ee])),On);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,G,"".concat(E.cssPrefix,"-").concat(G)),ne(t,ee,"".concat(E.cssPrefix,"-").concat(ee)),t),s=null,o=G;(e.includes(i[G])||e.some(function(c){return ri[G].includes(c)}))&&(o=G),(e.includes(i[ee])||e.some(function(c){return ri[ee].includes(c)}))&&(o=ee);var l=e.reduce(function(c,u){var m=cl(E.cssPrefix,u);if(kt[u]?(u=ol[o].includes(u)?$o[o][u]:u,s=u,c.prefix=u):ll[o].indexOf(u)>-1?(s=u,c.prefix=nr(u,{family:o})):m?c.iconName=m:u!==E.replacementClass&&u!==i[G]&&u!==i[ee]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=s==="fa"?ys(c.iconName):{},x=dt(c.prefix,c.iconName);v.prefix&&(s=null),c.iconName=v.iconName||x||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!kt.far&&kt.fas&&!E.autoFetchSvg&&(c.prefix="fas")}return c},va());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ee&&(kt.fass||E.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=et()||"fas"),l}var ml=function(){function e(){Ao(this,e),this.definitions={}}return Oo(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=O(O({},n.definitions[o]||{}),s[o]),Dr(o,s[o]);var l=Qt[G][o];l&&Dr(l,s[o]),bs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),ai=[],Pt={},Ot={},pl=Object.keys(Ot);function hl(e,t){var n=t.mixoutsTo;return ai=e,Pt={},Object.keys(Ot).forEach(function(r){pl.indexOf(r)===-1&&delete Ot[r]}),ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Hn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Pt[s]||(Pt[s]=[]),Pt[s].push(i[s])})}r.provides&&r.provides(Ot)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Pt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Pt[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Ur(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=dt(n,t)||t,ti(_s.definitions,n,t)||ti(Oe.styles,n,t)}var _s=new ml,gl=function(){E.autoReplaceSvg=!1,E.observeMutations=!1,bt("noAuto")},vl={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(bt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;E.autoReplaceSvg===!1&&(E.autoReplaceSvg=!0),E.observeMutations=!0,nl(function(){yl({autoReplaceSvgRoot:n}),bt("watch",t)})}},bl={icon:function(t){if(t===null)return null;if(Hn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(E.cssPrefix,"-"))>-1||t.match(jo))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:dt(i,t)||t}}}},ye={noAuto:gl,config:E,dom:vl,parse:bl,library:_s,findIconDefinition:Ur,toHtml:un},yl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Oe.styles).length>0||E.autoFetchSvg)&&Ke&&E.autoReplaceSvg&&ye.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ke){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function _l(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(pa(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=tr(O(O({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function wl(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(E.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:s}),children:r}]}]}function ba(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,v=e.watchable,x=v===void 0?!1:v,j=r.found?r:n,M=j.width,z=j.height,k=a==="fak",A=[E.replacementClass,i?"".concat(E.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),R={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(z)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/z*16*.0625,"em")}:{};x&&(R.attributes[vt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||tn())},children:[l]}),delete R.attributes.title);var H=O(O({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:O(O({},S),m.styles)}),oe=r.found&&n.found?We("generateAbstractMask",H)||{children:[],attributes:{}}:We("generateAbstractIcon",H)||{children:[],attributes:{}},le=oe.children,xe=oe.attributes;return H.children=le,H.attributes=xe,o?wl(H):_l(H)}function ii(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=O(O(O({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[vt]="");var u=O({},s.styles);pa(a)&&(u.transform=Zo({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=tr(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function xl(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Cr=Oe.styles;function Br(e){var t=e[0],n=e[1],r=e.slice(4),a=la(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(E.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var kl={found:!1,width:512,height:512};function Pl(e,t){!ss&&!E.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hr(e,t){var n=t;return t==="fa"&&E.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=ys(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Cr[t]&&Cr[t][e]){var s=Cr[t][e];return r(Br(s))}Pl(e,t),r(O(O({},kl),{},{icon:E.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var si=function(){},Wr=E.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:si,measure:si},Ht='FA "6.4.2"',Al=function(t){return Wr.mark("".concat(Ht," ").concat(t," begins")),function(){return ws(t)}},ws=function(t){Wr.mark("".concat(Ht," ").concat(t," ends")),Wr.measure("".concat(Ht," ").concat(t),"".concat(Ht," ").concat(t," begins"),"".concat(Ht," ").concat(t," ends"))},ya={begin:Al,end:ws},Fn=function(){};function oi(e){var t=e.getAttribute?e.getAttribute(vt):null;return typeof t=="string"}function Ol(e){var t=e.getAttribute?e.getAttribute(ca):null,n=e.getAttribute?e.getAttribute(ua):null;return t&&n}function Cl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(E.replacementClass)}function El(){if(E.autoReplaceSvg===!0)return Rn.replace;var e=Rn[E.autoReplaceSvg];return e||Rn.replace}function Sl(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Il(e){return J.createElement(e)}function xs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Sl:Il:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(xs(s,{ceFn:r}))}),a}function Tl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(xs(a),n)}),n.getAttribute(vt)===null&&E.keepOriginalSource){var r=J.createComment(Tl(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ma(n).indexOf(E.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(E.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===E.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return un(o)}).join(`
`);n.setAttribute(vt,""),n.innerHTML=s}};function li(e){e()}function ks(e,t){var n=typeof t=="function"?t:Fn;if(e.length===0)n();else{var r=li;E.mutateApproach===Ro&&(r=Qe.requestAnimationFrame||li),r(function(){var a=El(),i=ya.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function Ps(){_a=!0}function Yr(){_a=!1}var Yn=null;function fi(e){if(Za&&E.observeMutations){var t=e.treeCallback,n=t===void 0?Fn:t,r=e.nodeCallback,a=r===void 0?Fn:r,i=e.pseudoElementsCallback,s=i===void 0?Fn:i,o=e.observeMutationsRoot,l=o===void 0?J:o;Yn=new Za(function(c){if(!_a){var u=et();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!oi(m.addedNodes[0])&&(E.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&E.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&oi(m.target)&&~Bo.indexOf(m.attributeName))if(m.attributeName==="class"&&Ol(m.target)){var v=rr(ma(m.target)),x=v.prefix,j=v.iconName;m.target.setAttribute(ca,x||u),j&&m.target.setAttribute(ua,j)}else Cl(m.target)&&a(m.target)})}}),Ke&&Yn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nl(){Yn&&Yn.disconnect()}function Ml(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Fl(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(ma(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ul(a.prefix,e.innerText)||ga(a.prefix,jr(e.innerText))),!a.iconName&&E.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Rl(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return E.autoA11y&&(n?t["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ll(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fl(e),r=n.iconName,a=n.prefix,i=n.rest,s=Rl(e),o=zr("parseNodeAttributes",{},e),l=t.styleParser?Ml(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var $l=Oe.styles;function As(e){var t=E.autoReplaceSvg==="nest"?ci(e,{styleParser:!1}):ci(e);return~t.extra.classes.indexOf(os)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var tt=new Set;da.map(function(e){tt.add("fa-".concat(e))});Object.keys(Jt[G]).map(tt.add.bind(tt));Object.keys(Jt[ee]).map(tt.add.bind(tt));tt=fn(tt);function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Qa,"-").concat(m))},a=function(m){return n.remove("".concat(Qa,"-").concat(m))},i=E.autoFetchSvg?tt:da.map(function(u){return"fa-".concat(u)}).concat(Object.keys($l));i.includes("fa")||i.push("fa");var s=[".".concat(os,":not([").concat(vt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(vt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ft(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ya.begin("onTree"),c=o.reduce(function(u,m){try{var v=As(m);v&&u.push(v)}catch(x){ss||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){ks(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(v){l(),m(v)})})}function jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;As(e).then(function(n){n&&ks([n],t)})}function Dl(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ur(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ur(a||{})),e(r,O(O({},n),{},{mask:a}))}}var zl=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,x=n.titleId,j=x===void 0?null:x,M=n.classes,z=M===void 0?[]:M,k=n.attributes,A=k===void 0?{}:k,R=n.styles,S=R===void 0?{}:R;if(t){var H=t.prefix,oe=t.iconName,le=t.icon;return ar(O({type:"icon"},t),function(){return bt("beforeDOMElementCreation",{iconDefinition:t,params:n}),E.autoA11y&&(v?A["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(j||tn()):(A["aria-hidden"]="true",A.focusable="false")),ba({icons:{main:Br(le),mask:l?Br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:oe,transform:O(O({},Le),a),symbol:s,title:v,maskId:u,titleId:j,extra:{attributes:A,styles:S,classes:z}})})}},Ul={mixout:function(){return{icon:Dl(zl)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ui,n.nodeCallback=jl,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,s=i===void 0?function(){}:i;return ui(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(x,j){Promise.all([Hr(a,o),u.iconName?Hr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var z=la(M,2),k=z[0],A=z[1];x([n,ba({icons:{main:k,mask:A},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=tr(o);l.length>0&&(a.style=l);var c;return pa(s)&&(c=We("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Bl={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){bt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(E.cssPrefix,"-layers")].concat(fn(i)).join(" ")},children:s}]})}}}},Hl={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return ar({type:"counter",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),xl({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(E.cssPrefix,"-layers-counter")].concat(fn(o))}})})}}}},Wl={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,x=v===void 0?{}:v;return ar({type:"text",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),ii({content:n,transform:O(O({},Le),i),title:o,extra:{attributes:m,styles:x,classes:["".concat(E.cssPrefix,"-layers-text")].concat(fn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(rs){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return E.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,ii({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Yl=new RegExp('"',"ug"),di=[1105920,1112319];function Kl(e){var t=e.replace(Yl,""),n=il(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:jr(a?t[0]:t),isSecondary:r||a}}function mi(e,t){var n="".concat(Fo).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),s=i.filter(function(le){return le.getAttribute($r)===t})[0],o=Qe.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Do),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?ee:G,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[v][l[2].toLowerCase()]:zo[v][c],j=Kl(m),M=j.value,z=j.isSecondary,k=l[0].startsWith("FontAwesome"),A=ga(x,M),R=A;if(k){var S=dl(M);S.iconName&&S.prefix&&(A=S.iconName,x=S.prefix)}if(A&&!z&&(!s||s.getAttribute(ca)!==x||s.getAttribute(ua)!==R)){e.setAttribute(n,R),s&&e.removeChild(s);var H=Ll(),oe=H.extra;oe.attributes[$r]=t,Hr(A,x).then(function(le){var xe=ba(O(O({},H),{},{icons:{main:le,mask:va()},prefix:x,iconName:R,extra:oe,watchable:!0})),_e=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=xe.map(function(je){return un(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Vl(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function ql(e){return e.parentNode!==document.head&&!~Lo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pi(e){if(Ke)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(ql).map(Vl),a=ya.begin("searchPseudoElements");Ps(),Promise.all(r).then(function(){a(),Yr(),t()}).catch(function(){a(),Yr(),n()})})}var Xl={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;E.searchPseudoElements&&pi(a)}}},hi=!1,Gl={mixout:function(){return{dom:{unwatch:function(){Ps(),hi=!0}}}},hooks:function(){return{bootstrap:function(){fi(zr("mutationObserverCallbacks",{}))},noAuto:function(){Nl()},watch:function(n){var r=n.observeMutationsRoot;hi?Yr():fi(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Jl={mixout:function(){return{parse:{transform:function(n){return gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(s/2*-1," -256)")},x={outer:o,inner:m,path:v};return{tag:"g",attributes:O({},x.outer),children:[{tag:"g",attributes:O({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),x.path)}]}]}}}},Er={x:0,y:0,width:"100%",height:"100%"};function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zl(e){return e.tag==="g"?e.children:[e]}var Ql={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(s){return s.trim()})):va();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,u=i.icon,m=s.width,v=s.icon,x=Jo({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:O(O({},Er),{},{fill:"white"})},M=u.children?{children:u.children.map(vi)}:{},z={tag:"g",attributes:O({},x.inner),children:[vi(O({tag:u.tag,attributes:O(O({},u.attributes),x.path)},M))]},k={tag:"g",attributes:O({},x.outer),children:[z]},A="mask-".concat(o||tn()),R="clip-".concat(o||tn()),S={tag:"mask",attributes:O(O({},Er),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Zl(v)},S]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(A,")")},Er)}),{children:r,attributes:a}}}},ef={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=O(O({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},tf={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},nf=[el,Ul,Bl,Hl,Wl,Xl,Gl,Jl,Ql,ef,tf];hl(nf,{mixoutsTo:ye});ye.noAuto;ye.config;var rf=ye.library;ye.dom;var Kr=ye.parse;ye.findIconDefinition;ye.toHtml;var af=ye.icon;ye.layer;ye.text;ye.counter;var sf={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},of=sf;function wa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},Ct=[],Ee=()=>{},lf=()=>!1,ff=/^on[^a-z]/,ir=e=>ff.test(e),xa=e=>e.startsWith("onUpdate:"),ie=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},cf=Object.prototype.hasOwnProperty,U=(e,t)=>cf.call(e,t),F=Array.isArray,Et=e=>dn(e)==="[object Map]",sr=e=>dn(e)==="[object Set]",bi=e=>dn(e)==="[object Date]",$=e=>typeof e=="function",re=e=>typeof e=="string",nn=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Os=e=>V(e)&&$(e.then)&&$(e.catch),Cs=Object.prototype.toString,dn=e=>Cs.call(e),uf=e=>dn(e).slice(8,-1),Es=e=>dn(e)==="[object Object]",Pa=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ln=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},df=/-(\w)/g,$e=or(e=>e.replace(df,(t,n)=>n?n.toUpperCase():"")),mf=/\B([A-Z])/g,Rt=or(e=>e.replace(mf,"-$1").toLowerCase()),lr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sr=or(e=>e?`on${lr(e)}`:""),Kn=(e,t)=>!Object.is(e,t),$n=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Vn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},qn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let yi;const Vr=()=>yi||(yi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mt(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?vf(r):mt(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(V(e))return e}}const pf=/;(?![^(]*\))/g,hf=/:([^]+)/,gf=/\/\*[^]*?\*\//g;function vf(e){const t={};return e.replace(gf,"").split(pf).forEach(n=>{if(n){const r=n.split(hf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Aa(e){let t="";if(re(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Aa(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yf=wa(bf);function Ss(e){return!!e||e===""}function _f(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=fr(e[r],t[r]);return n}function fr(e,t){if(e===t)return!0;let n=bi(e),r=bi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=nn(e),r=nn(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?_f(e,t):!1;if(n=V(e),r=V(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const s in e){const o=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(o&&!l||!o&&l||!fr(e[s],t[s]))return!1}}return String(e)===String(t)}function wf(e,t){return e.findIndex(n=>fr(n,t))}const me=e=>re(e)?e:e==null?"":F(e)||V(e)&&(e.toString===Cs||!$(e.toString))?JSON.stringify(e,Is,2):String(e),Is=(e,t)=>t&&t.__v_isRef?Is(e,t.value):Et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:sr(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!F(t)&&!Es(t)?String(t):t;let Pe;class xf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function kf(e,t=Pe){t&&t.active&&t.effects.push(e)}function Pf(){return Pe}const Oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ts=e=>(e.w&nt)>0,Ns=e=>(e.n&nt)>0,Af=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Of=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ts(a)&&!Ns(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},qr=new WeakMap;let Wt=0,nt=1;const Xr=30;let Ae;const ht=Symbol(""),Gr=Symbol("");class Ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kf(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Je=!0,nt=1<<++Wt,Wt<=Xr?Af(this):_i(this),this.fn()}finally{Wt<=Xr&&Of(this),nt=1<<--Wt,Ae=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(_i(this),this.onStop&&this.onStop(),this.active=!1)}}function _i(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Ms=[];function Lt(){Ms.push(Je),Je=!1}function $t(){const e=Ms.pop();Je=e===void 0?!0:e}function ve(e,t,n){if(Je&&Ae){let r=qr.get(e);r||qr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Oa()),Fs(a)}}function Fs(e,t){let n=!1;Wt<=Xr?Ns(e)||(e.n|=nt,n=!Ts(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Ye(e,t,n,r,a,i){const s=qr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&F(e)){const l=Number(r);s.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":F(e)?Pa(n)&&o.push(s.get("length")):(o.push(s.get(ht)),Et(e)&&o.push(s.get(Gr)));break;case"delete":F(e)||(o.push(s.get(ht)),Et(e)&&o.push(s.get(Gr)));break;case"set":Et(e)&&o.push(s.get(ht));break}if(o.length===1)o[0]&&Jr(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Jr(Oa(l))}}function Jr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&wi(r);for(const r of n)r.computed||wi(r)}function wi(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cf=wa("__proto__,__v_isRef,__isVue"),Rs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nn)),Ef=Ea(),Sf=Ea(!1,!0),If=Ea(!0),xi=Tf();function Tf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,s=this.length;i<s;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Lt();const r=B(this)[t].apply(this,n);return $t(),r}}),e}function Nf(e){const t=B(this);return ve(t,"has",e),t.hasOwnProperty(e)}function Ea(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?qf:zs:t?Ds:js).get(r))return r;const s=F(r);if(!e){if(s&&U(xi,a))return Reflect.get(xi,a,i);if(a==="hasOwnProperty")return Nf}const o=Reflect.get(r,a,i);return(nn(a)?Rs.has(a):Cf(a))||(e||ve(r,"get",a),t)?o:pe(o)?s&&Pa(a)?o:o.value:V(o)?e?Us(o):Ta(o):o}}const Mf=Ls(),Ff=Ls(!0);function Ls(e=!1){return function(n,r,a,i){let s=n[r];if(rn(s)&&pe(s)&&!pe(a))return!1;if(!e&&(!Zr(a)&&!rn(a)&&(s=B(s),a=B(a)),!F(n)&&pe(s)&&!pe(a)))return s.value=a,!0;const o=F(n)&&Pa(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(o?Kn(a,s)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function Rf(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function Lf(e,t){const n=Reflect.has(e,t);return(!nn(t)||!Rs.has(t))&&ve(e,"has",t),n}function $f(e){return ve(e,"iterate",F(e)?"length":ht),Reflect.ownKeys(e)}const $s={get:Ef,set:Mf,deleteProperty:Rf,has:Lf,ownKeys:$f},jf={get:If,set(e,t){return!0},deleteProperty(e,t){return!0}},Df=ie({},$s,{get:Sf,set:Ff}),Sa=e=>e,cr=e=>Reflect.getPrototypeOf(e);function Cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&ve(a,"get",t),ve(a,"get",i));const{has:s}=cr(a),o=r?Sa:n?Fa:Ma;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function En(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Sn(e,t=!1){return e=e.__v_raw,!t&&ve(B(e),"iterate",ht),Reflect.get(e,"size",e)}function ki(e){e=B(e);const t=B(this);return cr(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function Pi(e,t){t=B(t);const n=B(this),{has:r,get:a}=cr(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Kn(t,s)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function Ai(e){const t=B(this),{has:n,get:r}=cr(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function Oi(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function In(e,t){return function(r,a){const i=this,s=i.__v_raw,o=B(s),l=t?Sa:e?Fa:Ma;return!e&&ve(o,"iterate",ht),s.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function Tn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),s=Et(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),u=n?Sa:t?Fa:Ma;return!t&&ve(i,"iterate",l?Gr:ht),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:o?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function zf(){const e={get(i){return Cn(this,i)},get size(){return Sn(this)},has:En,add:ki,set:Pi,delete:Ai,clear:Oi,forEach:In(!1,!1)},t={get(i){return Cn(this,i,!1,!0)},get size(){return Sn(this)},has:En,add:ki,set:Pi,delete:Ai,clear:Oi,forEach:In(!1,!0)},n={get(i){return Cn(this,i,!0)},get size(){return Sn(this,!0)},has(i){return En.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:In(!0,!1)},r={get(i){return Cn(this,i,!0,!0)},get size(){return Sn(this,!0)},has(i){return En.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:In(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tn(i,!1,!1),n[i]=Tn(i,!0,!1),t[i]=Tn(i,!1,!0),r[i]=Tn(i,!0,!0)}),[e,n,t,r]}const[Uf,Bf,Hf,Wf]=zf();function Ia(e,t){const n=t?e?Wf:Hf:e?Bf:Uf;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Yf={get:Ia(!1,!1)},Kf={get:Ia(!1,!0)},Vf={get:Ia(!0,!1)},js=new WeakMap,Ds=new WeakMap,zs=new WeakMap,qf=new WeakMap;function Xf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(e){return e.__v_skip||!Object.isExtensible(e)?0:Xf(uf(e))}function Ta(e){return rn(e)?e:Na(e,!1,$s,Yf,js)}function Jf(e){return Na(e,!1,Df,Kf,Ds)}function Us(e){return Na(e,!0,jf,Vf,zs)}function Na(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Gf(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function St(e){return rn(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function rn(e){return!!(e&&e.__v_isReadonly)}function Zr(e){return!!(e&&e.__v_isShallow)}function Bs(e){return St(e)||rn(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Hs(e){return Vn(e,"__v_skip",!0),e}const Ma=e=>V(e)?Ta(e):e,Fa=e=>V(e)?Us(e):e;function Zf(e){Je&&Ae&&(e=B(e),Fs(e.dep||(e.dep=Oa())))}function Qf(e,t){e=B(e);const n=e.dep;n&&Jr(n)}function pe(e){return!!(e&&e.__v_isRef===!0)}function ec(e){return pe(e)?e.value:e}const tc={get:(e,t,n)=>ec(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return pe(a)&&!pe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ws(e){return St(e)?e:new Proxy(e,tc)}class nc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ca(t,()=>{this._dirty||(this._dirty=!0,Qf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Zf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function rc(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new nc(r,a,i||!a,n)}function Ze(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ur(i,t,n)}return a}function Se(e,t,n,r){if($(e)){const i=Ze(e,t,n,r);return i&&Os(i)&&i.catch(s=>{ur(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function ur(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ze(l,null,10,[e,s,o]);return}}ac(e,n,a,r)}function ac(e,t,n,r=!0){console.error(e)}let an=!1,Qr=!1;const ce=[];let Fe=0;const It=[];let ze=null,lt=0;const Ys=Promise.resolve();let Ra=null;function ic(e){const t=Ra||Ys;return e?t.then(this?e.bind(this):e):t}function sc(e){let t=Fe+1,n=ce.length;for(;t<n;){const r=t+n>>>1;sn(ce[r])<e?t=r+1:n=r}return t}function La(e){(!ce.length||!ce.includes(e,an&&e.allowRecurse?Fe+1:Fe))&&(e.id==null?ce.push(e):ce.splice(sc(e.id),0,e),Ks())}function Ks(){!an&&!Qr&&(Qr=!0,Ra=Ys.then(qs))}function oc(e){const t=ce.indexOf(e);t>Fe&&ce.splice(t,1)}function lc(e){F(e)?It.push(...e):(!ze||!ze.includes(e,e.allowRecurse?lt+1:lt))&&It.push(e),Ks()}function Ci(e,t=an?Fe+1:0){for(;t<ce.length;t++){const n=ce[t];n&&n.pre&&(ce.splice(t,1),t--,n())}}function Vs(e){if(It.length){const t=[...new Set(It)];if(It.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>sn(n)-sn(r)),lt=0;lt<ze.length;lt++)ze[lt]();ze=null,lt=0}}const sn=e=>e.id==null?1/0:e.id,fc=(e,t)=>{const n=sn(e)-sn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qs(e){Qr=!1,an=!0,ce.sort(fc);const t=Ee;try{for(Fe=0;Fe<ce.length;Fe++){const n=ce[Fe];n&&n.active!==!1&&Ze(n,null,14)}}finally{Fe=0,ce.length=0,Vs(),an=!1,Ra=null,(ce.length||It.length)&&qs()}}function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:v}=r[u]||X;v&&(a=n.map(x=>re(x)?x.trim():x)),m&&(a=n.map(qn))}let o,l=r[o=Sr(t)]||r[o=Sr($e(t))];!l&&i&&(l=r[o=Sr(Rt(t))]),l&&Se(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Se(c,e,6,a)}}function Xs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!$(e)){const l=c=>{const u=Xs(c,t,!0);u&&(o=!0,ie(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(V(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>s[l]=null):ie(s,i),V(e)&&r.set(e,s),s)}function dr(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Rt(t))||U(e,t))}let we=null,mr=null;function Xn(e){const t=we;return we=e,mr=e&&e.type.__scopeId||null,t}function pr(e){mr=e}function hr(){mr=null}function uc(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ji(-1);const i=Xn(t);let s;try{s=e(...a)}finally{Xn(i),r._d&&ji(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:x,ctx:j,inheritAttrs:M}=e;let z,k;const A=Xn(e);try{if(n.shapeFlag&4){const S=a||r;z=Me(u.call(S,S,m,i,x,v,j)),k=l}else{const S=t;z=Me(S.length>1?S(i,{attrs:l,slots:o,emit:c}):S(i,null)),k=t.props?l:dc(l)}}catch(S){Gt.length=0,ur(S,e,1),z=ae(yt)}let R=z;if(k&&M!==!1){const S=Object.keys(k),{shapeFlag:H}=R;S.length&&H&7&&(s&&S.some(xa)&&(k=mc(k,s)),R=Nt(R,k))}return n.dirs&&(R=Nt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),z=R,Xn(A),z}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},mc=(e,t)=>{const n={};for(const r in e)(!xa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pc(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ei(r,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(s[v]!==r[v]&&!dr(c,v))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ei(r,s,c):!0:!!s;return!1}function Ei(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!dr(n,i))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gc=e=>e.__isSuspense;function vc(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):lc(e)}const Nn={};function jn(e,t,n){return Gs(e,t,n)}function Gs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=X){var o;const l=Pf()===((o=se)==null?void 0:o.scope)?se:null;let c,u=!1,m=!1;if(pe(e)?(c=()=>e.value,u=Zr(e)):St(e)?(c=()=>e,r=!0):F(e)?(m=!0,u=e.some(S=>St(S)||Zr(S)),c=()=>e.map(S=>{if(pe(S))return S.value;if(St(S))return pt(S);if($(S))return Ze(S,l,2)})):$(e)?t?c=()=>Ze(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Se(e,l,3,[x])}:c=Ee,t&&r){const S=c;c=()=>pt(S())}let v,x=S=>{v=A.onStop=()=>{Ze(S,l,4)}},j;if(ln)if(x=Ee,t?n&&Se(t,l,3,[c(),m?[]:void 0,x]):c(),a==="sync"){const S=mu();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Ee;let M=m?new Array(e.length).fill(Nn):Nn;const z=()=>{if(A.active)if(t){const S=A.run();(r||u||(m?S.some((H,oe)=>Kn(H,M[oe])):Kn(S,M)))&&(v&&v(),Se(t,l,3,[S,M===Nn?void 0:m&&M[0]===Nn?[]:M,x]),M=S)}else A.run()};z.allowRecurse=!!t;let k;a==="sync"?k=z:a==="post"?k=()=>ge(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>La(z));const A=new Ca(c,k);t?n?z():M=A.run():a==="post"?ge(A.run.bind(A),l&&l.suspense):A.run();const R=()=>{A.stop(),l&&l.scope&&ka(l.scope.effects,A)};return j&&j.push(R),R}function bc(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?Js(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const s=se;Mt(this);const o=Gs(a,i.bind(r),n);return s?Mt(s):gt(),o}function Js(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))pt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(sr(e)||Et(e))e.forEach(n=>{pt(n,t)});else if(Es(e))for(const n in e)pt(e[n],t);return e}function ea(e,t){const n=we;if(n===null)return e;const r=_r(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,c=X]=t[i];s&&($(s)&&(s={mounted:s,updated:s}),s.deep&&pt(o),a.push({dir:s,instance:r,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function it(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Lt(),Se(l,n,8,[e.el,o,e,t]),$t())}}function gr(e,t){return $(e)?(()=>ie({name:e.name},t,{setup:e}))():e}const Dn=e=>!!e.type.__asyncLoader,Zs=e=>e.type.__isKeepAlive;function yc(e,t){Qs(e,"a",t)}function _c(e,t){Qs(e,"da",t)}function Qs(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(vr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Zs(a.parent.vnode)&&wc(r,t,n,a),a=a.parent}}function wc(e,t,n,r){const a=vr(t,e,r,!0);eo(()=>{ka(r[t],a)},n)}function vr(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Lt(),Mt(n);const o=Se(t,n,e,s);return gt(),$t(),o});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=se)=>(!ln||e==="sp")&&vr(e,(...r)=>t(...r),n),xc=Ve("bm"),kc=Ve("m"),Pc=Ve("bu"),Ac=Ve("u"),Oc=Ve("bum"),eo=Ve("um"),Cc=Ve("sp"),Ec=Ve("rtg"),Sc=Ve("rtc");function Ic(e,t=se){vr("ec",e,t)}const to="components";function Yt(e,t){return Nc(to,e,!0,t)||e}const Tc=Symbol.for("v-ndc");function Nc(e,t,n=!0,r=!1){const a=we||se;if(a){const i=a.type;if(e===to){const o=fu(i,!1);if(o&&(o===t||o===$e(t)||o===lr($e(t))))return i}const s=Si(a[e]||i[e],t)||Si(a.appContext[e],t);return!s&&r?i:s}}function Si(e,t){return e&&(e[t]||e[$e(t)]||e[lr($e(t))])}function At(e,t,n,r){let a;const i=n&&n[r];if(F(e)||re(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const ta=e=>e?ho(e)?_r(e)||e.proxy:ta(e.parent):null,Xt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ta(e.parent),$root:e=>ta(e.root),$emit:e=>e.emit,$options:e=>$a(e),$forceUpdate:e=>e.f||(e.f=()=>La(e.update)),$nextTick:e=>e.n||(e.n=ic.bind(e.proxy)),$watch:e=>bc.bind(e)}),Tr=(e,t)=>e!==X&&!e.__isScriptSetup&&U(e,t),Mc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const x=s[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return s[t]=1,r[t];if(a!==X&&U(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return s[t]=3,i[t];if(n!==X&&U(n,t))return s[t]=4,n[t];na&&(s[t]=0)}}const u=Xt[t];let m,v;if(u)return t==="$attrs"&&ve(e,"get",t),u(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==X&&U(n,t))return s[t]=4,n[t];if(v=l.config.globalProperties,U(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==X&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==X&&U(e,s)||Tr(t,s)||(o=i[0])&&U(o,s)||U(r,s)||U(Xt,s)||U(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ii(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let na=!0;function Fc(e){const t=$a(e),n=e.proxy,r=e.ctx;na=!1,t.beforeCreate&&Ti(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:x,updated:j,activated:M,deactivated:z,beforeDestroy:k,beforeUnmount:A,destroyed:R,unmounted:S,render:H,renderTracked:oe,renderTriggered:le,errorCaptured:xe,serverPrefetch:_e,expose:je,inheritAttrs:Dt,components:pn,directives:hn,filters:xr}=t;if(c&&Rc(c,r,null),s)for(const Q in s){const Y=s[Q];$(Y)&&(r[Q]=Y.bind(n))}if(a){const Q=a.call(n,n);V(Q)&&(e.data=Ta(Q))}if(na=!0,i)for(const Q in i){const Y=i[Q],rt=$(Y)?Y.bind(n,n):$(Y.get)?Y.get.bind(n,n):Ee,gn=!$(Y)&&$(Y.set)?Y.set.bind(n):Ee,at=ot({get:rt,set:gn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ie=>at.value=Ie})}if(o)for(const Q in o)no(o[Q],r,n,Q);if(l){const Q=$(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(Y=>{Uc(Y,Q[Y])})}u&&Ti(u,e,"c");function ue(Q,Y){F(Y)?Y.forEach(rt=>Q(rt.bind(n))):Y&&Q(Y.bind(n))}if(ue(xc,m),ue(kc,v),ue(Pc,x),ue(Ac,j),ue(yc,M),ue(_c,z),ue(Ic,xe),ue(Sc,oe),ue(Ec,le),ue(Oc,A),ue(eo,S),ue(Cc,_e),F(je))if(je.length){const Q=e.exposed||(e.exposed={});je.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else e.exposed||(e.exposed={});H&&e.render===Ee&&(e.render=H),Dt!=null&&(e.inheritAttrs=Dt),pn&&(e.components=pn),hn&&(e.directives=hn)}function Rc(e,t,n=Ee){F(e)&&(e=ra(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=zn(a.from||r,a.default,!0):i=zn(a.from||r):i=zn(a),pe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ti(e,t,n){Se(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function no(e,t,n,r){const a=r.includes(".")?Js(n,r):()=>n[r];if(re(e)){const i=t[e];$(i)&&jn(a,i)}else if($(e))jn(a,e.bind(n));else if(V(e))if(F(e))e.forEach(i=>no(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&jn(a,i,e)}}function $a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Gn(l,c,s,!0)),Gn(l,t,s)),V(t)&&i.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Gn(e,i,n,!0),a&&a.forEach(s=>Gn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Lc[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Lc={data:Ni,props:Mi,emits:Mi,methods:Kt,computed:Kt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:Kt,directives:Kt,watch:jc,provide:Ni,inject:$c};function Ni(e,t){return t?e?function(){return ie($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function $c(e,t){return Kt(ra(e),ra(t))}function ra(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function Kt(e,t){return e?ie(Object.create(null),e,t):t}function Mi(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ie(Object.create(null),Ii(e),Ii(t??{})):t}function jc(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function ro(){return{app:null,config:{isNativeTag:lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dc=0;function zc(e,t){return function(r,a=null){$(r)||(r=ie({},r)),a!=null&&!V(a)&&(a=null);const i=ro(),s=new Set;let o=!1;const l=i.app={_uid:Dc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pu,get config(){return i.config},set config(c){},use(c,...u){return s.has(c)||(c&&$(c.install)?(s.add(c),c.install(l,...u)):$(c)&&(s.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!o){const v=ae(r,a);return v.appContext=i,u&&t?t(v,c):e(v,c,m),o=!0,l._container=c,c.__vue_app__=l,_r(v.component)||v.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Jn=l;try{return c()}finally{Jn=null}}};return l}}let Jn=null;function Uc(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=se||we;if(r||Jn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Jn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function Bc(e,t,n,r=!1){const a={},i={};Vn(i,yr,1),e.propsDefaults=Object.create(null),ao(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Jf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Hc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=B(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(dr(e.emitsOptions,v))continue;const x=t[v];if(l)if(U(i,v))x!==i[v]&&(i[v]=x,c=!0);else{const j=$e(v);a[j]=aa(l,o,j,x,e,!1)}else x!==i[v]&&(i[v]=x,c=!0)}}}else{ao(e,t,a,i)&&(c=!0);let u;for(const m in o)(!t||!U(t,m)&&((u=Rt(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=aa(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&Ye(e,"set","$attrs")}function ao(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Ln(l))continue;const c=t[l];let u;a&&U(a,u=$e(l))?!i||!i.includes(u)?n[u]=c:(o||(o={}))[u]=c:dr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=B(n),c=o||X;for(let u=0;u<i.length;u++){const m=i[u];n[m]=aa(a,l,m,c[m],e,!U(c,m))}}return s}function aa(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=U(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Mt(a),r=c[n]=l.call(null,t),gt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}function io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[v,x]=io(m,t,!0);ie(s,v),x&&o.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return V(e)&&r.set(e,Ct),Ct;if(F(i))for(let u=0;u<i.length;u++){const m=$e(i[u]);Fi(m)&&(s[m]=X)}else if(i)for(const u in i){const m=$e(u);if(Fi(m)){const v=i[u],x=s[m]=F(v)||$(v)?{type:v}:ie({},v);if(x){const j=$i(Boolean,x.type),M=$i(String,x.type);x[0]=j>-1,x[1]=M<0||j<M,(j>-1||U(x,"default"))&&o.push(m)}}}const c=[s,o];return V(e)&&r.set(e,c),c}function Fi(e){return e[0]!=="$"}function Ri(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Li(e,t){return Ri(e)===Ri(t)}function $i(e,t){return F(t)?t.findIndex(n=>Li(n,e)):$(t)&&Li(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",ja=e=>F(e)?e.map(Me):[Me(e)],Wc=(e,t,n)=>{if(t._n)return t;const r=uc((...a)=>ja(t(...a)),n);return r._c=!1,r},oo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(so(a))continue;const i=e[a];if($(i))t[a]=Wc(a,i,r);else if(i!=null){const s=ja(i);t[a]=()=>s}}},lo=(e,t)=>{const n=ja(t);e.slots.default=()=>n},Yc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Vn(t,"_",n)):oo(t,e.slots={})}else e.slots={},t&&lo(e,t);Vn(e.slots,yr,1)},Kc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=X;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ie(a,t),!n&&o===1&&delete a._):(i=!t.$stable,oo(t,a)),s=t}else t&&(lo(e,t),s={default:1});if(i)for(const o in a)!so(o)&&!(o in s)&&delete a[o]};function ia(e,t,n,r,a=!1){if(F(e)){e.forEach((v,x)=>ia(v,t&&(F(t)?t[x]:t),n,r,a));return}if(Dn(r)&&!a)return;const i=r.shapeFlag&4?_r(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,u=o.refs===X?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(re(c)?(u[c]=null,U(m,c)&&(m[c]=null)):pe(c)&&(c.value=null)),$(l))Ze(l,o,12,[s,u]);else{const v=re(l),x=pe(l);if(v||x){const j=()=>{if(e.f){const M=v?U(m,l)?m[l]:u[l]:l.value;a?F(M)&&ka(M,i):F(M)?M.includes(i)||M.push(i):v?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else v?(u[l]=s,U(m,l)&&(m[l]=s)):x&&(l.value=s,e.k&&(u[e.k]=s))};s?(j.id=-1,ge(j,n)):j()}}}const ge=vc;function Vc(e){return qc(e)}function qc(e,t){const n=Vr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:x=Ee,insertStaticContent:j}=e,M=(f,d,p,g=null,h=null,_=null,P=!1,y=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ut(f,d)&&(g=vn(f),Ie(f,h,_,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=d;switch(b){case br:z(f,d,p,g);break;case yt:k(f,d,p,g);break;case Un:f==null&&A(d,p,g,P);break;case fe:pn(f,d,p,g,h,_,P,y,w);break;default:C&1?H(f,d,p,g,h,_,P,y,w):C&6?hn(f,d,p,g,h,_,P,y,w):(C&64||C&128)&&b.process(f,d,p,g,h,_,P,y,w,_t)}I!=null&&h&&ia(I,f&&f.ref,_,d||f,!d)},z=(f,d,p,g)=>{if(f==null)r(d.el=o(d.children),p,g);else{const h=d.el=f.el;d.children!==f.children&&c(h,d.children)}},k=(f,d,p,g)=>{f==null?r(d.el=l(d.children||""),p,g):d.el=f.el},A=(f,d,p,g)=>{[f.el,f.anchor]=j(f.children,d,p,g,f.el,f.anchor)},R=({el:f,anchor:d},p,g)=>{let h;for(;f&&f!==d;)h=v(f),r(f,p,g),f=h;r(d,p,g)},S=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),a(f),f=p;a(d)},H=(f,d,p,g,h,_,P,y,w)=>{P=P||d.type==="svg",f==null?oe(d,p,g,h,_,P,y,w):_e(f,d,h,_,P,y,w)},oe=(f,d,p,g,h,_,P,y)=>{let w,b;const{type:I,props:C,shapeFlag:T,transition:L,dirs:D}=f;if(w=f.el=s(f.type,_,C&&C.is,C),T&8?u(w,f.children):T&16&&xe(f.children,w,null,g,h,_&&I!=="foreignObject",P,y),D&&it(f,null,g,"created"),le(w,f,f.scopeId,P,g),C){for(const W in C)W!=="value"&&!Ln(W)&&i(w,W,null,C[W],_,f.children,g,h,De);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ne(b,g,f)}D&&it(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&L&&!L.persisted;K&&L.beforeEnter(w),r(w,d,p),((b=C&&C.onVnodeMounted)||K||D)&&ge(()=>{b&&Ne(b,g,f),K&&L.enter(w),D&&it(f,null,g,"mounted")},h)},le=(f,d,p,g,h)=>{if(p&&x(f,p),g)for(let _=0;_<g.length;_++)x(f,g[_]);if(h){let _=h.subTree;if(d===_){const P=h.vnode;le(f,P,P.scopeId,P.slotScopeIds,h.parent)}}},xe=(f,d,p,g,h,_,P,y,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=y?Ge(f[b]):Me(f[b]);M(null,I,d,p,g,h,_,P,y)}},_e=(f,d,p,g,h,_,P)=>{const y=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=d;w|=f.patchFlag&16;const C=f.props||X,T=d.props||X;let L;p&&st(p,!1),(L=T.onVnodeBeforeUpdate)&&Ne(L,p,d,f),I&&it(d,f,p,"beforeUpdate"),p&&st(p,!0);const D=h&&d.type!=="foreignObject";if(b?je(f.dynamicChildren,b,y,p,g,D,_):P||Y(f,d,y,null,p,g,D,_,!1),w>0){if(w&16)Dt(y,d,C,T,p,g,h);else if(w&2&&C.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",C.style,T.style,h),w&8){const K=d.dynamicProps;for(let W=0;W<K.length;W++){const te=K[W],ke=C[te],wt=T[te];(wt!==ke||te==="value")&&i(y,te,ke,wt,h,f.children,p,g,De)}}w&1&&f.children!==d.children&&u(y,d.children)}else!P&&b==null&&Dt(y,d,C,T,p,g,h);((L=T.onVnodeUpdated)||I)&&ge(()=>{L&&Ne(L,p,d,f),I&&it(d,f,p,"updated")},g)},je=(f,d,p,g,h,_,P)=>{for(let y=0;y<d.length;y++){const w=f[y],b=d[y],I=w.el&&(w.type===fe||!Ut(w,b)||w.shapeFlag&70)?m(w.el):p;M(w,b,I,null,g,h,_,P,!0)}},Dt=(f,d,p,g,h,_,P)=>{if(p!==g){if(p!==X)for(const y in p)!Ln(y)&&!(y in g)&&i(f,y,p[y],null,P,d.children,h,_,De);for(const y in g){if(Ln(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,P,d.children,h,_,De)}"value"in g&&i(f,"value",p.value,g.value)}},pn=(f,d,p,g,h,_,P,y,w)=>{const b=d.el=f?f.el:o(""),I=d.anchor=f?f.anchor:o("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:L}=d;L&&(y=y?y.concat(L):L),f==null?(r(b,p,g),r(I,p,g),xe(d.children,p,I,h,_,P,y,w)):C>0&&C&64&&T&&f.dynamicChildren?(je(f.dynamicChildren,T,p,h,_,P,y),(d.key!=null||h&&d===h.subTree)&&fo(f,d,!0)):Y(f,d,p,I,h,_,P,y,w)},hn=(f,d,p,g,h,_,P,y,w)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?h.ctx.activate(d,p,g,P,w):xr(d,p,g,h,_,P,w):Ua(f,d,w)},xr=(f,d,p,g,h,_,P)=>{const y=f.component=au(f,g,h);if(Zs(f)&&(y.ctx.renderer=_t),iu(y),y.asyncDep){if(h&&h.registerDep(y,ue),!f.el){const w=y.subTree=ae(yt);k(null,w,d,p)}return}ue(y,f,d,p,h,_,P)},Ua=(f,d,p)=>{const g=d.component=f.component;if(pc(f,d,p))if(g.asyncDep&&!g.asyncResolved){Q(g,d,p);return}else g.next=d,oc(g.update),g.update();else d.el=f.el,g.vnode=d},ue=(f,d,p,g,h,_,P)=>{const y=()=>{if(f.isMounted){let{next:I,bu:C,u:T,parent:L,vnode:D}=f,K=I,W;st(f,!1),I?(I.el=D.el,Q(f,I,P)):I=D,C&&$n(C),(W=I.props&&I.props.onVnodeBeforeUpdate)&&Ne(W,L,I,D),st(f,!0);const te=Ir(f),ke=f.subTree;f.subTree=te,M(ke,te,m(ke.el),vn(ke),f,h,_),I.el=te.el,K===null&&hc(f,te.el),T&&ge(T,h),(W=I.props&&I.props.onVnodeUpdated)&&ge(()=>Ne(W,L,I,D),h)}else{let I;const{el:C,props:T}=d,{bm:L,m:D,parent:K}=f,W=Dn(d);if(st(f,!1),L&&$n(L),!W&&(I=T&&T.onVnodeBeforeMount)&&Ne(I,K,d),st(f,!0),C&&Pr){const te=()=>{f.subTree=Ir(f),Pr(C,f.subTree,f,h,null)};W?d.type.__asyncLoader().then(()=>!f.isUnmounted&&te()):te()}else{const te=f.subTree=Ir(f);M(null,te,p,g,f,h,_),d.el=te.el}if(D&&ge(D,h),!W&&(I=T&&T.onVnodeMounted)){const te=d;ge(()=>Ne(I,K,te),h)}(d.shapeFlag&256||K&&Dn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&ge(f.a,h),f.isMounted=!0,d=p=g=null}},w=f.effect=new Ca(y,()=>La(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,st(f,!0),b()},Q=(f,d,p)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,Hc(f,d.props,g,p),Kc(f,d.children,p),Lt(),Ci(),$t()},Y=(f,d,p,g,h,_,P,y,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=d.children,{patchFlag:T,shapeFlag:L}=d;if(T>0){if(T&128){gn(b,C,p,g,h,_,P,y,w);return}else if(T&256){rt(b,C,p,g,h,_,P,y,w);return}}L&8?(I&16&&De(b,h,_),C!==b&&u(p,C)):I&16?L&16?gn(b,C,p,g,h,_,P,y,w):De(b,h,_,!0):(I&8&&u(p,""),L&16&&xe(C,p,g,h,_,P,y,w))},rt=(f,d,p,g,h,_,P,y,w)=>{f=f||Ct,d=d||Ct;const b=f.length,I=d.length,C=Math.min(b,I);let T;for(T=0;T<C;T++){const L=d[T]=w?Ge(d[T]):Me(d[T]);M(f[T],L,p,null,h,_,P,y,w)}b>I?De(f,h,_,!0,!1,C):xe(d,p,g,h,_,P,y,w,C)},gn=(f,d,p,g,h,_,P,y,w)=>{let b=0;const I=d.length;let C=f.length-1,T=I-1;for(;b<=C&&b<=T;){const L=f[b],D=d[b]=w?Ge(d[b]):Me(d[b]);if(Ut(L,D))M(L,D,p,null,h,_,P,y,w);else break;b++}for(;b<=C&&b<=T;){const L=f[C],D=d[T]=w?Ge(d[T]):Me(d[T]);if(Ut(L,D))M(L,D,p,null,h,_,P,y,w);else break;C--,T--}if(b>C){if(b<=T){const L=T+1,D=L<I?d[L].el:g;for(;b<=T;)M(null,d[b]=w?Ge(d[b]):Me(d[b]),p,D,h,_,P,y,w),b++}}else if(b>T)for(;b<=C;)Ie(f[b],h,_,!0),b++;else{const L=b,D=b,K=new Map;for(b=D;b<=T;b++){const be=d[b]=w?Ge(d[b]):Me(d[b]);be.key!=null&&K.set(be.key,b)}let W,te=0;const ke=T-D+1;let wt=!1,Wa=0;const zt=new Array(ke);for(b=0;b<ke;b++)zt[b]=0;for(b=L;b<=C;b++){const be=f[b];if(te>=ke){Ie(be,h,_,!0);continue}let Te;if(be.key!=null)Te=K.get(be.key);else for(W=D;W<=T;W++)if(zt[W-D]===0&&Ut(be,d[W])){Te=W;break}Te===void 0?Ie(be,h,_,!0):(zt[Te-D]=b+1,Te>=Wa?Wa=Te:wt=!0,M(be,d[Te],p,null,h,_,P,y,w),te++)}const Ya=wt?Xc(zt):Ct;for(W=Ya.length-1,b=ke-1;b>=0;b--){const be=D+b,Te=d[be],Ka=be+1<I?d[be+1].el:g;zt[b]===0?M(null,Te,p,Ka,h,_,P,y,w):wt&&(W<0||b!==Ya[W]?at(Te,p,Ka,2):W--)}}},at=(f,d,p,g,h=null)=>{const{el:_,type:P,transition:y,children:w,shapeFlag:b}=f;if(b&6){at(f.component.subTree,d,p,g);return}if(b&128){f.suspense.move(d,p,g);return}if(b&64){P.move(f,d,p,_t);return}if(P===fe){r(_,d,p);for(let C=0;C<w.length;C++)at(w[C],d,p,g);r(f.anchor,d,p);return}if(P===Un){R(f,d,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,d,p),ge(()=>y.enter(_),h);else{const{leave:C,delayLeave:T,afterLeave:L}=y,D=()=>r(_,d,p),K=()=>{C(_,()=>{D(),L&&L()})};T?T(_,D,K):K()}else r(_,d,p)},Ie=(f,d,p,g=!1,h=!1)=>{const{type:_,props:P,ref:y,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:T}=f;if(y!=null&&ia(y,null,p,f,!0),I&256){d.ctx.deactivate(f);return}const L=I&1&&T,D=!Dn(f);let K;if(D&&(K=P&&P.onVnodeBeforeUnmount)&&Ne(K,d,f),I&6)Po(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}L&&it(f,null,d,"beforeUnmount"),I&64?f.type.remove(f,d,p,h,_t,g):b&&(_!==fe||C>0&&C&64)?De(b,d,p,!1,!0):(_===fe&&C&384||!h&&I&16)&&De(w,d,p),g&&Ba(f)}(D&&(K=P&&P.onVnodeUnmounted)||L)&&ge(()=>{K&&Ne(K,d,f),L&&it(f,null,d,"unmounted")},p)},Ba=f=>{const{type:d,el:p,anchor:g,transition:h}=f;if(d===fe){ko(p,g);return}if(d===Un){S(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:P,delayLeave:y}=h,w=()=>P(p,_);y?y(f.el,_,w):w()}else _()},ko=(f,d)=>{let p;for(;f!==d;)p=v(f),a(f),f=p;a(d)},Po=(f,d,p)=>{const{bum:g,scope:h,update:_,subTree:P,um:y}=f;g&&$n(g),h.stop(),_&&(_.active=!1,Ie(P,f,d,p)),y&&ge(y,d),ge(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},De=(f,d,p,g=!1,h=!1,_=0)=>{for(let P=_;P<f.length;P++)Ie(f[P],d,p,g,h)},vn=f=>f.shapeFlag&6?vn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ha=(f,d,p)=>{f==null?d._vnode&&Ie(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,p),Ci(),Vs(),d._vnode=f},_t={p:M,um:Ie,m:at,r:Ba,mt:xr,mc:xe,pc:Y,pbc:je,n:vn,o:e};let kr,Pr;return t&&([kr,Pr]=t(_t)),{render:Ha,hydrate:kr,createApp:zc(Ha,kr)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ge(a[i]),o.el=s.el),n||fo(s,o)),o.type===br&&(o.el=s.el)}}function Xc(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Gc=e=>e.__isTeleport,fe=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Un=Symbol.for("v-stc"),Gt=[];let Ce=null;function q(e=!1){Gt.push(Ce=e?null:[])}function Jc(){Gt.pop(),Ce=Gt[Gt.length-1]||null}let on=1;function ji(e){on+=e}function co(e){return e.dynamicChildren=on>0?Ce||Ct:null,Jc(),on>0&&Ce&&Ce.push(e),e}function Z(e,t,n,r,a,i){return co(N(e,t,n,r,a,i,!0))}function uo(e,t,n,r,a){return co(ae(e,t,n,r,a,!0))}function sa(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",mo=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||pe(e)||$(e)?{i:we,r:e,k:t,f:!!n}:e:null);function N(e,t=null,n=null,r=0,a=null,i=e===fe?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&Bn(t),scopeId:mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return o?(Da(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),on>0&&!s&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const ae=Zc;function Zc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tc)&&(e=yt),sa(e)){const o=Nt(e,t,!0);return n&&Da(o,n),on>0&&!i&&Ce&&(o.shapeFlag&6?Ce[Ce.indexOf(e)]=o:Ce.push(o)),o.patchFlag|=-2,o}if(cu(e)&&(e=e.__vccOpts),t){t=Qc(t);let{class:o,style:l}=t;o&&!re(o)&&(t.class=Aa(o)),V(l)&&(Bs(l)&&!F(l)&&(l=ie({},l)),t.style=mt(l))}const s=re(e)?1:gc(e)?128:Gc(e)?64:V(e)?4:$(e)?2:0;return N(e,t,n,r,a,s,i,!0)}function Qc(e){return e?Bs(e)||yr in e?ie({},e):e:null}function Nt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?tu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&mo(o),ref:t&&t.ref?n&&a?F(a)?a.concat(Bn(t)):[a,Bn(t)]:Bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function po(e=" ",t=0){return ae(br,null,e,t)}function eu(e,t){const n=ae(Un,null,e);return n.staticCount=t,n}function Bt(e="",t=!1){return t?(q(),uo(yt,null,e)):ae(yt,null,e)}function Me(e){return e==null||typeof e=="boolean"?ae(yt):F(e)?ae(fe,null,e.slice()):typeof e=="object"?Ge(e):ae(br,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function Da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Da(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(yr in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[po(t)]):n=8);e.children=t,e.shapeFlag|=n}function tu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Aa([t.class,r.class]));else if(a==="style")t.style=mt([t.style,r.style]);else if(ir(a)){const i=t[a],s=r[a];s&&i!==s&&!(F(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Se(e,t,7,[n,r])}const nu=ro();let ru=0;function au(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nu,i={uid:ru++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:io(r,a),emitsOptions:Xs(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cc.bind(null,i),e.ce&&e.ce(i),i}let se=null,za,xt,Di="__VUE_INSTANCE_SETTERS__";(xt=Vr()[Di])||(xt=Vr()[Di]=[]),xt.push(e=>se=e),za=e=>{xt.length>1?xt.forEach(t=>t(e)):xt[0](e)};const Mt=e=>{za(e),e.scope.on()},gt=()=>{se&&se.scope.off(),za(null)};function ho(e){return e.vnode.shapeFlag&4}let ln=!1;function iu(e,t=!1){ln=t;const{props:n,children:r}=e.vnode,a=ho(e);Bc(e,n,a,t),Yc(e,r);const i=a?su(e,t):void 0;return ln=!1,i}function su(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hs(new Proxy(e.ctx,Mc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lu(e):null;Mt(e),Lt();const i=Ze(r,e,0,[e.props,a]);if($t(),gt(),Os(i)){if(i.then(gt,gt),t)return i.then(s=>{zi(e,s,t)}).catch(s=>{ur(s,e,0)});e.asyncDep=i}else zi(e,i,t)}else go(e,t)}function zi(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Ws(t)),go(e,n)}let Ui;function go(e,t,n){const r=e.type;if(!e.render){if(!t&&Ui&&!r.render){const a=r.template||$a(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ie(ie({isCustomElement:i,delimiters:o},s),l);r.render=Ui(a,c)}}e.render=r.render||Ee}Mt(e),Lt(),Fc(e),$t(),gt()}function ou(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function lu(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ou(e)},slots:e.slots,emit:e.emit,expose:t}}function _r(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ws(Hs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xt)return Xt[n](e)},has(t,n){return n in t||n in Xt}}))}function fu(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function cu(e){return $(e)&&"__vccOpts"in e}const ot=(e,t)=>rc(e,t,ln);function uu(e,t,n){const r=arguments.length;return r===2?V(t)&&!F(t)?sa(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sa(n)&&(n=[n]),ae(e,t,n))}const du=Symbol.for("v-scx"),mu=()=>zn(du),pu="3.3.4",hu="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,Bi=ft&&ft.createElement("template"),gu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(hu,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Bi.innerHTML=r?`<svg>${e}</svg>`:e;const o=Bi.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bu(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&oa(r,i,"");for(const i in n)oa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Hi=/\s*!important$/;function oa(e,t,n){if(F(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yu(e,t);Hi.test(n)?e.setProperty(Rt(r),n.replace(Hi,""),"important"):e[r]=n}}const Wi=["Webkit","Moz","ms"],Nr={};function yu(e,t){const n=Nr[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=lr(r);for(let a=0;a<Wi.length;a++){const i=Wi[a]+r;if(i in e)return Nr[t]=i}return t}const Yi="http://www.w3.org/1999/xlink";function _u(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Yi,t.slice(6,t.length)):e.setAttributeNS(Yi,t,n);else{const i=yf(t);n==null||i&&!Ss(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wu(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ss(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ct(e,t,n,r){e.addEventListener(t,n,r)}function xu(e,t,n,r){e.removeEventListener(t,n,r)}function ku(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Pu(t);if(r){const c=i[t]=Cu(r,a);ct(e,o,c,l)}else s&&(xu(e,o,s,l),i[t]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function Pu(e){let t;if(Ki.test(e)){t={};let r;for(;r=e.match(Ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rt(e.slice(2)),t]}let Mr=0;const Au=Promise.resolve(),Ou=()=>Mr||(Au.then(()=>Mr=0),Mr=Date.now());function Cu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(Eu(r,n.value),t,5,[r])};return n.value=e,n.attached=Ou(),n}function Eu(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Vi=/^on[a-z]/,Su=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?vu(e,r,a):t==="style"?bu(e,n,r):ir(t)?xa(t)||ku(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Iu(e,t,r,a))?wu(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_u(e,t,r,a))};function Iu(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Vi.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Vi.test(t)&&re(n)?!1:t in e}const Zn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>$n(t,n):t};function Tu(e){e.target.composing=!0}function qi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Nu={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Zn(a);const i=r||a.props&&a.props.type==="number";ct(e,t?"change":"input",s=>{if(s.target.composing)return;let o=e.value;n&&(o=o.trim()),i&&(o=qn(o)),e._assign(o)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",Tu),ct(e,"compositionend",qi),ct(e,"change",qi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Zn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&qn(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},vo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=sr(t);ct(e,"change",()=>{const i=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?qn(Qn(s)):Qn(s));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=Zn(r)},mounted(e,{value:t}){Xi(e,t)},beforeUpdate(e,t,n){e._assign=Zn(n)},updated(e,{value:t}){Xi(e,t)}};function Xi(e,t){const n=e.multiple;if(!(n&&!F(t)&&!sr(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],s=Qn(i);if(n)F(t)?i.selected=wf(t,s)>-1:i.selected=t.has(s);else if(fr(Qn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Qn(e){return"_value"in e?e._value:e.value}const Mu=["ctrl","shift","alt","meta"],Fu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Mu.some(n=>e[`${n}Key`]&&!t.includes(n))},Re=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Fu[t[a]];if(i&&i(n,t))return}return e(n,...r)},Ru=ie({patchProp:Su},gu);let Gi;function Lu(){return Gi||(Gi=Vc(Ru))}const $u=(...e)=>{const t=Lu().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ju(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function ju(e){return re(e)?document.querySelector(e):e}function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Du(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function zu(e,t){if(e==null)return{};var n=Du(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bo={exports:{}};(function(e){(function(t){var n=function(k,A,R){if(!c(A)||m(A)||v(A)||x(A)||l(A))return A;var S,H=0,oe=0;if(u(A))for(S=[],oe=A.length;H<oe;H++)S.push(n(k,A[H],R));else{S={};for(var le in A)Object.prototype.hasOwnProperty.call(A,le)&&(S[k(le,R)]=n(k,A[le],R))}return S},r=function(k,A){A=A||{};var R=A.separator||"_",S=A.split||/(?=[A-Z])/;return k.split(S).join(R)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},s=function(k,A){return r(k,A).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},v=function(k){return o.call(k)=="[object RegExp]"},x=function(k){return o.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},M=function(k,A){var R=A&&"process"in A?A.process:A;return typeof R!="function"?k:function(S,H){return R(S,k,H)}},z={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,A){return n(M(a,A),k)},decamelizeKeys:function(k,A){return n(M(s,A),k,A)},pascalizeKeys:function(k,A){return n(M(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(Uu)})(bo);var Bu=bo.exports,Hu=["class","style"];function Wu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Bu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Yu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return yo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Yu(u);break;case"style":l.style=Wu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=zu(n,Hu);return uu(e.tag,Ue(Ue(Ue({},t),{},{class:a.class,style:Ue(Ue({},a.style),s)},a.attrs),o),r)}var _o=!1;try{_o=!0}catch{}function Ku(){if(!_o&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function Vu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Zi(e){if(e&&er(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kr.icon)return Kr.icon(e);if(e===null)return null;if(er(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var qu=gr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ot(function(){return Zi(t.icon)}),i=ot(function(){return Fr("classes",Vu(t))}),s=ot(function(){return Fr("transform",typeof t.transform=="string"?Kr.transform(t.transform):t.transform)}),o=ot(function(){return Fr("mask",Zi(t.mask))}),l=ot(function(){return af(a.value,Ue(Ue(Ue(Ue({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});jn(l,function(u){if(!u)return Ku("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=ot(function(){return l.value?yo(l.value.abstract[0],{},r):null});return function(){return c.value}}});const Xu=gr({data:()=>({imageUrls:{},gamesCollapsed:!0,companiesCollapsed:!0,seriesCollapsed:!0,genresCollapsed:!0}),props:{info:{type:Object,required:!0}},methods:{getWikiLogo(e){let t=e+"?action=query&meta=siteinfo&formatversion=2&format=json&origin=*";fetch(t,{}).then(n=>n.json()).catch(()=>{this.imageUrls[e]="none.png"}).then(n=>{if(!n)return;let r=n.query.general.logo;r.includes("change-your-logo.svg")?this.imageUrls[e]="none.png":this.imageUrls[e]=r})},changeCollapse(e){switch(e){case"games":this.gamesCollapsed=!this.gamesCollapsed;break;case"series":this.seriesCollapsed=!this.seriesCollapsed;break;case"companies":this.companiesCollapsed=!this.companiesCollapsed;break;case"genres":this.genresCollapsed=!this.genresCollapsed;break}}}});const mn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},wr=e=>(pr("data-v-e70ebfd3"),e=e(),hr(),e),Gu=["href"],Ju={class:"info"},Zu={class:"link"},Qu={class:"lang"},ed={class:"details"},td={key:0,class:"logo"},nd=["src"],rd={key:0,class:"category"},ad=wr(()=>N("h3",null,"Games",-1)),id={key:1,class:"category"},sd=wr(()=>N("h3",null,"Series",-1)),od={key:2,class:"category"},ld=wr(()=>N("h3",null,"Companies",-1)),fd={key:3,class:"category"},cd=wr(()=>N("h3",null,"Genres",-1));function ud(e,t,n,r,a,i){return q(),Z("a",{class:"entry",href:e.info.homepage,target:"_blank"},[N("h2",null,me(e.info.name),1),N("div",Ju,[N("p",Zu,me(e.info.homepage),1),N("p",Qu,"("+me(e.info.lang)+")",1)]),N("div",ed,[e.info.api?(q(),Z("div",td,[po(me(e.getWikiLogo(e.info.api))+" ",1),N("img",{src:e.imageUrls[e.info.api]},null,8,nd)])):Bt("",!0),N("div",{class:"categories",onClick:t[4]||(t[4]=Re(()=>{},["prevent"]))},[e.info.games?(q(),Z("div",rd,[N("div",null,[ad,N("button",{onClick:t[0]||(t[0]=Re(s=>e.changeCollapse("games"),["prevent"]))},me(e.gamesCollapsed?"+":"-"),1)]),N("ul",{style:mt("display: "+(e.gamesCollapsed?"none":"block"))},[(q(!0),Z(fe,null,At(e.info.games,s=>(q(),Z("li",null,me(s),1))),256))],4)])):Bt("",!0),e.info.series?(q(),Z("div",id,[N("div",null,[sd,N("button",{onClick:t[1]||(t[1]=Re(s=>e.changeCollapse("series"),["prevent"]))},me(e.seriesCollapsed?"+":"-"),1)]),N("ul",{style:mt("display: "+(e.seriesCollapsed?"none":"block"))},[(q(!0),Z(fe,null,At(e.info.series,s=>(q(),Z("li",null,me(s),1))),256))],4)])):Bt("",!0),e.info.companies?(q(),Z("div",od,[N("div",null,[ld,N("button",{onClick:t[2]||(t[2]=Re(s=>e.changeCollapse("companies"),["prevent"]))},me(e.companiesCollapsed?"+":"-"),1)]),N("ul",{style:mt("display: "+(e.companiesCollapsed?"none":"block"))},[(q(!0),Z(fe,null,At(e.info.companies,s=>(q(),Z("li",null,me(s),1))),256))],4)])):Bt("",!0),e.info.genres?(q(),Z("div",fd,[cd,N("button",{onClick:t[3]||(t[3]=Re(s=>e.changeCollapse("genres"),["prevent"]))},me(e.genresCollapsed?"+":"-"),1),N("ul",{style:mt("display: "+(e.genresCollapsed?"none":"block"))},[(q(!0),Z(fe,null,At(e.info.genres,s=>(q(),Z("li",null,me(s),1))),256))],4)])):Bt("",!0)])])],8,Gu)}const dd=mn(Xu,[["render",ud],["__scopeId","data-v-e70ebfd3"]]);let Mn;async function wo(){if(Mn)return Mn;{let t=await(await fetch("https://raw.githubusercontent.com/GameWikis/WikiLookup/master/WikiLookup.json")).json(),n=[];for(let r=0;r<1;r++)n.push(...t);return Mn=n,Mn}}async function md(e,t){const n=Date.now(),r=(await wo()).filter(o=>t.lang=="all"||o.lang==t.lang);if(console.log("Search: "+e),e=e.toLowerCase(),e=="")return{result:r,time:Date.now()-n};let a=[];r.forEach(o=>{a.push({wiki:o,score:0})}),a.filter(o=>o.wiki.name.toLowerCase().includes(e)).forEach(o=>{o.score+=15});let i={games:9,series:8,companies:5,genres:2};for(let o of Object.keys(i))a.forEach(l=>{if(l.wiki[o]){let c=l.wiki[o].filter(m=>m.toLowerCase().includes(e)).length,u=l.wiki[o].length;l.score+=c/u*i[o]}});return console.log(a),{result:a.filter(o=>o.score!=0).sort((o,l)=>l.score-o.score).map(o=>o.wiki),time:Date.now()-n}}const pd=gr({data:()=>({text:"",lang:"all",time:0,possibleLanguages:[]}),methods:{async Search(){let e=await md(this.text,{lang:this.lang});this.time=e.time,this.$emit("result",e.result)},keyPress(e){e.code=="Enter"&&this.Search()}},mounted(){var e;wo().then(t=>{t.map(n=>n.lang).forEach(n=>{this.possibleLanguages.includes(n)||this.possibleLanguages.push(n)})}),this.Search(),(e=document.getElementById("search"))==null||e.focus()}});const xo=e=>(pr("data-v-840974bb"),e=e(),hr(),e),hd={class:"settings"},gd={class:"search bar"},vd=["onkeydown"],bd={class:"filter bar"},yd=xo(()=>N("p",null,"Language:",-1)),_d=xo(()=>N("option",{value:"all"},"All",-1)),wd=["value"];function xd(e,t,n,r,a,i){const s=Yt("font-awesome-icon");return q(),Z("div",hd,[N("div",gd,[ea(N("input",{type:"text",id:"search","onUpdate:modelValue":t[0]||(t[0]=o=>e.text=o),onkeydown:e.keyPress},null,8,vd),[[Nu,e.text]]),N("button",{onClick:t[1]||(t[1]=Re((...o)=>e.Search&&e.Search(...o),["prevent"]))},[ae(s,{icon:"fa-solid fa-search",class:"icon"})])]),N("div",bd,[yd,ea(N("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>e.lang=o),onChange:t[3]||(t[3]=(...o)=>e.Search&&e.Search(...o))},[_d,(q(!0),Z(fe,null,At(e.possibleLanguages,o=>(q(),Z("option",{value:o.toLowerCase()},me(o),9,wd))),256))],544),[[vo,e.lang]])])])}const kd=mn(pd,[["render",xd],["__scopeId","data-v-840974bb"]]);const Pd={},Ad={class:"footer"},Od=eu('<div class="links" data-v-f2858268><p data-v-f2858268>GitHub repo:</p><a href="https://github.com/Stevnbak/WikiSearch" target="_blank" data-v-f2858268>GitHub</a></div><div data-v-f2858268><p data-v-f2858268>Made by</p><p data-v-f2858268><a href="https://github.com/stevnbak" target="_blank" data-v-f2858268>Stevnbak</a> &amp; <a href="https://github.com/verygreatfrog" target="_blank" data-v-f2858268>VeryGreatFrog</a></p></div><div data-v-f2858268><p data-v-f2858268>Wiki data from</p><a href="https://github.com/GameWikis/WikiLookup/" target="_blank" data-v-f2858268>ABXY Wiki Lookup</a></div>',3),Cd=[Od];function Ed(e,t){return q(),Z("div",Ad,Cd)}const Sd=mn(Pd,[["render",Ed],["__scopeId","data-v-f2858268"]]);const Id={},Td=e=>(pr("data-v-54852f07"),e=e(),hr(),e),Nd={class:"header"},Md=Td(()=>N("h1",null,"Independent wikis lookup",-1)),Fd=[Md];function Rd(e,t){return q(),Z("div",Nd,Fd)}const Ld=mn(Id,[["render",Rd],["__scopeId","data-v-54852f07"]]),$d=gr({data:()=>({results:[],time:0,totalPages:0,currentPage:1,resultsPerPage:10}),components:{WikiEntry:dd,SearchBar:kd,Footer:Sd,Header:Ld},methods:{recieveResults(e){console.log("Recieved result:",e),this.totalPages=Math.ceil(e.length/this.resultsPerPage),this.switchPage(1,!0),this.results=e},switchPage(e,t){t?this.currentPage=e:this.currentPage+=e,this.currentPage<1&&(this.currentPage=1),this.currentPage>this.totalPages&&(this.currentPage=this.totalPages)},changeResultsPerPage(){this.totalPages=Math.ceil(this.results.length/this.resultsPerPage),this.switchPage(1,!0)}},mounted(){}});const jt=e=>(pr("data-v-1966564b"),e=e(),hr(),e),jd={class:"pages"},Dd={class:"tab top"},zd=["disabled"],Ud=["disabled"],Bd=["disabled"],Hd=["disabled"],Wd={class:"tab"},Yd=jt(()=>N("label",null,"Results per page:",-1)),Kd=jt(()=>N("option",{value:"5"},"5",-1)),Vd=jt(()=>N("option",{value:"10"},"10",-1)),qd=jt(()=>N("option",{value:"25"},"25",-1)),Xd=jt(()=>N("option",{value:"50"},"50",-1)),Gd=[Kd,Vd,qd,Xd],Jd={key:0,class:"entries"},Zd={key:1,class:"entries"},Qd=jt(()=>N("h2",null,"No wikis found",-1)),em=[Qd];function tm(e,t,n,r,a,i){const s=Yt("Header"),o=Yt("SearchBar"),l=Yt("WikiEntry"),c=Yt("Footer");return q(),Z(fe,null,[N("header",null,[ae(s)]),N("main",null,[ae(o,{class:"pages",onResult:e.recieveResults},null,8,["onResult"]),N("div",jd,[N("div",Dd,[N("div",null,[N("button",{onClick:t[0]||(t[0]=Re(u=>e.switchPage(1,!0),["prevent"])),disabled:e.currentPage==1},"First",8,zd),N("button",{onClick:t[1]||(t[1]=Re(u=>e.switchPage(-1,!1),["prevent"])),disabled:e.currentPage==1},"Previous",8,Ud)]),N("p",null,"Page "+me(e.currentPage)+" of "+me(e.totalPages),1),N("div",null,[N("button",{onClick:t[2]||(t[2]=Re(u=>e.switchPage(1,!1),["prevent"])),disabled:e.currentPage==e.totalPages},"Next",8,Bd),N("button",{onClick:t[3]||(t[3]=Re(u=>e.switchPage(e.totalPages,!0),["prevent"])),disabled:e.currentPage==e.totalPages},"Last",8,Hd)])]),N("div",Wd,[Yd,ea(N("select",{"onUpdate:modelValue":t[4]||(t[4]=u=>e.resultsPerPage=u),onChange:t[5]||(t[5]=(...u)=>e.changeResultsPerPage&&e.changeResultsPerPage(...u))},Gd,544),[[vo,e.resultsPerPage]])])]),e.results.length!=0?(q(),Z("div",Jd,[(q(!0),Z(fe,null,At(e.results.slice((e.currentPage-1)*e.resultsPerPage,e.currentPage*e.resultsPerPage),u=>(q(),uo(l,{info:u},null,8,["info"]))),256))])):(q(),Z("div",Zd,em))]),N("footer",null,[ae(c)])],64)}const nm=mn($d,[["render",tm],["__scopeId","data-v-1966564b"]]);rf.add(of);$u(nm).component("font-awesome-icon",qu).mount("body");
