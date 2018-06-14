$( document ).ready(function() {

var grille = new Array();
var theme = new Array();
theme = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var indexTheme = 0;
var positionVoidCase = new Array();
positionVoidCase = [0,0]

for(var i=0; i<4; i++){
  grille[i] = new Array();
  for(var j=0; j<4; j++)
  {
    grille[i][j] = theme[indexTheme];
    console.log(indexTheme + " " + theme[indexTheme]);
    indexTheme++;
  }
}

var reference = new Array();
reference = grille;
console.log(grille)/*-------------------------------------------------------*/

generateCases();

function permute (i, j) {

/*	var test54 = true;
*/
		var tamponVal = grille[i][j];
		grille[i][j] = grille[positionVoidCase[0]][positionVoidCase[1]];
		grille[positionVoidCase[0]][positionVoidCase[1]] = tamponVal;
		positionVoidCase[0] = i;
		positionVoidCase[1] = j;
		console.log(positionVoidCase);

		
	
};

$("button").click(function(){
      generateCases();
});

$("td").click(function(){
      monId = $(this).attr('id');
      chn1 = monId.slice(0, 1);
      chn2 = monId.slice(2, 3);
    console.log(chn1 + " TEST" + chn2);
    permutable(chn1, chn2);
        console.log(grille);

});

function generateCases(){
	console.log("test");
	var x = 0;
	var y = 0;
	var myCases = "";
	while (x < 4) {
		
		myCases = myCases + "<tr>";
		while(y < 4){
			myCases = myCases + "<td id='" + x + "_" + y + "'>" +  grille[x][y] + "</td>";
			y++;
		}
		x++;
		y = 0;
		myCases = myCases + "</tr>";
	}



	$( "tbody" ).html(myCases);
	
	return true;
}



/*function randomiseCases()
{

}*/


	function permutable(i, j){
		

	}

});

