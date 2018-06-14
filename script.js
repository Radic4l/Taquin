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

generateCases();



function permute (i, j) {
	console.log("permutable" +permutable(i,j));
	if(permutable(i,j))
	{
		console.log("TEEEEEEEEEEEEEEEEEEEEEEST");

		var tamponVal = grille[i][j];
		grille[i][j] = grille[positionVoidCase[0]][positionVoidCase[1]];
		grille[positionVoidCase[0]][positionVoidCase[1]] = tamponVal;
		positionVoidCase[0] = i;
		positionVoidCase[1] = j;
		console.log(positionVoidCase);
}
		
	
};

$("button").click(function(){
      generateCases();
});

$("td").click(function(){
	monId = $(this).attr('id');
	chn1 = monId.slice(0, 1);
	chn2 = monId.slice(2, 3);
	var i = parseInt(chn1);
	var j = parseInt(chn2);
	console.log(i + "  " + j);
	permute(i, j);
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




	function permutable(i, j){

		if(exist(i-1,j))
		{
			if (grille[i-1][j] == null) {
				console.log('BALISE OF DOOOOOOOOOOOOOOOOOOOOM 1');
				return true;
			}
		}
		if(exist(i+1,j))
		{
			if (grille[i+1][j] == null) {

				console.log('BALISE OF DOOOOOOOOOOOOOOOOOOOOM 2');
				return true;
			}
		}

		if(exist(i,j-1) )
		{
			if (grille[i][j-1] == null) {
				console.log('BALISE OF DOOOOOOOOOOOOOOOOOOOOM 3');
				return true;
			}
		}	
		console.log("Exist : " +exist(i,j+1));

		if(exist(i,j+1))
		{
			if (grille[i][j+1] == null) {
				console.log('BALISE OF DOOOOOOOOOOOOOOOOOOOOM 4');
				return true;
			}
		}


		return false;


	}

	function exist(i, j)
	{
		var possible;
		console.log("j : " +j);

		if( i<0 || i>3 || j<0 || j>3)
		{
			possible = false;

		}else{
			possible = true;
		}
		return possible;
	}

});

