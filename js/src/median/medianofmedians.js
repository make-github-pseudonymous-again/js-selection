const _medianofmedians = function ( median5 ) {

	const medianofmedians = function ( select , compare , a , i , j ) {

		const I = i ; let J = i ;

		for ( j -= 4 ; i < j ; i += 5 , ++J ) {

			let m = median5( compare , a , i ) ;

			[ a[m] , a[J] ] = [ a[J] , a[m] ] ;

		}

		j += 4 ;

		if ( i < j ) {

			let m = median( compare , a , i , j ) ;

			[ a[m] , a[J] ] = [ a[J] , a[m] ] ;

			++J ;

		}

		return select( compare , a , I , J , ( I + J ) / 2 | 0 ) ;

	} ;

} ;

exports.medianofmedians = medianofmedians ;
