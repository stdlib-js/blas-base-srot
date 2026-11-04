// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.3-esm/index.mjs";function s(e,t,s,n,d,i,o,a,m){var f,l,j,p;if(e<=0)return d;for(a=r(a),m=r(m),l=n,j=o,p=0;p<e;p++)f=r(a*t[l])+r(m*d[j]),d[j]=r(a*d[j])-r(m*t[l]),t[l]=f,l+=s,j+=i;return d}function n(e,r,n,d,i,o,a){return s(e,r,n,t(e,n),d,i,t(e,i),o,a)}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
