window.Modernizr=function(e,t,n){function i(e){b.cssText=e}function a(e,t){return i(w.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var i in e){var a=e[i];if(!o(a,"-")&&b[a]!==n)return"pfx"==t?a:!0}return!1}function c(e,t,i){for(var a in e){var o=t[e[a]];if(o!==n)return i===!1?e[a]:r(o,"function")?o.bind(i||t):o}return!1}function u(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+C.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?s(a,t):(a=(e+" "+S.join(i+" ")+i).split(" "),c(a,t,n))}function l(){m.input=function(n){for(var i=0,a=n.length;a>i;i++)N[n[i]]=!!(n[i]in x);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var i,a,r,o=0,s=e.length;s>o;o++)x.setAttribute("type",a=e[o]),i="text"!==x.type,i&&(x.value=_,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&x.style.WebkitAppearance!==n?(g.appendChild(x),r=t.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(a)||(i=/^(url|email)$/.test(a)?x.checkValidity&&x.checkValidity()===!1:x.value!=_)),q[e[o]]=!!i;return q}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,h="2.8.3",m={},p=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),_=":)",E={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",C=k.split(" "),S=k.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},F={},q={},N={},A=[],M=A.slice,L=function(e,n,i,a){var r,o,s,c,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=a?a[i]:v+(i+1),u.appendChild(s);return r=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=r,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),o=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=c),!!o},P=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var i;return L("@media "+t+" { #"+v+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},z=function(){function e(e,a){a=a||t.createElement(i[e]||"div"),e="on"+e;var o=e in a;return o||(a.setAttribute||(a=t.createElement("div")),a.setAttribute&&a.removeAttribute&&(a.setAttribute(e,""),o=r(a[e],"function"),r(a[e],"undefined")||(a[e]=n),a.removeAttribute(e))),a=null,o}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),j={}.hasOwnProperty;f=r(j,"undefined")||r(j.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return j.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=M.call(arguments,1),i=function(){if(this instanceof i){var a=function(){};a.prototype=t.prototype;var r=new a,o=t.apply(r,n.concat(M.call(arguments)));return Object(o)===o?o:r}return t.apply(e,n.concat(M.call(arguments)))};return i}),F.flexbox=function(){return u("flexWrap")},F.flexboxlegacy=function(){return u("boxDirection")},F.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},F.canvastext=function(){return!(!m.canvas||!r(t.createElement("canvas").getContext("2d").fillText,"function"))},F.webgl=function(){return!!e.WebGLRenderingContext},F.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",w.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},F.geolocation=function(){return"geolocation"in navigator},F.postmessage=function(){return!!e.postMessage},F.websqldatabase=function(){return!!e.openDatabase},F.indexedDB=function(){return!!u("indexedDB",e)},F.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},F.history=function(){return!(!e.history||!history.pushState)},F.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},F.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},F.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},F.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},F.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},F.backgroundsize=function(){return u("backgroundSize")},F.borderimage=function(){return u("borderImage")},F.borderradius=function(){return u("borderRadius")},F.boxshadow=function(){return u("boxShadow")},F.textshadow=function(){return""===t.createElement("div").style.textShadow},F.opacity=function(){return a("opacity:.55"),/^0.55$/.test(b.opacity)},F.cssanimations=function(){return u("animationName")},F.csscolumns=function(){return u("columnCount")},F.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((e+"-webkit- ".split(" ").join(t+e)+w.join(n+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},F.cssreflections=function(){return u("boxReflect")},F.csstransforms=function(){return!!u("transform")},F.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},F.csstransitions=function(){return u("transition")},F.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,i){var a=t.getElementById("smodernizr"),r=a.sheet||a.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(i.split(" ")[0])}),e},F.generatedcontent=function(){var e;return L(["#",v,"{font:0/0 a}#",v,':after{content:"',_,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},F.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},F.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},F.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},F.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},F.webworkers=function(){return!!e.Worker},F.applicationcache=function(){return!!e.applicationCache},F.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},F.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},F.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(T.svg,"animate")))},F.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(T.svg,"clipPath")))};for(var O in F)f(F,O)&&(d=O.toLowerCase(),m[d]=F[O](),A.push((m[d]?"":"no-")+d));return m.input||l(),m.addTest=function(e,t){if("object"==typeof e)for(var i in e)f(e,i)&&m.addTest(i,e[i]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof p&&p&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},i(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=v[e[p]];return t||(t={},g++,e[p]=g,v[g]=t),t}function r(e,n,i){if(n||(n=t),l)return n.createElement(e);i||(i=a(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():m.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||h.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function o(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||a(e);for(var r=n.frag.cloneNode(),o=0,s=i(),c=s.length;c>o;o++)r.createElement(s[o]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var i=a(e);return!y.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(e,i),e}var u,l,d="3.7.0",f=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:r,createDocumentFragment:o};e.html5=y,c(t)}(this,t),m._version=h,m._prefixes=w,m._domPrefixes=S,m._cssomPrefixes=C,m.mq=P,m.hasEvent=z,m.testProp=function(e){return s([e])},m.testAllProps=u,m.testStyles=L,m.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+A.join(" "):""),m}(this,this.document),function(){"use strict";function e(t,i){function a(e,t){return function(){return e.apply(t,arguments)}}var r;if(i=i||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=i.touchBoundary||10,this.layer=t,this.tapDelay=i.tapDelay||200,this.tapTimeout=i.tapTimeout||700,!e.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,c=0,u=o.length;u>c;c++)s[o[c]]=a(s[o[c]],s);n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var a=Node.prototype.removeEventListener;"click"===e?a.call(t,e,n.hijacked||n,i):a.call(t,e,n,i)},t.addEventListener=function(e,n,i){var a=Node.prototype.addEventListener;"click"===e?a.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):a.call(t,e,n,i)}),"function"==typeof t.onclick&&(r=t.onclick,t.addEventListener("click",function(e){r(e)},!1),t.onclick=null)}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,a=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=i&&/OS [6-7]_\d/.test(navigator.userAgent),o=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(i&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;i&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],i){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!a){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,o,s,c,u,l=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,o=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=e.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=l.tagName.toLowerCase(),"label"===s){if(t=this.findControl(l)){if(this.focus(l),n)return!1;l=t}}else if(this.needsFocus(l))return e.timeStamp-o>100||i&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,e),i&&"select"===s||(this.targetElement=null,e.preventDefault()),!1);return i&&!a&&(c=l.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(l)||(e.preventDefault(),this.sendClick(l,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,i,a,r;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(o&&(a=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),a[1]>=10&&a[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction?!0:!1)},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}(),function(e,t,n,i){"use strict";function a(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}var r=function(t){for(var n=t.length,i=e("head");n--;)0===i.has("."+t[n]).length&&i.append('<meta class="'+t[n]+'" />')};r(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var o=function(t,i){if("string"==typeof t){if(i){var a;if(i.jquery){if(a=i[0],!a)return i}else a=i;return e(a.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},s=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},c=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},u=function(t,n){var i=this,a=function(){var a=o(this),r=!a.data(i.attr_name(!0)+"-init");a.data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(a))),r&&i.events(this)};return o(this.scope).is("["+this.attr_name()+"]")?a.call(this.scope):o("["+this.attr_name()+"]",this.scope).each(a),"string"==typeof t?this[t].call(this,n):void 0},l=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};t.matchMedia||(t.matchMedia=function(){var e=t.styleMedia||t.media;if(!e){var i=n.createElement("style"),a=n.getElementsByTagName("script")[0],r=null;i.type="text/css",i.id="matchmediajs-test",a.parentNode.insertBefore(i,a),r="getComputedStyle"in t&&t.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=t:i.textContent=t,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e){function n(){i&&(o(n),c&&e.fx.tick())}for(var i,a=0,r=["webkit","moz"],o=t.requestAnimationFrame,s=t.cancelAnimationFrame,c="undefined"!=typeof e.fx;a<r.length&&!o;a++)o=t[r[a]+"RequestAnimationFrame"],s=s||t[r[a]+"CancelAnimationFrame"]||t[r[a]+"CancelRequestAnimationFrame"];o?(t.requestAnimationFrame=o,t.cancelAnimationFrame=s,c&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!i&&(i=!0,n())},e.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-a)),r=t.setTimeout(function(){e(n+i)},i);return a=n+i,r},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(e),t.Foundation={name:"Foundation",version:"5.5.2",media_queries:{small:o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"small-only":o(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"medium-only":o(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"large-only":o(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"xlarge-only":o(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(e,n,i,a,r){var s=[e,i,a,r],c=[];if(this.rtl=/rtl/i.test(o("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&c.push(this.init_lib(n,s));else for(var u in this.libs)c.push(this.init_lib(u,n));return o(t).load(function(){o(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=s,e.add_namespace=c,e.bindings=u,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===i?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===i||/false/i.test(t)?"":t},libs:{},utils:{S:o,throttle:function(e,t){var n=null;return function(){var i=this,a=arguments;null==n&&(n=setTimeout(function(){e.apply(i,a),n=null},t))}},debounce:function(e,t,n){var i,a;return function(){var r=this,o=arguments,s=function(){i=null,n||(a=e.apply(r,o))},c=n&&!i;return clearTimeout(i),i=setTimeout(s,t),c&&(a=e.apply(r,o)),a}},data_options:function(t,n){function i(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function a(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var r,o,s,c={},u=function(e){var t=Foundation.global.namespace;return e.data(t.length>0?t+"-"+n:n)},l=u(t);if("object"==typeof l)return l;for(s=(l||":").split(";"),r=s.length;r--;)o=s[r].split(":"),o=[o[0],o.slice(1).join(":")],/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),i(o[1])&&(o[1]=-1===o[1].indexOf(".")?parseInt(o[1],10):parseFloat(o[1])),2===o.length&&o[0].length>0&&(c[a(o[0])]=a(o[1]));return c},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=a(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(e,t){function n(e){for(var t=e.length,n=t-1;n>=0;n--)if(e.attr("height")===i)return!1;return!0}var a=this,r=e.length;(0===r||n(e))&&t(e),e.each(function(){l(a.S(this),function(){r-=1,0===r&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(e){return t.matchMedia(e).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.2",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n,i,a=!1,r=t.data("equalizer"),o=t.data(this.attr_name(!0)+"-init")||this.settings;if(n=t.find(o.act_on_hidden_el?r?"["+this.attr_name()+'-watch="'+r+'"]':"["+this.attr_name()+"-watch]":r?"["+this.attr_name()+'-watch="'+r+'"]:visible':"["+this.attr_name()+"-watch]:visible"),0!==n.length&&(o.before_height_change(),t.trigger("before-height-change.fndth.equalizer"),n.height("inherit"),o.equalize_on_stack!==!1||(i=n.first().offset().top,n.each(function(){return e(this).offset().top!==i?(a=!0,!1):void 0}),!a))){var s=n.map(function(){return e(this).outerHeight(!1)}).get();if(o.use_tallest){var c=Math.max.apply(null,s);n.css("height",c)}else{var u=Math.min.apply(null,s);n.css("height",u)}o.after_height_change(),t.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this),i=n.data("equalizer-mq"),a=!0;i&&(i="is_"+i.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(i)&&(a=!1)),t.image_loaded(t.S("img",this),function(){if(a||Foundation.utils[i]())t.equalize(n);else{var e=n.find("["+t.attr_name()+"-watch]:visible");e.css("height","auto")}})})}}}(jQuery,window,window.document),function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t),e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus()))},!1)}(),function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var t,n,i,a,r;if(t=document.getElementById("site-navigation"),t&&(n=t.getElementsByTagName("button")[0],"undefined"!=typeof n)){if(i=t.getElementsByTagName("ul")[0],"undefined"==typeof i)return void(n.style.display="none");i.setAttribute("aria-expanded","false"),-1===i.className.indexOf("nav-menu")&&(i.className+=" nav-menu"),n.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),n.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false")):(t.className+=" toggled",n.setAttribute("aria-expanded","true"),i.setAttribute("aria-expanded","true"))},a=i.getElementsByTagName("a"),r=i.getElementsByTagName("ul");for(var o=0,s=r.length;s>o;o++)r[o].parentNode.setAttribute("aria-haspopup","true");for(o=0,s=a.length;s>o;o++)a[o].addEventListener("focus",e,!0),a[o].addEventListener("blur",e,!0)}}(),function(e){"use strict"}(jQuery);