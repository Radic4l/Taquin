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

/*-------------------------------------------------------*/

generateCases();

$("button").click(function(){
      randomiseCases();
});

$("td").click(function(){
      monId = $(this).attr('id');
      chn1 = monId.slice(0, 1);
      chn2 = monId.slice(2, 3);
    console.log(chn1 + " TEST" + chn2);
    permutable(chn1, chn2);

});

function generateCases(){
	console.log("test");
	var x = 0;
	var y = 0;
	var myCases = "";
	while ( x < 4) {
		
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
		var possible = false;
		var x = 0;
		var isAroundVoid =new Array();

		isAroundVoid = limitsVoid();
		
		while(x < isAroundVoid.length)	
		{
			if( isAroundVoid[x] == grille[i][j])
			{
				possible = true;
			}
			x++;
		}
		console.log(possible);
		return isAroundVoid;
	}


	function limitsVoid()
	{
		var aroundVoid = new Array();
		if(positionVoidCase[0] != 0)
		{
			aroundVoid.push(grille[positionVoidCase[0]-1][positionVoidCase[1]]);
		}

		if(positionVoidCase[1] != 0)
		{
			aroundVoid.push(grille[positionVoidCase[0]][positionVoidCase[1]-1]);
		}

		if(positionVoidCase[0] != 3)
		{
			aroundVoid.push(grille[positionVoidCase[0]+1][positionVoidCase[1]]);
		}

		if(positionVoidCase[1] != 3)
		{
			aroundVoid.push(grille[positionVoidCase[0]][positionVoidCase[1]+1]);
		}

		return aroundVoid;

	}

});