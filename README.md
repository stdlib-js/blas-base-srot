<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# srot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a plane rotation.

<section class="intro">

This BLAS level 1 routine applies a real plane rotation to real single-precision floating-point vectors. The plane rotation is applied to `N` points, where the points to be rotated are contained in vectors `x` and `y` and where the cosine and sine of the angle of rotation are `c` and `s`, respectively. The operation is as follows:

<!-- <equation class="equation" label="eq:srot" align="center" raw="\begin{bmatrix}x_i \\ y_i\end{bmatrix} = \begin{bmatrix} c & s \\ -s & c\end{bmatrix}\begin{bmatrix} x_i \\ y_i \end{bmatrix}" alt="Plane rotation"> -->

<!-- </equation> -->

where `x_i` and `y_i` are the individual elements on which the rotation is applied.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import srot from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-srot@deno/mod.js';
```

#### srot( N, x, strideX, y, strideY, c, s )

Applies a plane rotation.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

srot( x.length, x, 1, y, 1, 0.8, 0.6 );
// x => <Float32Array>[ ~4.4, ~5.8, ~7.2, ~8.6, 10.0 ]
// y => <Float32Array>[ ~4.2, ~4.4, ~4.6, ~4.8, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element, 

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

srot( 3, x, 2, y, 2, 0.8, 0.6 );
// x => <Float32Array>[ ~5.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
// y => <Float32Array>[ 5.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

srot( 3, x1, 1, y1, 1, 0.8, 0.6 );
// x0 => <Float32Array>[ 1.0, ~7.6, 9.0, ~10.4, 5.0, 6.0 ]
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, ~6.8, 7.0, ~7.2 ]
```

#### srot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

srot.ndarray( 4, x, 1, 1, y, 1, 1, 0.8, 0.6 );
// x => <Float32Array>[ 1.0, ~5.8, ~7.2, ~8.6, 10.0 ]
// y => <Float32Array>[ 6.0, ~4.4, ~4.6, ~4.8, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from third element,...,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

srot.ndarray( 2, x, 2, 2, y, 2, 2, 0.8, 0.6 );
// x => <Float32Array>[ 1.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
// y => <Float32Array>[ 7.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `srot()` corresponds to the [BLAS][blas] level 1 function [`srot`][srot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import srot from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-srot@deno/mod.js';

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 500, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 255, opts );
console.log( y );

// Applies a plane rotation :
srot( x.length, x, 1, y, 1, 0.8, 0.6 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-srot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-srot

[test-image]: https://github.com/stdlib-js/blas-base-srot/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/blas-base-srot/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-srot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-srot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-srot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-srot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-srot/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-srot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-srot/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-srot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-srot/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-srot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-srot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-srot/main/LICENSE

[blas]: http://www.netlib.org/blas

[srot]: https://www.netlib.org/lapack/explore-html/d1/d45/group__rot_ga432ce08bbcda714c82c7a31552f96937.html#ga432ce08bbcda714c82c7a31552f96937

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
