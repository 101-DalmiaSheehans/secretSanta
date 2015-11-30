module.exports = {

    shuffleArray: function shuffleArray( array ){

        firstElement = array[0];
        for( var i = 0 ; i < array.length; i++ )
        {
            array[i] = array[(i+1)%array.length];
        }
        array[array.length -1 ] = firstElement;

    },
    fancyShuffleArray: function (array){
        for( var idx = 0; idx < array.length ; idx++)
        {
            var start = 1+ idx;
            var end = array.length -1;
            var swapIndex = Math.floor( (Math.random() * (end - start) ) + start );
            var tmp = array[idx];
            array[idx] = array[ swapIndex ];
            array[swapIndex] = tmp;
        }
    }
}

