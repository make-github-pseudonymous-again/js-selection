```js
let partition = require( "aureooms-js-partition" ) ;
let compare = require( "aureooms-js-compare" ) ;

/** recursive single pivot quickselect using Hoare's partitioning algorithm*/
let select = selection.single( partition.hoare ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

select( compare.increasing , a , 0 , a.length , 3 ) ;

a ; // [ . , . , . , 4 , . , . ]

select( compare.decreasing , a , 0 , a.length , 2 ) ;

a ; // [ . , 5 , . , . , . , . ]

// but also

/** recursive single pivot quickselect using Lomuto's partitioning algorithm */
let select = selection.single( partition.lomuto ) ;

/** with explicit tail call optimization */
let select = selection.singletco( partition.hoare ) ;
let select = selection.singletco( partition.lomuto ) ;
```
