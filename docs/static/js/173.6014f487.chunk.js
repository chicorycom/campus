(self.webpackChunkchicorycom=self.webpackChunkchicorycom||[]).push([[173],{173:function(e,i,r){"use strict";var n,o=r(2791),t=(n=o)&&"object"===typeof n&&"default"in n?n.default:n,a=r(1338),s=new a,u=s.getBrowser(),b=s.getCPU(),c=s.getDevice(),l=s.getEngine(),w=s.getOS(),d=s.getUA(),f=function(e){return s.setUA(e)},m=function(e){if(e){var i=new a(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}}console.error("No userAgent string was provided")},p=Object.freeze({ClientUAInstance:s,browser:u,cpu:b,device:c,engine:l,os:w,ua:d,setUa:f,parseUserAgent:m});function g(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function v(e){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function x(){return x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function O(e,i){return O=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},O(e,i)}function S(e,i){if(null==e)return{};var r,n,o=function(e,i){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],i.indexOf(r)>=0||(o[r]=e[r]);return o}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,t=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(t.push(n.value),!i||t.length!==i);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return t}(e,i)||function(e,i){if(!e)return;if("string"===typeof e)return j(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,i){(null==i||i>e.length)&&(i=e.length);for(var r=0,n=new Array(i);r<i;r++)n[r]=e[r];return n}var _="mobile",C="tablet",E="smarttv",I="console",T="wearable",M="embedded",U=void 0,N={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},q={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},z={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},B=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},V=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},W=function(e){var i=V();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},D=function(e,i,r,n){return function(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?g(Object(r),!0).forEach((function(i){y(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}({},e,{vendor:B(i.vendor),model:B(i.model),os:B(r.name),osVersion:B(r.version),ua:B(n)})};var R=function(e){return e.type===_},F=function(e){return e.type===C},L=function(e){var i=e.type;return i===_||i===C},$=function(e){return e.type===E},G=function(e){return e.type===U},Y=function(e){return e.type===T},Z=function(e){return e.type===I},H=function(e){return e.type===M},X=function(e){var i=e.vendor;return B(i)},K=function(e){var i=e.model;return B(i)},Q=function(e){var i=e.type;return B(i,"browser")},J=function(e){return e.name===q.Android},ee=function(e){return e.name===q.Windows},ie=function(e){return e.name===q.MAC_OS},re=function(e){return e.name===q.WindowsPhone},ne=function(e){return e.name===q.IOS},oe=function(e){var i=e.version;return B(i)},te=function(e){var i=e.name;return B(i)},ae=function(e){return e.name===N.Chrome},se=function(e){return e.name===N.Firefox},ue=function(e){return e.name===N.Chromium},be=function(e){return e.name===N.Edge},ce=function(e){return e.name===N.Yandex},le=function(e){var i=e.name;return i===N.Safari||i===N.MobileSafari},we=function(e){return e.name===N.MobileSafari},de=function(e){return e.name===N.Opera},fe=function(e){var i=e.name;return i===N.InternetExplorer||i===N.Ie},me=function(e){return e.name===N.MIUI},pe=function(e){return e.name===N.SamsungBrowser},ge=function(e){var i=e.version;return B(i)},ve=function(e){var i=e.major;return B(i)},he=function(e){var i=e.name;return B(i)},ye=function(e){var i=e.name;return B(i)},xe=function(e){var i=e.version;return B(i)},ke=function(){var e=V(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)},Oe=function(e){return"string"===typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=V();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},Ae=function(){return W("iPad")},Pe=function(){return W("iPhone")},je=function(){return W("iPod")},_e=function(e){return B(e)};function Ce(e){var i=e||p,r=i.device,n=i.browser,o=i.os,t=i.engine,a=i.ua;return{isSmartTV:$(r),isConsole:Z(r),isWearable:Y(r),isEmbedded:H(r),isMobileSafari:we(n)||Ae(),isChromium:ue(n),isMobile:L(r)||Ae(),isMobileOnly:R(r),isTablet:F(r)||Ae(),isBrowser:G(r),isDesktop:G(r),isAndroid:J(o),isWinPhone:re(o),isIOS:ne(o)||Ae(),isChrome:ae(n),isFirefox:se(n),isSafari:le(n),isOpera:de(n),isIE:fe(n),osVersion:oe(o),osName:te(o),fullBrowserVersion:ge(n),browserVersion:ve(n),browserName:he(n),mobileVendor:X(r),mobileModel:K(r),engineName:ye(t),engineVersion:xe(t),getUA:_e(a),isEdge:be(n)||Oe(a),isYandex:ce(n),deviceType:Q(r),isIOS13:Se(),isIPad13:Ae(),isIPhone13:Pe(),isIPod13:je(),isElectron:ke(),isEdgeChromium:Oe(a),isLegacyEdge:be(n)&&!Oe(a),isWindows:ee(o),isMacOs:ie(o),isMIUI:me(n),isSamsungBrowser:pe(n)}}var Ee=$(c),Ie=Z(c),Te=Y(c),Me=H(c),Ue=we(u)||Ae(),Ne=ue(u),qe=L(c)||Ae(),ze=R(c),Be=F(c)||Ae(),Ve=G(c),We=G(c),De=J(w),Re=re(w),Fe=ne(w)||Ae(),Le=ae(u),$e=se(u),Ge=le(u),Ye=de(u),Ze=fe(u),He=oe(w),Xe=te(w),Ke=ge(u),Qe=ve(u),Je=he(u),ei=X(c),ii=K(c),ri=ye(l),ni=xe(l),oi=_e(d),ti=be(u)||Oe(d),ai=ce(u),si=Q(c),ui=Se(),bi=Ae(),ci=Pe(),li=je(),wi=ke(),di=Oe(d),fi=be(u)&&!Oe(d),mi=ee(w),pi=ie(w),gi=me(u),vi=pe(u);function hi(e){var i=e||window.navigator.userAgent;return m(i)}i.tq=qe},1338:function(e,i,r){var n;!function(o,t){"use strict";var a="function",s="undefined",u="object",b="string",c="model",l="name",w="type",d="vendor",f="version",m="architecture",p="console",g="mobile",v="tablet",h="smarttv",y="wearable",x="embedded",k="Amazon",O="Apple",S="ASUS",A="BlackBerry",P="Firefox",j="Google",_="Huawei",C="LG",E="Microsoft",I="Motorola",T="Opera",M="Samsung",U="Sony",N="Xiaomi",q="Zebra",z="Facebook",B=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},V=function(e,i){return typeof e===b&&-1!==W(i).indexOf(W(e))},W=function(e){return e.toLowerCase()},D=function(e,i){if(typeof e===b)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===s?e:e.substring(0,255)},R=function(e,i){for(var r,n,o,s,b,c,l=0;l<i.length&&!b;){var w=i[l],d=i[l+1];for(r=n=0;r<w.length&&!b;)if(b=w[r++].exec(e))for(o=0;o<d.length;o++)c=b[++n],typeof(s=d[o])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):t:this[s[0]]=c?s[1].call(this,c,s[2]):t:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):t):this[s]=c||t;l+=2}},F=function(e,i){for(var r in i)if(typeof i[r]===u&&i[r].length>0){for(var n=0;n<i[r].length;n++)if(V(i[r][n],e))return"?"===r?t:r}else if(V(i[r],e))return"?"===r?t:r;return e},L={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,f],[/opios[\/ ]+([\w\.]+)/i],[f,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[f,[l,T]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[l,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[f,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[f,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],f],[/\bfocus\/([\w\.]+)/i],[f,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[f,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[f,[l,P]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],f],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,z],f],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,f],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[f,[l,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[f,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[f,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[l,f]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,W]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[d,M],[w,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[d,M],[w,g]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[d,O],[w,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[d,O],[w,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[d,_],[w,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[d,_],[w,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[d,N],[w,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[d,N],[w,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[d,"OPPO"],[w,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[d,"Vivo"],[w,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[d,"Realme"],[w,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[d,I],[w,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[d,I],[w,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[d,C],[w,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[d,C],[w,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[d,"Lenovo"],[w,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[d,"Nokia"],[w,g]],[/(pixel c)\b/i],[c,[d,j],[w,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[d,j],[w,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[d,U],[w,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[d,U],[w,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[d,"OnePlus"],[w,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[d,k],[w,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[d,k],[w,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,d,[w,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[d,A],[w,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[d,S],[w,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[d,S],[w,g]],[/(nexus 9)/i],[c,[d,"HTC"],[w,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[d,[c,/_/g," "],[w,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[d,"Acer"],[w,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[d,"Meizu"],[w,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[d,"Sharp"],[w,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[d,c,[w,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[d,c,[w,v]],[/(surface duo)/i],[c,[d,E],[w,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[d,"Fairphone"],[w,g]],[/(u304aa)/i],[c,[d,"AT&T"],[w,g]],[/\bsie-(\w*)/i],[c,[d,"Siemens"],[w,g]],[/\b(rct\w+) b/i],[c,[d,"RCA"],[w,v]],[/\b(venue[\d ]{2,7}) b/i],[c,[d,"Dell"],[w,v]],[/\b(q(?:mv|ta)\w+) b/i],[c,[d,"Verizon"],[w,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[d,"Barnes & Noble"],[w,v]],[/\b(tm\d{3}\w+) b/i],[c,[d,"NuVision"],[w,v]],[/\b(k88) b/i],[c,[d,"ZTE"],[w,v]],[/\b(nx\d{3}j) b/i],[c,[d,"ZTE"],[w,g]],[/\b(gen\d{3}) b.+49h/i],[c,[d,"Swiss"],[w,g]],[/\b(zur\d{3}) b/i],[c,[d,"Swiss"],[w,v]],[/\b((zeki)?tb.*\b) b/i],[c,[d,"Zeki"],[w,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[d,"Dragon Touch"],c,[w,v]],[/\b(ns-?\w{0,9}) b/i],[c,[d,"Insignia"],[w,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[d,"NextBook"],[w,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[d,"Voice"],c,[w,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[d,"LvTel"],c,[w,g]],[/\b(ph-1) /i],[c,[d,"Essential"],[w,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[d,"Envizen"],[w,v]],[/\b(trio[-\w\. ]+) b/i],[c,[d,"MachSpeed"],[w,v]],[/\btu_(1491) b/i],[c,[d,"Rotor"],[w,v]],[/(shield[\w ]+) b/i],[c,[d,"Nvidia"],[w,v]],[/(sprint) (\w+)/i],[d,c,[w,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[d,E],[w,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[d,q],[w,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[d,q],[w,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[d,c,[w,p]],[/droid.+; (shield) bui/i],[c,[d,"Nvidia"],[w,p]],[/(playstation [345portablevi]+)/i],[c,[d,U],[w,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[d,E],[w,p]],[/smart-tv.+(samsung)/i],[d,[w,h]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[d,M],[w,h]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[d,C],[w,h]],[/(apple) ?tv/i],[d,[c,"Apple TV"],[w,h]],[/crkey/i],[[c,"Chromecast"],[d,j],[w,h]],[/droid.+aft(\w)( bui|\))/i],[c,[d,k],[w,h]],[/\(dtv[\);].+(aquos)/i],[c,[d,"Sharp"],[w,h]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[d,D],[c,D],[w,h]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,h]],[/((pebble))app/i],[d,c,[w,y]],[/droid.+; (glass) \d/i],[c,[d,j],[w,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[d,q],[w,y]],[/(quest( 2)?)/i],[c,[d,z],[w,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[d,[w,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[w,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[w,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,v]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[w,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[d,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[f,F,L]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[f,F,L]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[f,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,f],[/\(bb(10);/i],[f,[l,A]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[f,[l,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[l,"Chromium OS"],f],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,f],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,f]]},G=function e(i,r){if(typeof i===u&&(r=i,i=t),!(this instanceof e))return new e(i,r).getResult();var n=i||(typeof o!==s&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),a=r?function(e,i){var r={};for(var n in e)i[n]&&i[n].length%2===0?r[n]=i[n].concat(e[n]):r[n]=e[n];return r}($,r):$;return this.getBrowser=function(){var e,i={};return i.name=t,i.version=t,R.call(i,n,a.browser),i.major=typeof(e=i.version)===b?e.replace(/[^\d\.]/g,"").split(".")[0]:t,i},this.getCPU=function(){var e={};return e.architecture=t,R.call(e,n,a.cpu),e},this.getDevice=function(){var e={};return e.vendor=t,e.model=t,e.type=t,R.call(e,n,a.device),e},this.getEngine=function(){var e={};return e.name=t,e.version=t,R.call(e,n,a.engine),e},this.getOS=function(){var e={};return e.name=t,e.version=t,R.call(e,n,a.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===b&&e.length>255?D(e,255):e,this},this.setUA(n),this};G.VERSION="1.0.2",G.BROWSER=B([l,f,"major"]),G.CPU=B([m]),G.DEVICE=B([c,d,w,p,g,h,v,y,x]),G.ENGINE=G.OS=B([l,f]),typeof i!==s?(e.exports&&(i=e.exports=G),i.UAParser=G):r.amdO?(n=function(){return G}.call(i,r,i,e))===t||(e.exports=n):typeof o!==s&&(o.UAParser=G);var Y=typeof o!==s&&(o.jQuery||o.Zepto);if(Y&&!Y.ua){var Z=new G;Y.ua=Z.getResult(),Y.ua.get=function(){return Z.getUA()},Y.ua.set=function(e){Z.setUA(e);var i=Z.getResult();for(var r in i)Y.ua[r]=i[r]}}}("object"===typeof window?window:this)}}]);
//# sourceMappingURL=173.6014f487.chunk.js.map