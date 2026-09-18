"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var m=d(function(G,j){
var v=require('@stdlib/number-float64-base-to-float32/dist');function g(e,r,a,o,i,q,f,t,u){var c,s,n,p;if(e<=0)return i;for(t=v(t),u=v(u),s=o,n=f,p=0;p<e;p++)c=v(t*r[s])+v(u*i[n]),i[n]=v(t*i[n])-v(u*r[s]),r[s]=c,s+=a,n+=q;return i}j.exports=g
});var R=d(function(H,l){
var y=require('@stdlib/strided-base-stride2offset/dist'),h=m();function k(e,r,a,o,i,q,f){var t=y(e,a),u=y(e,i);return h(e,r,a,t,o,i,u,q,f)}l.exports=k
});var O=d(function(I,E){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),z=m();w(_,"ndarray",z);E.exports=_
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=O(),x,b=B(A(__dirname,"./native.js"));C(b)?x=D:x=b;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
