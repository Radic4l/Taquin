$( document ).ready(function() {

var grille = new Array();
var theme = new Array();
theme = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var indexTheme = 0;

for(var i=0; i<4; i++){
  grille[i] = new Array();
  for(var j=0; j<4; j++)
  {
    grille[i][j] = theme[indexTheme];
    console.log(indexTheme + " " + theme[indexTheme]);
    indexTheme++;
  }
}

generateCases();

$("button").click(function(){
      randomiseCases();
});

$("td").click(function(){
      monId = $(this).attr('id');
      chn1 = monId.slice(0, 1);
      chn2 = monId.slice(2, 3);
    console.log(chn1 + " " + chn2);

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


function randomiseCases()
{

}



});