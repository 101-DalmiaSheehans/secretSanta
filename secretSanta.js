//Load filesytem module
var fs = require('fs');
var shuffleTool = require( './shuffleArray' );
var tools = require( './tools');

function assignSecretSanta( err , fileData )
{
    // If error occurs, throw 
    if( err )
        throw err;

    var fileContent = fileData.toString();

    var santas = fileContent.split( '\n').filter( function( element ) {
        return element != "";
    });

    var recievers = tools.deepCopyArray(santas);
    
    shuffleTool.fancyShuffleArray( recievers );
    //shuffleTool.shuffleArray( recievers);
    
    for( idx = 0 ; idx < santas.length ;  idx ++)
    {
        console.log( santas[idx] + " will buy " + recievers[idx] + " a present\n");
    }

}

//Read file content into memory
fs.readFile('names.txt', assignSecretSanta);
