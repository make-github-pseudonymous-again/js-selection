"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/multiselect.js */

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

		/* js/src/quickselect.js */

		/**
   * Template for the recursive implementation of quickselect.
   *
   */

		var quickselect = function quickselect(partition) {

			var quickselect = function quickselect(compare, a, i, j, k) {

				var p;

				if (j - i < 2) {
					return;
				}

				p = partition(compare, a, i, j);

				if (k < p) {
					quickselect(compare, a, i, p, k);
				} else if (k > p) {
					quickselect(compare, a, p + 1, j, k);
				}
			};

			return quickselect;
		};

		exports.quickselect = quickselect;

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