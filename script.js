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

$("button").click(function(){
      generateCases();
});



function generateCases(){
	console.log("test");
	var n = 0;
	var x = 0;
	var myCases = "";
	while ( n < theme.length-1) {
		
		myCases = myCases + "<tr>";
		while(x < 4){
			var myCases = myCases + "<td>" + theme[n] + "</td>";
			n++;
			x++;
		}
		x = 0;
		myCases = myCases + "</tr>";
	}



	$( "tbody" ).html(myCases);
	
	return true;
}



});