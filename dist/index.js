"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var c=m(function(G,j){
function h(a,e,o,i,t,s,f){var n,u,v,r;if(a<=0)return i;if(o===1&&t===1){for(r=0;r<a;r++)n=s*e[r]+f*i[r],i[r]=s*i[r]-f*e[r],e[r]=n;return i}for(o<0?u=(1-a)*o:u=0,t<0?v=(1-a)*t:v=0,r=0;r<a;r++)n=s*e[u]+f*i[v],i[v]=s*i[v]-f*e[u],e[u]=n,u+=o,v+=t;return i}j.exports=h
});var _=m(function(H,R){
function k(a,e,o,i,t,s,f,n,u){var v,r,q,p;if(a<=0)return t;for(r=i,q=f,p=0;p<a;p++)v=n*e[r]+u*t[q],t[q]=n*t[q]-u*e[r],e[r]=v,r+=o,q+=s;return t}R.exports=k
});var b=m(function(I,O){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=c(),z=_();w(E,"ndarray",z);O.exports=E
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=b(),l,g=B(A(__dirname,"./native.js"));C(g)?l=D:l=g;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
