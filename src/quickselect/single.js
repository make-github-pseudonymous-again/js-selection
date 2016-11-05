
/**
 * Template for the recursive implementation of quickselect.
 *
 */

export function single ( partition ) {

	const select = function ( compare , a , i , j , k ) {

		if ( j - i < 2 ) return ;

		const p = partition( compare , a , i , j ) ;

		if      ( k < p ) select( compare , a ,   i   , p , k ) ;
		else if ( k > p ) select( compare , a , p + 1 , j , k ) ;

	} ;

	return select ;

}
