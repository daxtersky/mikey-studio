parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lA3S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./script-dom.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}var n=function(){var t=e.deviceHeight/10,r=[e.heroTitle,e.heroDesc,e.pic1,e.pic2,e.pic3,e.pic4,e.pic5,e.landscape2],n=[e.pic6,e.stackGrid,e.socials,e.form],i={rootMargin:"-".concat(t,"px 0px -").concat(t,"px 0px")},c=new IntersectionObserver(function(e){return e.forEach(function(e){e.intersectionRatio>0?o(r,e)?e.target.classList.add("swipe-top"):o(n,e)&&e.target.classList.add("swipe-bottom"):e.target.classList.remove("swipe-top","swipe-bottom")})},i);r.forEach(function(e){return c.observe(e)}),n.forEach(function(e){return c.observe(e)})};function o(e,t){return e.find(function(e){return e.className===t.target.className})&&e.find(function(e){return e.className===t.target.className}).className}var i={listenToObserver:n};exports.default=i;
},{"./script-dom.js":"foqj"}],"X63c":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.quotes=void 0;var e=n(require("./script-dom.js")),t=r(require("./script-intersection-observer.js"));function r(e){return e&&e.__esModule?e:{default:e}}function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function i(e){return d(e)||c(e)||s(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return p(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var u=[];exports.quotes=u;var l=function(){firebase.initializeApp({apiKey:"AIzaSyCB7kZlwhT3XJodzViuuRRP9ggDysOqSxY",authDomain:"fir-database-mikey.firebaseapp.com",databaseURL:"https://fir-database-mikey.firebaseio.com",projectId:"fir-database-mikey",storageBucket:"fir-database-mikey.appspot.com",messagingSenderId:"299569566671",appId:"1:299569566671:web:5b22d2ab28ec77479db8ba",measurementId:"G-LM0GHJJ6VX"}),firebase.analytics(),firebase.database().ref().on("value",function(t){var r=t.val();if(console.log("Firebase data loaded",r),r&&(f(),b(),r.hero&&r.hero.keyPoints&&r.hero.keyPoints.forEach(function(t){var r=document.createElement("li");e.heroList.appendChild(r),r.innerText=t}),e.heroDesc.innerText=r.hero.intro,e.heroTitle.innerText=r.hero.title,r.quotes&&(e.quotes=r.quotes,exports.quotes=u=r.quotes,e.getRandomQuote(r.quotes)),r.projects&&r.projects.forEach(function(t){var r=document.createElement("div");r.classList.add("section-project__project"),e.projectWrapper.appendChild(r);var a=document.createElement("img");a.classList.add("section-project__image"),0===t.id?(a.setAttribute("src","./project-mikeystudio-1920x1088.jpg"),a.setAttribute("alt","Mikey studio landing page")):1===t.id?(a.setAttribute("src","./project-wydawca-1920x1088.jpg"),a.setAttribute("alt","Wydawca.com.pl landing page")):2===t.id?(a.setAttribute("src","./project-trop-1920x1088.jpg"),a.setAttribute("alt","Trop landing page")):3===t.id&&(a.setAttribute("src","./project-ts-habit-app.png"),a.setAttribute("alt","Habits app landing page")),r.appendChild(a);var n=document.createElement("h3");n.classList.add("section-project__title"),n.innerText=t.title,r.appendChild(n);var i=document.createElement("h4");i.classList.add("section-project__header"),i.innerText=t.header,r.appendChild(i);var o=document.createElement("p");if(o.classList.add("section-project__description"),o.innerText=t.description,r.appendChild(o),t.hashtags){var s=document.createElement("div");s.classList.add("section-project__hashtags"),r.appendChild(s);for(var c=0;c<t.hashtags.length;c++){var d=document.createElement("span");d.classList.add("section-project__hashtag"),d.innerText="#".concat(t.hashtags[c]),s.appendChild(d),(c+1)%3==0&&s.appendChild(document.createElement("br"))}}var p=document.createElement("div");if(p.classList.add("section-project__buttons"),r.appendChild(p),t.websiteLink){var u=document.createElement("a");p.appendChild(u),u.classList.add("button"),u.setAttribute("target","_blank"),u.innerText="Website",u.setAttribute("href",t.websiteLink)}if(t.repoLink){var l=document.createElement("a");p.appendChild(l),l.classList.add("button"),l.setAttribute("target","_blank"),l.innerText="Repo",l.setAttribute("href",t.repoLink)}}),r.aboutList&&r.aboutList.forEach(function(t){var r=document.createElement("div"),a=document.createElement("p");r.classList.add("section-about__description","".concat(t.className)),a.innerText=t.description,r.appendChild(a),e.aboutWrapper.appendChild(r)}),r.techStack))for(var a=function(t){var a=e.techIcon[t],n=i(e.techIcon[t].classList);r.techStack.forEach(function(e){if(n.includes(e.className)){var t=document.createElement("span");t.classList.add("section-about__stack-technology");var r=document.createElement("p");r.classList.add("section-about__stack-description"),t.innerText=e.technology,r.innerText=e.description,a.parentNode.insertBefore(t,a.nextSibling),t.parentNode.insertBefore(r,t.nextSibling)}})},n=0;n<e.techIcon.length;n++)a(n)})};function f(){e.spinner.classList.add("spinner--off")}function b(){t.default.listenToObserver()}var h={fetchFirebaseApi:l};exports.default=h;
},{"./script-dom.js":"foqj","./script-intersection-observer.js":"lA3S"}],"foqj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRandomQuote=exports.form=exports.socials=exports.landscape2=exports.techIcon=exports.stackGrid=exports.pic6=exports.pic5=exports.pic4=exports.pic3=exports.pic2=exports.pic1=exports.aboutImages=exports.aboutWrapper=exports.projectWrapper=exports.isNavButtonOpen=exports.quote=exports.buttonQuote=exports.landscape=exports.heroDesc=exports.heroTitle=exports.heroList=exports.navigationItems=exports.navButton=exports.colorPicker=exports.spinner=exports.deviceWidth=exports.deviceHeight=void 0;var e=r(require("./script-firebase-api.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=n?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}var o=window.innerHeight>0?.01*window.innerHeight:.01*screen.height;exports.deviceHeight=o;var n=window.innerWidth>0?window.innerWidth:screen.width;exports.deviceWidth=n;var i=document.querySelector(".spinner");exports.spinner=i;var c=document.querySelector(".color-picker");exports.colorPicker=c;var s=document.querySelector(".button-menu");exports.navButton=s;var a=document.getElementsByClassName("navigation__item");exports.navigationItems=a;var u=document.querySelector(".hero__list");exports.heroList=u;var p=document.querySelector(".hero__title");exports.heroTitle=p;var l=document.querySelector(".hero__desc");exports.heroDesc=l;var m=document.querySelector(".section-landscape");exports.landscape=m;var d=document.querySelector(".button--quote");exports.buttonQuote=d;var v=document.querySelector(".section-quote__text");exports.quote=v;var x=!1;exports.isNavButtonOpen=x;var f=document.querySelector(".section-projects__wrapper");exports.projectWrapper=f;var y=document.querySelector(".section-about__about-grid");exports.aboutWrapper=y;var h=document.querySelectorAll(".section-about__images");exports.aboutImages=h;var _=document.querySelector(".pic-1");exports.pic1=_;var g=document.querySelector(".pic-2");exports.pic2=g;var q=document.querySelector(".pic-3");exports.pic3=q;var S=document.querySelector(".pic-4");exports.pic4=S;var b=document.querySelector(".pic-5");exports.pic5=b;var w=document.querySelector(".pic-6");exports.pic6=w;var k=document.querySelector(".section-about__stack-grid");exports.stackGrid=k;var L=document.getElementsByTagName("ion-icon");exports.techIcon=L;var O=document.querySelector(".landscape-2");exports.landscape2=O;var j=document.querySelector(".section-contact__social-wrapper");exports.socials=j;var T=document.querySelector(".form");exports.form=T;var E=document.querySelector(".form__email"),P=document.querySelector(".form__text-area");c.addEventListener("change",function(e){document.documentElement.setAttribute("data-theme",e.target.value),document.documentElement.classList.add("color-transition"),window.setTimeout(function(){document.documentElement.classList.remove("color-transition")},300)});var W=function(e,t){if(t)for(var r=0;r<e.length;r++)e[r].classList.add("navigation__item--movein"),e[r].classList.remove("navigation__item--hidden");else for(var o=0;o<e.length;o++)e[o].classList.add("navigation__item--hidden"),e[o].classList.remove("navigation__item--movein")},N=function(e){exports.isNavButtonOpen=x=!e,s.classList.toggle("button-menu--opened",x),W(a,x)};s.addEventListener("click",function(){return N(x)}),document.addEventListener("click",function(e){x&&("navigation__link"===e.target.className||"button-menu button-menu--opened"!==e.target.className&&"button-menu__burger"!==e.target.className)&&N(!0)}),document.documentElement.style.setProperty("--vh","".concat(o,"px")),d.addEventListener("click",function(){v.classList.add("fade-in-out"),window.setTimeout(function(){return z(e.quotes)},400),window.setTimeout(function(){return v.classList.remove("fade-in-out")},801)});var z=function(t){var r=t[Math.floor(Math.random()*t.length)];M(r),e.quotes.length>0&&B(r)};exports.getRandomQuote=z;var B=function(t){return e.quotes.splice(e.quotes.indexOf(t),1)},M=function(e){var t=document.querySelector(".section-quote__text"),r=document.querySelector(".section-quote__author"),o=document.querySelector(".section-quote__link");e.quote.length>400?t.style.fontSize=n<=767?"1rem":n<1279?"2rem":n<1439?"2.2rem":n<1919?"2.3rem":"3rem":e.quote.length>300?t.style.fontSize=n<=767?"1.1rem":n<1279?"2.2rem":n<1439?"2.6rem":n<1919?"2.6rem":"3.3rem":e.quote.length>200?t.style.fontSize=n<=767?"1.3rem":n<1279?"2.6rem":n<1439?"3.1rem":n<1919?"3.1rem":"3.6rem":e.quote.length>150?t.style.fontSize=n<=767?"1.6rem":n<1279?"3.1rem":n<1439?"3.4rem":n<1919?"3.4rem":"3.9rem":e.quote.length>100?t.style.fontSize=n<=767?"1.8rem":n<1279?"3.4rem":n<1439?"3.5rem":n<1919?"3.6rem":"4.2rem":t.style.fontSize=n<=767?"2.2rem":n<1279?"3.7rem":n<1439?"4rem":n<1919?"4.2rem":"4.7rem",t.innerText='"'.concat(e.quote,'"'),r.innerText=e.author||"",e.link?(o.innerText="link",o.setAttribute("href",e.link)):(o.innerText="",o.removeAttribute("href"))};T.addEventListener("submit",function(e){if(e.preventDefault(),E.validity.valid){var t="https://f9akte6bf8.execute-api.eu-west-1.amazonaws.com/default/mikeystudio_send_email?param1="+E.value+"&param2="+P.value,r={param1:E.value,param2:P.value};fetch(t,{body:JSON.stringify(r),method:"POST",dataType:"json",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(e){return alert("Hurray! Mail was sent successfully! =D"),e.json()}).catch(function(e){console.log("error",e)})}});
},{"./script-firebase-api.js":"X63c"}],"oKpI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e(require("./script-dom.js"));function t(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return t=function(){return r},r}function e(r){if(r&&r.__esModule)return r;if(null===r||"object"!=typeof r&&"function"!=typeof r)return{default:r};var e=t();if(e&&e.has(r))return e.get(r);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var a=o?Object.getOwnPropertyDescriptor(r,c):null;a&&(a.get||a.set)?Object.defineProperty(n,c,a):n[c]=r[c]}return n.default=r,e&&e.set(r,n),n}function n(r){return u(r)||a(r)||c(r)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(r,t){if(r){if("string"==typeof r)return l(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(r,t):void 0}}function a(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function u(r){if(Array.isArray(r))return l(r)}function l(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var i="c1462734c4e2f7d399a2724533d58445eecb3b969c50f37262cc96c7f7acedc0",s={LANDSCAPE_HORIZONTAL:9522596,ABOUT:9812689,ABOUT_VERTICAL:9833482},p=30,f=h(),d=8,g="https://api.unsplash.com/collections/".concat(s.LANDSCAPE_HORIZONTAL,"/photos/?page=").concat(f,"&per_page=").concat(p,"&client_id=").concat(i),y="https://api.unsplash.com/collections/".concat(s.ABOUT,"/photos/?page=").concat(f,"&per_page=").concat(p,"&client_id=").concat(i),m="https://api.unsplash.com/collections/".concat(s.ABOUT_VERTICAL,"/photos/?page=",1,"&per_page=").concat(p,"&client_id=").concat(i);function b(){var t=[g,y,m];Promise.all(t.map(function(r){return fetch(r).then(function(r){return r.json()})})).then(function(t){var e=t[0],n=t[1],o=t[2],c=A(p,d);r.landscape.style.backgroundImage="url(".concat(e[c[0]].urls.regular,")"),r.pic1.style.backgroundImage="url(".concat(n[c[1]].urls.small,")"),r.pic2.style.backgroundImage="url(".concat(e[c[2]].urls.regular,")"),r.pic3.style.backgroundImage="url(".concat(o[c[3]].urls.regular,")"),r.pic4.style.backgroundImage="url(".concat(e[c[4]].urls.regular,")"),r.pic5.style.backgroundImage="url(".concat(o[c[5]].urls.regular,")"),r.pic6.style.backgroundImage="url(".concat(e[c[6]].urls.regular,")"),r.landscape2.style.backgroundImage="url(".concat(o[c[7]].urls.regular,")")}).catch(function(r){console.log("error",r)})}function h(){return Math.floor(2*Math.random())+1}function A(r,t){for(var e=new Set;e.size<t;)e.add(Math.floor(Math.random()*r));return n(e)}var O={fetchUnsplashApi:b};exports.default=O;
},{"./script-dom.js":"foqj"}],"lXlF":[function(require,module,exports) {
"use strict";var e=i(require("./script-unsplash-api.js")),t=i(require("./script-firebase-api.js"));function i(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){t.default.fetchFirebaseApi(),e.default.fetchUnsplashApi()});
},{"./script-unsplash-api.js":"oKpI","./script-firebase-api.js":"X63c"}]},{},["lXlF"], null)