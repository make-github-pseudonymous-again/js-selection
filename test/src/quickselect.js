import test from 'ava' ;

import array from "aureooms-js-array" ;
import random from "aureooms-js-random" ;
import compare from "aureooms-js-compare" ;
import partition from "aureooms-js-partition" ;
import functools from "aureooms-js-functools" ;
import * as itertools from "aureooms-js-itertools" ;

import * as selection from '../../src' ;

const all = function ( quickselectname, quickselect, comparename, compare, n, type ) {

	const title = `${quickselectname} (new ${type.name}(${n}), ${comparename})`

	test( title, t => {

		// SETUP REF ARRAY
		const ref = new type( n );
		array.iota(ref, 0, n, 0);
		array.sort( compare, ref );

		// SETUP TEST ARRAY
		const a = new type( n );
		array.copy( ref, 0, n, a, 0 );

		// TEST ALL INDEX SELECTION
		let i = a.length;
		while ( i-- ) {
			random.shuffle( a, 0, n );
			quickselect( compare, a, 0, n, i );
			t.deepEqual( a[i], ref[i], "select #" + i );
		}

		t.deepEqual( a.length, n, "check length" );
	});
};

itertools.exhaust( itertools.map(

functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star,

	[ function ( quickselectname, quickselect, comparename, compare, n, type ) {

		if ( type.BYTES_PER_ELEMENT && n > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		all( quickselectname, quickselect, comparename, compare, n, type );
	} ]
) ] ) ,

itertools.product( [

[
	[ "quickselect (hoare)", selection.single( partition.hoare ) ] ,
	[ "quickselect (lomuto)", selection.single( partition.lomuto ) ] ,
	[ "quickselect [tco] (hoare)", selection.singletco( partition.hoare ) ] ,
	[ "quickselect [tco] (lomuto)", selection.singletco( partition.lomuto ) ]
],

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[ [0], [1], [2], [10], [31], [32], [33] ],

[
	[ Array ],
	[ Int8Array ],
	[ Uint8Array ],
	[ Int16Array ],
	[ Uint16Array ],
	[ Int32Array ],
	[ Uint32Array ],
	[ Float32Array ],
	[ Float64Array ]
]

], 1 ) ) ) ;
