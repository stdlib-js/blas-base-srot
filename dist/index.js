"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=d(function(G,j){
var u=require('@stdlib/number-float64-base-to-float32/dist');function g(e,r,n,o,i,q,f,a,t){var c,v,s,p;if(e<=0)return i;for(a=u(a),t=u(t),v=o,s=f,p=0;p<e;p++)c=u(a*r[v])+u(t*i[s]),i[s]=u(a*i[s])-u(t*r[v]),r[v]=c,v+=n,s+=q;return i}j.exports=g
});var R=d(function(H,l){
var y=require('@stdlib/strided-base-stride2offset/dist'),h=m();function k(e,r,n,o,i,q,f){var a=y(e,n),t=y(e,i);return h(e,r,n,a,o,i,t,q,f)}l.exports=k
});var O=d(function(I,E){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),z=m();w(_,"ndarray",z);E.exports=_
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=O(),x,b=B(A(__dirname,"./native.js"));C(b)?x=D:x=b;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
