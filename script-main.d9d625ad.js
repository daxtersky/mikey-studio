parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lA3S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./script-dom.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}var n=function(){var t=e.deviceHeight/10,r=[e.heroTitle,e.heroDesc,e.pic1,e.pic2,e.pic3,e.pic4,e.pic5,e.landscape2],n=[e.pic6,e.stackGrid,e.socials,e.form],i={rootMargin:"-".concat(t,"px 0px -").concat(t,"px 0px")},c=new IntersectionObserver(function(e){return e.forEach(function(e){e.intersectionRatio>0?o(r,e)?e.target.classList.add("swipe-top"):o(n,e)&&e.target.classList.add("swipe-bottom"):e.target.classList.remove("swipe-top","swipe-bottom")})},i);r.forEach(function(e){return c.observe(e)}),n.forEach(function(e){return c.observe(e)})};function o(e,t){return e.find(function(e){return e.className===t.target.className})&&e.find(function(e){return e.className===t.target.className}).className}var i={listenToObserver:n};exports.default=i;
},{"./script-dom.js":"foqj"}],"X63c":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.quotes=void 0;var e=a(require("./script-dom.js")),t=r(require("./script-intersection-observer.js"));function r(e){return e&&e.__esModule?e:{default:e}}function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function i(e){return d(e)||c(e)||s(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return p(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=[];exports.quotes=u;var l=function(){firebase.initializeApp({apiKey:"AIzaSyCB7kZlwhT3XJodzViuuRRP9ggDysOqSxY",authDomain:"fir-database-mikey.firebaseapp.com",databaseURL:"https://fir-database-mikey.firebaseio.com",projectId:"fir-database-mikey",storageBucket:"fir-database-mikey.appspot.com",messagingSenderId:"299569566671",appId:"1:299569566671:web:5b22d2ab28ec77479db8ba",measurementId:"G-LM0GHJJ6VX"}),firebase.analytics(),firebase.database().ref().on("value",function(t){var r=t.val();if(r&&(f(),m(),r.hero&&r.hero.keyPoints&&r.hero.keyPoints.forEach(function(t){var r=document.createElement("li");e.heroList.appendChild(r),r.innerText=t}),e.heroDesc.innerText=r.hero.intro,e.heroTitle.innerText=r.hero.title,r.quotes&&(e.quotes=r.quotes,exports.quotes=u=r.quotes,e.getRandomQuote(r.quotes)),r.projects&&r.projects.forEach(function(t){var r=document.createElement("div");r.classList.add("section-project__project"),e.projectWrapper.appendChild(r);var n=document.createElement("img");n.classList.add("section-project__image"),0===t.id?n.setAttribute("src","./project-trop-1920x1088.jpg"):1===t.id?n.setAttribute("src","./project-wydawca-1920x1088.jpg"):2===t.id&&n.setAttribute("src","./project-mikeystudio-1920x1088.jpg"),r.appendChild(n);var a=document.createElement("div");a.classList.add("section-project__title"),a.innerText=t.title,r.appendChild(a);var i=document.createElement("div");i.classList.add("section-project__header"),i.innerText=t.header,r.appendChild(i);var o=document.createElement("div");if(o.classList.add("section-project__description"),o.innerText=t.description,r.appendChild(o),t.hashtags){var s=document.createElement("div");s.classList.add("section-project__hashtags"),r.appendChild(s);for(var c=0;c<t.hashtags.length;c++){var d=document.createElement("span");d.classList.add("section-project__hashtag"),d.innerText="#".concat(t.hashtags[c]),s.appendChild(d),(c+1)%3==0&&s.appendChild(document.createElement("br"))}}var p=document.createElement("div");if(p.classList.add("section-project__buttons"),r.appendChild(p),t.websiteLink){var u=document.createElement("a");p.appendChild(u),u.classList.add("button"),u.setAttribute("target","_blank"),u.innerText="Website",u.setAttribute("href",t.websiteLink)}if(t.repoLink){var l=document.createElement("a");p.appendChild(l),l.classList.add("button"),l.setAttribute("target","_blank"),l.innerText="Repo",l.setAttribute("href",t.repoLink)}}),r.aboutList&&r.aboutList.forEach(function(t){var r=document.createElement("div"),n=document.createElement("p");r.classList.add("section-about__description","".concat(t.className)),n.innerText=t.description,r.appendChild(n),e.aboutWrapper.appendChild(r)}),r.techStack))for(var n=function(t){var n=e.techIcon[t],a=i(e.techIcon[t].classList);console.log("svgClasses",a),r.techStack.forEach(function(e){if(a.includes(e.className)){var t=document.createElement("span");t.classList.add("section-about__stack-technology");var r=document.createElement("span");r.classList.add("section-about__stack-description"),t.innerText=e.technology,r.innerText=e.description,n.parentNode.insertBefore(t,n.nextSibling),t.parentNode.insertBefore(r,t.nextSibling)}})},a=0;a<e.techIcon.length;a++)n(a)})};function f(){e.spinner.classList.add("spinner--off")}function m(){t.default.listenToObserver()}var b={fetchFirebaseApi:l};exports.default=b;
},{"./script-dom.js":"foqj","./script-intersection-observer.js":"lA3S"}],"foqj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRandomQuote=exports.form=exports.socials=exports.landscape2=exports.techIcon=exports.stackGrid=exports.pic6=exports.pic5=exports.pic4=exports.pic3=exports.pic2=exports.pic1=exports.aboutImages=exports.aboutWrapper=exports.projectWrapper=exports.isNavButtonOpen=exports.quote=exports.buttonQuote=exports.landscape=exports.heroDesc=exports.heroTitle=exports.heroList=exports.navigationItems=exports.navButton=exports.colorPicker=exports.spinner=exports.deviceWidth=exports.deviceHeight=void 0;var e=o(require("./script-firebase-api.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=t();if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}var r=window.innerHeight>0?.01*window.innerHeight:.01*screen.height;exports.deviceHeight=r;var n=window.innerWidth>0?window.innerWidth:screen.width;exports.deviceWidth=n;var i=document.querySelector(".spinner");exports.spinner=i;var s=document.querySelector(".color-picker");exports.colorPicker=s;var c=document.querySelector(".button-menu");exports.navButton=c;var a=document.getElementsByClassName("navigation__item");exports.navigationItems=a;var u=document.querySelector(".hero__list");exports.heroList=u;var l=document.querySelector(".hero__title");exports.heroTitle=l;var p=document.querySelector(".hero__desc");exports.heroDesc=p;var m=document.querySelector(".section-landscape");exports.landscape=m;var d=document.querySelector(".button--quote");exports.buttonQuote=d;var f=document.querySelector(".section-quote__text");exports.quote=f;var v=!1;exports.isNavButtonOpen=v;var y=document.querySelector(".section-projects__wrapper");exports.projectWrapper=y;var h=document.querySelector(".section-about__about-grid");exports.aboutWrapper=h;var g=document.querySelectorAll(".section-about__images");exports.aboutImages=g;var x=document.querySelector(".pic-1");exports.pic1=x;var q=document.querySelector(".pic-2");exports.pic2=q;var S=document.querySelector(".pic-3");exports.pic3=S;var _=document.querySelector(".pic-4");exports.pic4=_;var b=document.querySelector(".pic-5");exports.pic5=b;var z=document.querySelector(".pic-6");exports.pic6=z;var w=document.querySelector(".section-about__stack-grid");exports.stackGrid=w;var k=document.getElementsByTagName("ion-icon");exports.techIcon=k;var L=document.querySelector(".landscape2");exports.landscape2=L;var E=document.querySelector(".section-contact__social-wrapper");exports.socials=E;var O=document.getElementById("form");exports.form=O;var j=document.getElementById("inputEmail"),T=document.getElementById("inputMessage");s.addEventListener("change",function(e){document.documentElement.setAttribute("data-theme",e.target.value),document.documentElement.classList.add("color-transition"),window.setTimeout(function(){document.documentElement.classList.remove("color-transition")},300)});var B=function(e,t){if(t)for(var o=0;o<e.length;o++)e[o].classList.add("navigation__item--movein"),e[o].classList.remove("navigation__item--hidden");else for(var r=0;r<e.length;r++)e[r].classList.add("navigation__item--hidden"),e[r].classList.remove("navigation__item--movein")},P=function(e){exports.isNavButtonOpen=v=!e,c.classList.toggle("button-menu--opened",v),B(a,v)};c.addEventListener("click",function(){return P(v)}),document.addEventListener("click",function(e){v&&("navigation__link"===e.target.className||"button-menu button-menu--opened"!==e.target.className&&"button-menu__burger"!==e.target.className)&&P(!0)}),document.documentElement.style.setProperty("--vh","".concat(r,"px")),d.addEventListener("click",function(){f.classList.add("fade-in-out"),window.setTimeout(function(){return W(e.quotes)},400),window.setTimeout(function(){return f.classList.remove("fade-in-out")},801)});var W=function(e){var t=e[Math.floor(Math.random()*e.length)];I(t)};exports.getRandomQuote=W;var I=function(e){var t=document.querySelector(".section-quote__text"),o=document.querySelector(".section-quote__author"),r=document.querySelector(".section-quote__link");n<=767?e.quote.length>400?t.style.fontSize="1rem":e.quote.length>300?t.style.fontSize="1.1rem":e.quote.length>200?t.style.fontSize="1.3rem":e.quote.length>150?t.style.fontSize="1.6rem":e.quote.length>100?t.style.fontSize="1.9rem":t.style.fontSize="2.1rem":n<1279?e.quote.length>400?t.style.fontSize="2rem":e.quote.length>300?t.style.fontSize="2.2rem":e.quote.length>200?t.style.fontSize="2.6rem":e.quote.length>150?t.style.fontSize="3.1rem":e.quote.length>100?t.style.fontSize="3.4rem":t.style.fontSize="3.7rem":n<1439?e.quote.length>400?t.style.fontSize="2.2rem":e.quote.length>300?t.style.fontSize="2.6rem":e.quote.length>200?t.style.fontSize="3.1rem":e.quote.length>150?t.style.fontSize="3.4rem":e.quote.length>100?t.style.fontSize="3.7rem":t.style.fontSize="4rem":n<1919?e.quote.length>400?t.style.fontSize="2.3rem":e.quote.length>300?t.style.fontSize="2.6rem":e.quote.length>200?t.style.fontSize="3.1rem":e.quote.length>150?t.style.fontSize="3.4rem":e.quote.length>100?t.style.fontSize="3.6rem":t.style.fontSize="3.9rem":e.quote.length>400?t.style.fontSize="3rem":e.quote.length>300?t.style.fontSize="3.3rem":e.quote.length>200?t.style.fontSize="3.6rem":e.quote.length>150?t.style.fontSize="3.9rem":e.quote.length>100?t.style.fontSize="4.2rem":t.style.fontSize="4.7rem",t.innerText='"'.concat(e.quote,'"'),o.innerText=e.author||"",e.link?(r.innerText="link",r.setAttribute("href",e.link)):(r.innerText="",r.removeAttribute("href"))};O.addEventListener("submit",function(e){if(e.preventDefault(),j.validity.valid){var t="https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email?param1="+j.value+"&param2="+T.value,o={param1:j.value,param2:T.value};fetch(t,{body:JSON.stringify(o),method:"POST",dataType:"json",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(e){return alert("Hurray! Mail was sent successfully! =D"),e.json()}).then(function(e){}).catch(function(e){})}});
},{"./script-firebase-api.js":"X63c"}],"oKpI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e(require("./script-dom.js"));function t(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return t=function(){return r},r}function e(r){if(r&&r.__esModule)return r;if(null===r||"object"!=typeof r&&"function"!=typeof r)return{default:r};var e=t();if(e&&e.has(r))return e.get(r);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var a=o?Object.getOwnPropertyDescriptor(r,c):null;a&&(a.get||a.set)?Object.defineProperty(n,c,a):n[c]=r[c]}return n.default=r,e&&e.set(r,n),n}function n(r){return u(r)||a(r)||c(r)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(r,t){if(r){if("string"==typeof r)return l(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(r,t):void 0}}function a(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function u(r){if(Array.isArray(r))return l(r)}function l(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var i="c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0",s={LANDSCAPE_HORIZONTAL:9522596,ABOUT:9812689,ABOUT_VERTICAL:9833482},p=30,f=h(),d=8,g="https://api.unsplash.com/collections/".concat(s.LANDSCAPE_HORIZONTAL,"/photos/?page=").concat(f,"&per_page=").concat(p,"&client_id=").concat(i),y="https://api.unsplash.com/collections/".concat(s.ABOUT,"/photos/?page=").concat(f,"&per_page=").concat(p,"&client_id=").concat(i),m="https://api.unsplash.com/collections/".concat(s.ABOUT_VERTICAL,"/photos/?page=",1,"&per_page=").concat(p,"&client_id=").concat(i);function b(){var t=[g,y,m];Promise.all(t.map(function(r){return fetch(r).then(function(r){return r.json()})})).then(function(t){var e=t[0],n=t[1],o=t[2],c=A(p,d);r.landscape.style.backgroundImage="url(".concat(e[c[0]].urls.regular,")"),r.pic1.style.backgroundImage="url(".concat(n[c[1]].urls.small,")"),r.pic2.style.backgroundImage="url(".concat(e[c[2]].urls.regular,")"),r.pic3.style.backgroundImage="url(".concat(o[c[3]].urls.regular,")"),r.pic4.style.backgroundImage="url(".concat(e[c[4]].urls.regular,")"),r.pic5.style.backgroundImage="url(".concat(o[c[5]].urls.regular,")"),r.pic6.style.backgroundImage="url(".concat(e[c[6]].urls.regular,")"),r.landscape2.style.backgroundImage="url(".concat(o[c[7]].urls.regular,")")}).catch(function(r){console.log("error",r)})}function h(){return Math.floor(2*Math.random())+1}function A(r,t){for(var e=new Set;e.size<t;)e.add(Math.floor(Math.random()*r));return n(e)}var O={fetchUnsplashApi:b};exports.default=O;
},{"./script-dom.js":"foqj"}],"lXlF":[function(require,module,exports) {
"use strict";var e=i(require("./script-unsplash-api.js")),t=i(require("./script-firebase-api.js"));function i(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){t.default.fetchFirebaseApi(),e.default.fetchUnsplashApi()});
},{"./script-unsplash-api.js":"oKpI","./script-firebase-api.js":"X63c"}]},{},["lXlF"], null)