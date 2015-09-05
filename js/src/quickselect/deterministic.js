
const deterministic = function ( _select , partition , medianoffive ) {

	let S ;

	const P = function ( compare , a , i , j ) {

		const m = medianoffive( S , compare , a , i , j ) ;

		[ a[i] , a[m] ] = [ a[m] , a[i] ] ;

		return partition( compare , a , i , j ) ;

	} ;

	S = _select( P ) ;

	return [ S , P ] ;

} ;

exports.deterministic = deterministic ;
