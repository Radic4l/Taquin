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
  generateCases();
}




function generateCases(){
	console.log("test");
	$( ".container" ).html(function(){
		while (n < theme.length) {
			n++;
			var my = "<td>" + theme[n] + "</td>";
		}
		my = "<td>" + theme[0] + "</td>";
		return "<tr>All new content for " + my + "</tr>";
	});

	return true;
}