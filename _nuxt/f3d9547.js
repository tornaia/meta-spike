(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{278:function(t,n,o){"use strict";o.r(n);var e=o(1).a.extend({name:"CopyLinkButton",methods:{copyLink:function(){var t=this;navigator.clipboard.writeText(window.location.href).then((function(){t.$toast.info("Link copied to clipboard!")}))}}}),r=o(42),component=Object(r.a)(e,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("button",{staticClass:"flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded w-24",on:{click:t.copyLink}},[n("svg",{attrs:{width:"32px",height:"32px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.6666 13.3333L10.0808 12.7475C9.29978 11.9664 9.29978 10.7001 10.0808 9.91905L14.5857 5.41416C15.3668 4.63311 16.6331 4.63311 17.4142 5.41415L18.5857 6.58572C19.3668 7.36677 19.3668 8.6331 18.5857 9.41415L16.9999 10.9999M13.3333 10.6666L13.919 11.2524C14.7001 12.0335 14.7001 13.2998 13.919 14.0808L9.41415 18.5857C8.6331 19.3668 7.36677 19.3668 6.58572 18.5857L5.41416 17.4142C4.63311 16.6331 4.63311 15.3668 5.41416 14.5857L6.99994 12.9999",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),n("span",[t._v("Copy link")])])}),[],!1,null,null,null);n.default=component.exports}}]);