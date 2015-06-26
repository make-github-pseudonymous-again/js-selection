

var multiselect = function ( partition, index ) {

	/**
	 * As long as partition and index are O(n) multiselect is O( n log n )
	 * on average.
	 */

	var select = function ( compare, a, ai, aj, b, bi, bj ) {

		var p, q;

		if ( aj - ai < 2 || bj - bi === 0 ) {
			return;
		}

		p = partition( compare, a, ai, aj );
		q = index( b, bi, bj, p );

		select( compare, a,    ai,  p,  b,          bi, q[1] );
		select( compare, a, p + 1, aj,  b, q[0] + q[1],   bj );
	};

	return select;

};

exports.multiselect = multiselect;
