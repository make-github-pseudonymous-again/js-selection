
/**
 * Template for the recursive implementation of quickselect with explicit tail
 * call optimization.
 *
 */

let singletco = function ( partition ) {

	let select = function ( compare , a , i , j , k ) {

		while ( true ) {

			if ( j - i < 2 ) return ;

			let p = partition( compare , a , i , j ) ;

			if      ( k < p ) j = p ;
			else if ( k > p ) i = p + 1 ;
			else              return ;

		}

	} ;

	return select ;

} ;

exports.singletco = singletco ;
