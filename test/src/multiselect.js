import test from 'ava' ;

import array from "aureooms-js-array" ;
import search from "aureooms-js-search" ;
import random from "aureooms-js-random" ;
import compare from "aureooms-js-compare" ;
import partition from "aureooms-js-partition" ;
import functools from "aureooms-js-functools" ;
import itertools from "aureooms-js-itertools" ;

import * as selection from '../../src' ;

const all = function ( partitionname, partition, comparename, comparator, n, type ) {

	const title = `multiselect ${paritionname} (new ${type.name}(${n}), ${comparename})`

	test( title, t => {

		// SETUP SELECT
		const index = functools.partial ( search.binarysearch, [compare.increasing] );
		const multiselect = selection.multiselect( partition, index );

		// SETUP REF ARRAY
		const ref = new type( n );
		array.iota( ref, 0, n, 0 );
		random.shuffle( ref, 0, n );
		array.sort( comparator, ref );

		// SETUP TEST ARRAY
		const a = new type( n );
		array.copy( ref, 0, n, a, 0 );

		// SELECT A SAMPLE OF THE INDEXES IN *a*
		const i = a.length;

		let len = random.randint( 0, i + 1 );
		random.sample( len, a, 0, n );
		const k = new type( len );
		array.copy( a, 0, len, k, 0 );
		array.sort( compare.increasing, k );

		random.shuffle( a, 0, n );
		multiselect( comparator, a, 0, n, k, 0, len );

		while ( len-- ) {
			deepEqual( a[k[len]], ref[k[len]], "select #" + k[len] );
		}

		t.deepEqual( a.length, n, "check length" );
	});
};

itertools.exhaust( itertools.map(

functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star,

	[ function ( partitionname, partition, comparename, compare, n, type ) {

		if ( type.BYTES_PER_ELEMENT && n > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		all( partitionname, partition, comparename, compare, n, type );
	} ]
) ] ) ,

itertools.product( [

[
	[ "hoare", partition.hoare ],
	[ "lomuto", partition.lomuto ]
],

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[[0], [1], [2], [10], [63], [64], [65]],

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
