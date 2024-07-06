"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=p(function(F,x){
function b(e,r,v,n,i,o,q,a,t){var m,u,s,f;if(e<=0)return i;for(u=n,s=q,f=0;f<e;f++)m=a*r[u]+t*i[s],i[s]=a*i[s]-t*r[u],r[u]=m,u+=v,s+=o;return i}x.exports=b
});var y=p(function(G,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=c();function h(e,r,v,n,i,o,q){var a,t;return e<=0?n:(a=j(e,v),t=j(e,i),g(e,r,v,a,n,i,t,o,q))}l.exports=h
});var E=p(function(H,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),w=c();k(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=E(),d,O=A(z(__dirname,"./native.js"));B(O)?d=C:d=O;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
