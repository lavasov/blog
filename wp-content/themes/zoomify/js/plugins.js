/* Modernizr v2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
window.Modernizr=function(e,t,n){function P(e){u.cssText=e}function j(e,t){return P(m.join(e+";")+(t||""))}function $(e,t){return typeof e===t}function D(e,t){return!!~(""+e).indexOf(t)}function F(e,t){for(var r in e){var o=e[r];if(!D(o,"-")&&u[o]!==n)return"pfx"==t?o:!0}return!1}function z(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:$(i,"function")?i.bind(r||t):i}return!1}function A(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+h.join(r+" ")+r).split(" ");return $(t,"string")||$(t,"undefined")?F(o,t):(o=(e+" "+g.join(r+" ")+r).split(" "),z(o,t,n))}function L(){o.input=function(n){for(var r=0,o=n.length;o>r;r++)E[n[r]]=!!(n[r]in l);return E.list&&(E.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(e){for(var o,i,c,r=0,s=e.length;s>r;r++)l.setAttribute("type",i=e[r]),o="text"!==l.type,o&&(l.value=f,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&l.style.WebkitAppearance!==n?(a.appendChild(l),c=t.defaultView,o=c.getComputedStyle&&"textfield"!==c.getComputedStyle(l,null).WebkitAppearance&&0!==l.offsetHeight,a.removeChild(l)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?l.checkValidity&&l.checkValidity()===!1:l.value!=f)),b[e[r]]=!!o;return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var S,M,r="2.7.1",o={},i=!0,a=t.documentElement,c="modernizr",s=t.createElement(c),u=s.style,l=t.createElement("input"),f=":)",d={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),p="Webkit Moz O ms",h=p.split(" "),g=p.toLowerCase().split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},b={},E={},w=[],x=w.slice,C=function(e,n,r,o){var i,s,u,l,f=t.createElement("div"),d=t.body,m=d||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=o?o[r]:c+(r+1),f.appendChild(u);return i=["&#173;",'<style id="s',c,'">',e,"</style>"].join(""),f.id=c,(d?f:m).innerHTML+=i,m.appendChild(f),d||(m.style.background="",m.style.overflow="hidden",l=a.style.overflow,a.style.overflow="hidden",a.appendChild(m)),s=n(f,e),d?f.parentNode.removeChild(f):(m.parentNode.removeChild(m),a.style.overflow=l),!!s},k=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return C("@media "+t+" { #"+c+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},T=function(){function r(r,o){o=o||t.createElement(e[r]||"div"),r="on"+r;var i=r in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(r,""),i=$(o[r],"function"),$(o[r],"undefined")||(o[r]=n),o.removeAttribute(r))),o=null,i}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),N={}.hasOwnProperty;M=$(N,"undefined")||$(N.call,"undefined")?function(e,t){return t in e&&$(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(x.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(x.call(arguments)))};return r}),y.flexbox=function(){return A("flexWrap")},y.flexboxlegacy=function(){return A("boxDirection")},y.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},y.canvastext=function(){return!(!o.canvas||!$(t.createElement("canvas").getContext("2d").fillText,"function"))},y.webgl=function(){return!!e.WebGLRenderingContext},y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:C(["@media (",m.join("touch-enabled),("),c,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},y.geolocation=function(){return"geolocation"in navigator},y.postmessage=function(){return!!e.postMessage},y.websqldatabase=function(){return!!e.openDatabase},y.indexedDB=function(){return!!A("indexedDB",e)},y.hashchange=function(){return T("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},y.history=function(){return!(!e.history||!history.pushState)},y.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},y.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},y.rgba=function(){return P("background-color:rgba(150,255,150,.5)"),D(u.backgroundColor,"rgba")},y.hsla=function(){return P("background-color:hsla(120,40%,100%,.5)"),D(u.backgroundColor,"rgba")||D(u.backgroundColor,"hsla")},y.multiplebgs=function(){return P("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(u.background)},y.backgroundsize=function(){return A("backgroundSize")},y.borderimage=function(){return A("borderImage")},y.borderradius=function(){return A("borderRadius")},y.boxshadow=function(){return A("boxShadow")},y.textshadow=function(){return""===t.createElement("div").style.textShadow},y.opacity=function(){return j("opacity:.55"),/^0.55$/.test(u.opacity)},y.cssanimations=function(){return A("animationName")},y.csscolumns=function(){return A("columnCount")},y.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return P((e+"-webkit- ".split(" ").join(t+e)+m.join(n+e)).slice(0,-e.length)),D(u.backgroundImage,"gradient")},y.cssreflections=function(){return A("boxReflect")},y.csstransforms=function(){return!!A("transform")},y.csstransforms3d=function(){var e=!!A("perspective");return e&&"webkitPerspective"in a.style&&C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},y.csstransitions=function(){return A("transition")},y.fontface=function(){var e;return C('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},y.generatedcontent=function(){var e;return C(["#",c,"{font:0/0 a}#",c,':after{content:"',f,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},y.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},y.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},y.localstorage=function(){try{return localStorage.setItem(c,c),localStorage.removeItem(c),!0}catch(e){return!1}},y.sessionstorage=function(){try{return sessionStorage.setItem(c,c),sessionStorage.removeItem(c),!0}catch(e){return!1}},y.webworkers=function(){return!!e.Worker},y.applicationcache=function(){return!!e.applicationCache},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==v.svg},y.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(d.call(t.createElementNS(v.svg,"animate")))},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(d.call(t.createElementNS(v.svg,"clipPath")))};for(var H in y)M(y,H)&&(S=H.toLowerCase(),o[S]=y[H](),w.push((o[S]?"":"no-")+S));return o.input||L(),o.addTest=function(e,t){if("object"==typeof e)for(var r in e)M(e,r)&&o.addTest(r,e[r]);else{if(e=e.toLowerCase(),o[e]!==n)return o;t="function"==typeof t?t():t,"undefined"!=typeof i&&i&&(a.className+=" "+(t?"":"no-")+e),o[e]=t}return o},P(""),s=l=null,function(e,t){function f(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function d(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function m(e){var t=u[e[c]];return t||(t={},s++,e[c]=s,u[s]=t),t}function p(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=m(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():i.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||o.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function h(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||m(e);for(var r=n.frag.cloneNode(),o=0,i=d(),a=i.length;a>o;o++)r.createElement(i[o]);return r}function g(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?p(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function v(e){e||(e=t);var n=m(e);return!y.shivCSS||a||n.hasCSS||(n.hasCSS=!!f(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||g(e,n),e}var a,l,n="3.7.0",r=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,c="_html5shiv",s=0,u={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){a=!0,l=!0}}();var y={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:r.shivCSS!==!1,supportsUnknownElements:l,shivMethods:r.shivMethods!==!1,type:"default",shivDocument:v,createElement:p,createDocumentFragment:h};e.html5=y,v(t)}(this,t),o._version=r,o._prefixes=m,o._domPrefixes=g,o._cssomPrefixes=h,o.mq=k,o.hasEvent=T,o.testProp=function(e){return F([e])},o.testAllProps=A,o.testStyles=C,o.prefixed=function(e,t,n){return t?A(e,t,n):A(e,"pfx")},a.className=a.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(i?" js "+w.join(" "):""),o}(this,this.document);


/* FitVids 1.0.3 */
(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],s="­<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";r.className="fit-vids-style";r.id="fit-vids-style";r.style.display="none";r.innerHTML=s;i.parentNode.insertBefore(r,i)}if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=e(this).find(t.join(","));r=r.not("object object");r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto)


