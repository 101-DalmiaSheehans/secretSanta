//Load filesytem module
var fs = require('fs');
var shuffleTool = require( './shuffleArray' );
var tools = require( './tools');

module.exports = {

		getSecretSanta : function ( fileName )
		{
			var result = [] ;
			var fileData = fs.readFileSync(fileName)
			var fileContent = fileData.toString();
			var santas = fileContent.split( '\n').filter( function( element ) {
				return element != "";
			});

			var recievers = tools.deepCopyArray(santas);
			shuffleTool.fancyShuffleArray( recievers );
            
			
			for( idx = 0 ; idx < santas.length ;  idx ++)
			{
				result[idx] ={ santa:  santas[idx] ,  reciever : recievers[idx] };
			}
			
			console.log(result);
			return result;
		}

}