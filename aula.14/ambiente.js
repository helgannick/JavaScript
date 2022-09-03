// Initializer list specifies the number of elements and
// a value for each element.
let colors = new Array( "cyan", "magenta","yellow", "black" ); 
let integers1 = [ 2, 4, 6, 8 ];                                
let integers2 = [ 2, , , 8 ];                                  

outputArray( "Array colors contains", colors );
outputArray( "Array integers1 contains", integers1 );
outputArray( "Array integers2 contains", integers2 );

// output the heading followed by a two-column table 
// containing the subscripts and elements of theArray  
function outputArray( heading, theArray )
{
   console.log( heading );/*from w  w w  . ja v a  2 s .  c  om*/
   // output the subscript and value of each array element
   for ( let i = 0; i < theArray.length; i++ ) 
      console.log( i + ":" + theArray[ i ] );
} // end function outputArray