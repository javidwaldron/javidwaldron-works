(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f}));var r=n(3),o=(n(36),new(n(201).a)({url:void 0,key:void 0,version:"v3.0"}));function c(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({include:"tags,authors",limit:"all"}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({include:"tags,authors",slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},205:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7ca3ae9a",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";n(205)},220:function(t,e,n){var r=n(10)(!1);r.push([t.i,'.tag-container{position:relative}@media screen and (max-width:786px){.tag-container>h2{text-align:center}}.tag-container .block{position:relative;display:flex;width:100%;height:300px;background-color:var(--background-offset);background-size:cover;background-position:50%;background-repeat:none;transition:all 335ms ease-in-out;border-radius:8px;overflow:hidden}.tag-container .block:before{pointer-events:none;content:"";position:absolute;left:0;bottom:0;right:0;height:50%;background-image:linear-gradient(0deg,var(--background),transparent);transition:all 335ms ease-in-out}.tag-container .block:hover:before{height:100%}.tag-container .block:hover a{text-decoration:none;color:currentColor}.tag-container .block:hover .block-meta .generic-icon:before{transform:translate(0);opacity:1}.tag-container .block-anchor{position:relative;display:flex;width:100%;height:100%;align-items:flex-end;color:var(--foreground);padding:1rem}.tag-container .block-meta{display:flex;justify-content:space-between;align-items:center;width:100%}.tag-container .block-meta-title{display:flex;align-items:center;grid-gap:.5rem;gap:.5rem}.tag-container .block-meta-title *{margin:0}.tag-container .block-meta .generic-icon:before{pointer-events:none;content:"";position:absolute;bottom:0;right:0;width:25%;aspect-ratio:1/1;transform:translate(100%,100%);opacity:0;background-image:radial-gradient(circle at bottom right,var(--accent),transparent 70%);transition:all 775ms ease-in-out}.tag-container .block-meta .generic-icon svg{position:relative}.tag-container .block-cont{list-style-type:none;display:grid;grid-template-columns:100%;margin:0;padding:0}',""]),t.exports=r},228:function(t,e,n){"use strict";n.r(e);n(12);var r=n(3),o=(n(36),n(32),n(38),n(17),n(26),n(39),n(40),n(41),n(200));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,Object(o.a)();case 3:return r=e.sent,l=n.slug,e.next=7,r.filter((function(t){var e=t.tags;if(0===e.length)return!1;console.log("array is not empty!");var n,r=c(e);try{for(r.s();!(n=r.n()).done;){if(n.value.slug==l)return!0}}catch(t){r.e(t)}finally{r.f()}return!1}));case 7:return f=e.sent,e.abrupt("return",{posts:f});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"JW | Tagged | ".concat(this.tag)}},data:function(){return{tag:this.$route.params.slug}},mounted:function(){console.log(this.filteredWork)},components:{icons:n(51).a}},d=(n(219),n(7)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container tag-container"},[e("h2",[t._v("Work tagged as "),e("span",{staticStyle:{color:"var(--accent)"}},[t._v(t._s(t.tag))])]),t._v(" "),t.posts.length>0?e("ul",{staticClass:"block-cont"},t._l(t.posts,(function(n,r){return e("li",{staticClass:"block",style:"background-image: url("+n.feature_image+")"},[e("nuxt-link",{key:n.name+r,staticClass:"block-anchor",attrs:{to:"../work/"+n.slug}},[e("div",{staticClass:"block-meta"},[e("div",{staticClass:"block-meta-title"},[e("h5",[t._v(t._s(n.title))])]),t._v(" "),e("icons",{attrs:{name:"arrow-right"}})],1)])],1)})),0):e("p",[t._v("There don't seem to be any posts tagged as "+t._s(t.tag))])])}),[],!1,null,null,null);e.default=component.exports}}]);