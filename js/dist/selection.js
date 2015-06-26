"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/multi */
		/* js/src/multi/multiselect.js */

		var multiselect = function multiselect(partition, index) {

			/**
    * As long as partition and index are O(n) multiselect is O( n log n )
    * on average.
    */

			var select = function select(compare, a, ai, aj, b, bi, bj) {

				var p, q;

				if (aj - ai < 2 || bj - bi === 0) {
					return;
				}

				p = partition(compare, a, ai, aj);
				q = index(b, bi, bj, p);

				select(compare, a, ai, p, b, bi, q[1]);
				select(compare, a, p + 1, aj, b, q[0] + q[1], bj);
			};

			return select;
		};

		exports.multiselect = multiselect;

		/* js/src/quickselect */
		/* js/src/quickselect/single.js */

		/**
   * Template for the recursive implementation of quickselect.
   *
   */

		var single = function single(partition) {

			var select = function select(compare, a, i, j, k) {

				if (j - i < 2) return;

				var p = partition(compare, a, i, j);

				if (k < p) select(compare, a, i, p, k);else if (k > p) select(compare, a, p + 1, j, k);
			};

			return select;
		};

		exports.single = single;

		/* js/src/quickselect/singletco.js */

		/**
   * Template for the recursive implementation of quickselect with explicit tail
   * call optimization.
   *
   */

		var singletco = function singletco(partition) {

			var select = function select(compare, a, i, j, k) {

				while (true) {

					if (j - i < 2) return;

					var p = partition(compare, a, i, j);

					if (k < p) j = p;else if (k > p) i = p + 1;else return;
				}
			};

			return select;
		};

		exports.singletco = singletco;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-selection", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["selection"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-selection");
})();