module.exports = {

    deepCopyArray: function ( arrayToCopy )
    {
        var newArray = [];

        arrayToCopy.forEach( function ( element ) 
            {
                newArray.push( element )
        });
        
        return newArray;
    }

}

