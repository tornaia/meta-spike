(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,6,7,8,9],{268:function(t,e,n){n(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},269:function(t,e,n){n(2)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:Math.pow(2,-52)})},270:function(t,e,n){"use strict";var r=n(2),o=n(77).find,c=n(132),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},271:function(t,e,n){"use strict";n.r(e);n(44),n(43),n(19);var r=n(1).a.extend({name:"Decks",props:{config:{type:Object,required:!0}},methods:{onScoreChange:function(i,t){var e,n=this.config.scores[i][t];switch(n){case 1:e=3;break;case 2:e=2;break;case 3:e=1;break;default:throw Error("Must not happen, unsupported score: ".concat(n))}this.config.scores[t][i]=e}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",t._l(t.config.decks.length+1,(function(i){return e("div",{key:i,staticClass:"flex"},t._l(t.config.decks.length+1,(function(n){return e("div",{key:n},[i===n?e("div",{staticClass:"bg-black",class:{"w-24 h-24":1===i,"w-12 h-12":i>1}}):1===i&&n>1?e("div",{staticClass:"flex items-center font-bold rotate-180 p-1 w-12 h-24",staticStyle:{"writing-mode":"tb-rl"}},[t._v("\n        "+t._s(t.config.decks[n-2])+"\n      ")]):1===n&&i>1?e("div",{staticClass:"flex w-24 h-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.config.decks[i-2],expression:"config.decks[i - 2]"}],staticClass:"font-bold p-1 bg-green-200 w-24 h-12",domProps:{value:t.config.decks[i-2]},on:{input:function(e){e.target.composing||t.$set(t.config.decks,i-2,e.target.value)}}})]):e("select",{directives:[{name:"model",rawName:"v-model.number",value:t.config.scores[i-2][n-2],expression:"config.scores[i - 2][j - 2]",modifiers:{number:!0}}],staticClass:"pl-1 w-12 h-12 disabled:appearance-none disabled:pl-3",class:{"bg-green-200":i<n,"bg-gray-200":i>=n},attrs:{disabled:i>n},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var n="_value"in e?e._value:e.value;return t._n(n)}));t.$set(t.config.scores[i-2],n-2,e.target.multiple?r:r[0])},function(e){return t.onScoreChange(i-2,n-2)}]}},t._l(t.config.winCategories,(function(n){return e("option",{key:i,domProps:{value:n.score}},[t._v("\n          "+t._s(n.emoji)+"\n        ")])})),0)])})),0)})),0)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);n(43),n(19);var r=n(1).a.extend({name:"NumberOfLowOddsMatches",props:{config:{type:Object,required:!0}},computed:{numberOfLowOddsMatches:function(){var t=this;return function(e){return t.config.scores[e].filter((function(s){return 1===s})).length}}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",t._l(t.config.scores.length+1,(function(i){return e("div",{key:i},[1===i?e("div",{staticClass:"flex flex-col items-center justify-center font-bold rotate-180 w-12 h-24",staticStyle:{"writing-mode":"tb-rl"}},[t._m(0,!0)]):e("div",{staticClass:"flex items-center justify-center w-12 h-12"},[t._v("\n      "+t._s(t.numberOfLowOddsMatches(i-2))+"\n    ")])])})),0)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"whitespace-nowrap"},[t._v("\n        # of\n        "),e("span",{staticClass:"rotate-90",staticStyle:{"writing-mode":"horizontal-tb"}},[t._v("🤯")])])}],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);n(19),n(44),n(43),n(268),n(195);var r=n(1).a.extend({name:"NumberOfPlayers",props:{config:{type:Object,required:!0}},computed:{totalNumberOfPlayers:function(){return this.config.quantities.filter((function(t){return!Number.isNaN(t)})).map((function(t){return parseInt("".concat(t))})).reduce((function(t,e){return t+e}),0)}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",t._l(t.config.decks.length+1,(function(i){return e("div",{key:i,class:{"bg-green-200":i>1}},[1===i?e("div",{staticClass:"flex flex-col items-center font-bold rotate-180 w-12 h-24",staticStyle:{"writing-mode":"tb-rl"}},[e("div",{staticClass:"whitespace-nowrap"},[t._v("# of players")]),t._v(" "),e("div",{staticClass:"whitespace-nowrap text-xs"},[t._v("\n        Total: "+t._s(t.totalNumberOfPlayers)+"\n      ")])]):e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.quantities[i-2],expression:"config.quantities[i - 2]",modifiers:{number:!0}}],staticClass:"text-center bg-green-200 pl-3 w-12 h-12",attrs:{type:"number",min:"0",max:"99"},domProps:{value:t.config.quantities[i-2]},on:{input:function(e){e.target.composing||t.$set(t.config.quantities,i-2,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])})),0)}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);n(19),n(269),n(195),n(270);var r=n(1).a.extend({name:"OddsWeighted",props:{config:{type:Object,required:!0}},computed:{weightedPower:function(){var t=this;return function(e){for(var n,r=t.config.quantities.reduce((function(t,e){return t+e}),0),o=t.config.scores[e],c=0,l=function(){var e=-1;if(null===o[i])e=50;else{var r=o[i],l=null===(n=t.config.winCategories.find((function(t){return t.score===r})))||void 0===n?void 0:n.chance;if(void 0===l)throw Error("Failed to find chance for score: ".concat(r));e=l}var f=t.config.quantities[i];c+=e*f},i=0;i<t.config.decks.length;i++)l();return Math.round(100*(c/r+Number.EPSILON))/100}}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",t._l(t.config.decks.length+1,(function(i){return e("div",{key:i},[1===i?e("div",{staticClass:"flex flex-col items-center font-bold rotate-180 w-12 h-24",staticStyle:{"writing-mode":"tb-rl"}},[e("div",{staticClass:"whitespace-nowrap"},[t._v("Odds (%)")]),t._v(" "),e("div",{staticClass:"whitespace-nowrap text-xs"},[t._v("weighted")])]):e("div",{staticClass:"flex items-center justify-center w-12 h-12"},[t._v("\n      "+t._s(t.weightedPower(i-2))+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);n(196);var r=n(1).a.extend({name:"DeleteButtons",props:{config:{type:Object,required:!0}},methods:{removeDeck:function(t){this.config.decks.splice(t,1),this.config.scores.splice(t,1);for(var i=0;i<this.config.scores.length;i++)this.config.scores[i].splice(t,1);this.config.quantities.splice(t,1)}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",t._l(t.config.decks.length+1,(function(i){return e("div",{key:i},[1===i?e("div",{staticClass:"w-2 h-24"}):e("button",{staticClass:"w-2 h-12",on:{click:function(e){return t.removeDeck(i-2)}}},[t._v("🗑️")])])})),0)}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"AddButton",props:{config:{type:Object,required:!0}},methods:{addDeck:function(){this.config.decks.push("New deck");for(var i=0;i<this.config.scores.length;i++)this.config.scores[i].push(3);for(var t=[],e=this.config.decks.length,n=0;n<e-1;n++)t.push(1);t.push(null),this.config.scores.push(t),this.config.quantities.push(0)}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded w-24",on:{click:t.addDeck}},[e("svg",{attrs:{width:"32px",height:"32px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),e("span",[t._v("New deck")])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"Odds",props:{config:{type:Object,required:!0}},methods:{onWinCategoryChange:function(i){switch(i){case 0:this.config.winCategories[2].chance=100-this.config.winCategories[0].chance;break;case 1:break;case 2:this.config.winCategories[0].chance=100-this.config.winCategories[2].chance}}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"p-1"},[e("h2",{staticClass:"text-xl font-bold"},[t._v("Odds")]),t._v(" "),t._m(0),t._v(" "),t._l(t.config.winCategories.length,(function(i){return e("div",{staticClass:"flex"},[e("div",{staticClass:"flex justify-center items-center w-24 h-12"},[t._v("\n      "+t._s(t.config.winCategories[i-1].emoji)+"\n    ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.winCategories[i-1].chance,expression:"config.winCategories[i - 1].chance",modifiers:{number:!0}}],staticClass:"text-center pl-3 w-24 h-12",class:{"bg-green-200":2!==i},attrs:{type:"number",min:1===i?0:2===i?50:51,max:1===i?49:2===i?50:100,disabled:2===i},domProps:{value:t.config.winCategories[i-1].chance},on:{change:function(e){return t.onWinCategoryChange(i-1)},input:function(e){e.target.composing||t.$set(t.config.winCategories[i-1],"chance",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])}))],2)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex w-full"},[e("div",{staticClass:"flex justify-center font-bold w-24 h-12"},[t._v("Emoji")]),t._v(" "),e("div",{staticClass:"flex justify-center font-bold w-24 h-12"},[t._v("Chance (%)")])])}],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CopyLinkButton",methods:{copyLink:function(){var t=this;navigator.clipboard.writeText(window.location.href).then((function(){t.$toast.info("Link copied to clipboard!")}))}}}),o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded w-24",on:{click:t.copyLink}},[e("svg",{attrs:{width:"32px",height:"32px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.6666 13.3333L10.0808 12.7475C9.29978 11.9664 9.29978 10.7001 10.0808 9.91905L14.5857 5.41416C15.3668 4.63311 16.6331 4.63311 17.4142 5.41415L18.5857 6.58572C19.3668 7.36677 19.3668 8.6331 18.5857 9.41415L16.9999 10.9999M13.3333 10.6666L13.919 11.2524C14.7001 12.0335 14.7001 13.2998 13.919 14.0808L9.41415 18.5857C8.6331 19.3668 7.36677 19.3668 6.58572 18.5857L5.41416 17.4142C4.63311 16.6331 4.63311 15.3668 5.41416 14.5857L6.99994 12.9999",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),e("span",[t._v("Copy link")])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);n(19),n(108);var r=n(187),o=n(186),c=Object(r.a)((function t(e,n,r){Object(o.a)(this,t),this.score=e,this.chance=n,this.emoji=r}));const l="function"==typeof atob,f="function"==typeof btoa,d="function"==typeof Buffer,h="function"==typeof TextDecoder?new TextDecoder:void 0,v="function"==typeof TextEncoder?new TextEncoder:void 0,m=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),w=(a=>{let t={};return a.forEach(((e,i)=>t[e]=i)),t})(m),_=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,x=String.fromCharCode.bind(String),C="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),y=t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_")),k=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),O=t=>{let e,n,r,o,c="";const l=t.length%3;for(let i=0;i<t.length;){if((n=t.charCodeAt(i++))>255||(r=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=n<<16|r<<8|o,c+=m[e>>18&63]+m[e>>12&63]+m[e>>6&63]+m[63&e]}return l?c.slice(0,l-3)+"===".substring(l):c},j=f?t=>btoa(t):d?t=>Buffer.from(t,"binary").toString("base64"):O,A=d?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,n=t.length;i<n;i+=4096)e.push(x.apply(null,t.subarray(i,i+4096)));return j(e.join(""))},F=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?x(192|e>>>6)+x(128|63&e):x(224|e>>>12&15)+x(128|e>>>6&63)+x(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return x(240|e>>>18&7)+x(128|e>>>12&63)+x(128|e>>>6&63)+x(128|63&e)},$=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,N=u=>u.replace($,F),P=d?s=>Buffer.from(s,"utf8").toString("base64"):v?s=>A(v.encode(s)):s=>j(N(s)),S=(t,e=!1)=>e?y(P(t)):P(t),L=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,D=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return x(55296+(e>>>10))+x(56320+(1023&e));case 3:return x((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return x((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},B=b=>b.replace(L,D),M=t=>{if(t=t.replace(/\s+/g,""),!_.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,n,r,o="";for(let i=0;i<t.length;)e=w[t.charAt(i++)]<<18|w[t.charAt(i++)]<<12|(n=w[t.charAt(i++)])<<6|(r=w[t.charAt(i++)]),o+=64===n?x(e>>16&255):64===r?x(e>>16&255,e>>8&255):x(e>>16&255,e>>8&255,255&e);return o},E=l?t=>atob(k(t)):d?t=>Buffer.from(t,"base64").toString("binary"):M,T=d?a=>C(Buffer.from(a,"base64")):a=>C(E(a).split("").map((t=>t.charCodeAt(0)))),z=d?a=>Buffer.from(a,"base64").toString("utf8"):h?a=>h.decode(T(a)):a=>B(E(a)),U=a=>k(a.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),H=t=>z(U(t));var W=n(1).a.extend({name:"Index",mounted:function(){var t=this.$route.hash.toString();if(0===t.length)return this.loadSampleData(),void this.$toast.info("Sample data loaded");try{var e=JSON.parse(H(t.substring(1)));this.$data.decks=e.decks,this.$data.scores=e.scores,this.$data.quantities=e.quantities,this.$data.winCategories=e.winCategories,this.$toast.success("Data loaded")}catch(e){console.warn("Failed to parse hash: ".concat(t,", fallback to default"),e),this.loadSampleData(),this.$toast.warning("Failed to load data, fallback to sample")}},data:function(){return{decks:[],scores:[],quantities:[],winCategories:[]}},watch:{decks:{deep:!0,handler:function(){this.updateHash()}},scores:{deep:!0,handler:function(){this.updateHash()}},quantities:{deep:!0,handler:function(){this.updateHash()}},winCategories:{deep:!0,handler:function(){this.updateHash()}}},methods:{loadSampleData:function(){this.$data.decks=["Szerzetes","Olwen","Bajvívó","Ghassa","Yupi"],this.$data.scores=[[null,3,1,3,2],[1,null,1,3,3],[3,3,null,1,2],[1,1,3,null,2],[2,1,2,2,null]],this.$data.quantities=[2,4,7,2,4],this.$data.winCategories=[new c(1,15,"🤯"),new c(2,50,"😐"),new c(3,85,"😎")]},updateHash:function(){var t=S(JSON.stringify(this.$data));window.location.hash="#".concat(t)}}}),I=n(42),component=Object(I.a)(W,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"m-4"},[t._m(0),t._v(" "),e("h2",{staticClass:"text-xl font-bold"},[t._v("Decks")]),t._v(" "),e("div",{staticClass:"flex"},[e("decks",{attrs:{config:this.$data}}),t._v(" "),e("number-of-low-odds-matches",{staticClass:"ml-4",attrs:{config:this.$data}}),t._v(" "),e("number-of-players",{staticClass:"ml-4",attrs:{config:this.$data}}),t._v(" "),e("odds-weighted",{staticClass:"ml-4",attrs:{config:this.$data}}),t._v(" "),e("delete-buttons",{staticClass:"ml-4",attrs:{config:this.$data}})],1),t._v(" "),e("add-button",{staticClass:"mt-1",attrs:{config:this.$data}}),t._v(" "),e("odds",{staticClass:"mt-8",attrs:{config:this.$data}}),t._v(" "),e("copy-link-button",{staticClass:"mt-1",attrs:{config:this.$data}})],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h1",{staticClass:"text-3xl font-extrabold"},[t._v("\n    Deck selector"),e("small",{staticClass:"ml-2 font-semibold text-gray-500"},[t._v("for spikes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Decks:n(271).default,NumberOfLowOddsMatches:n(272).default,NumberOfPlayers:n(273).default,OddsWeighted:n(274).default,DeleteButtons:n(275).default,AddButton:n(276).default,Odds:n(277).default,CopyLinkButton:n(278).default})}}]);