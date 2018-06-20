$( document ).ready(function() {
/////////////////////////////////// Declaration des variables
var grille = new Array();
var theme = new Array();
var indexTheme = 0;
var positionVoidCase = new Array();
var design = new Array();
/////////////////////////////////// parametrage de la partie
theme = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
design = ["/","Cards/"]; //Rajouter le nom des dossier contenant les design des cases
var indiceDesign = 0; // Commence toujours par le design à l'indice 0 du tableau design
theme.push(null);
positionVoidCase = [3,3];
var nameTd = "id2_2";
var nameImg = "5.png"
$(name).css("background-image", nameImg);

////////////////////////////////// Fonctions
function permute (i, j) {  // Echange deux valeurs dans le tableau de
	console.log("permutable" + permutable(i,j));
	if(permutable(i,j))
	{
		console.log("Je passe dans ma fonction permute");
		var tamponVal = grille[i][j];
		grille[i][j] = grille[positionVoidCase[0]][positionVoidCase[1]];
		grille[positionVoidCase[0]][positionVoidCase[1]] = tamponVal;
		positionVoidCase[0] = i;
		positionVoidCase[1] = j;
		console.log(positionVoidCase);
}
};

/////
function generateCases(){ // création de notre tableau de jeu en fonction de grille
	console.log("je passe dans generateCase");
	var x = 0;
	var y = 0;
	var myCases = "";
	var monId = "";
	var monBackground = "";
	while (x < 4) {
		myCases = myCases + "<tr>";
		while(y < 4){
      if(grille[x][y] == null){
        myCases = myCases + "<td class='blank' id='id" + x + "_" + y + "'></td>";
  			y++;
      }else{
        myCases = myCases + "<td class='montd' id='id" + x + "_" + y + "'>"+ grille[x][y] +"</td>";
				$(monId).css("background-image", "url('" + monBackground + ")");
  			y++;
      }

		}
		x++;
		y = 0;
		myCases = myCases + "</tr>";
	}


	$( "tbody" ).html(myCases);

////////////////// THEME CARTES
function theme(monTheme){
	var x2 = 0;
	var y2 = 0;
	var monId = "";
	var monBackground = "";
	while (x2 < 4) {
		while (y2 < 4) {
			if(grille[x2][y2] == null){
				console.log("VIDE");
			}else {
				monId = "#id" + x2 + "_" + y2;
				monBackground =  monTheme + grille[x2][y2] + ".png";
				console.log(monBackground);
				$(monId).css("background-image", "url('" + monBackground + "')");
			}
				y2++;

		}
		y2 = 0;
		x2++;
	}
}
	////////////////// END THEME CARTES
	$("#theme").click(function(){
		if(indiceDesign < design.length)
		{
			indiceDesign++;
		}else {
			indiceDesign = 0;
		}

		theme(design[indiceDesign]);

	});

  $(".montd").click(function(){
  	monId = $(this).attr('id');
  	chn1 = monId.slice(2, 3);
  	chn2 = monId.slice(4, 5);
  	var i = parseInt(chn1);
  	var j = parseInt(chn2);
  	console.log(i + "  " + j);
  	permute(i, j);
  	console.log("grille : " + grille);
    console.log("ref :" + reference);
    generateCases();
    //console.log(won());
    if (won()) {
      alert('GG');
    }
  });
	return true;
}
/////
function permutable(i, j){ // Vérifie si une case et permutable

  if(exist(i-1,j))
  {
    if (grille[i-1][j] == null) {
      return true;
    }
  }
  if(exist(i+1,j))
  {
    if (grille[i+1][j] == null) {
      return true;
    }
  }
  if(exist(i,j-1) )
  {
    if (grille[i][j-1] == null) {
      return true;
    }
  }
  console.log("Exist : " +exist(i,j+1));
  if(exist(i,j+1))
  {
    if (grille[i][j+1] == null) {
      return true;
    }
  }
  return false;
}
//////
function exist(i, j){  // Vérifie si une case du tableau existe
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
//////
function won() { // Check si le tableau de jeu et le référentiel correspondent
var matching = true;
var i = 0;
var j = 0;
console.log('dans won , avant while');
  while( i < grille.length && matching == true){
    console.log('dans won , 1er while');
    j=0;
    while( j < grille[i].length && matching == true) {
      console.log('dans won , 2er while');
      if (grille[i][j] != reference[i][j]) {
        console.log('Not Matching');
        matching = false;
      }
      j++;
    }
    i++;
  }
  return matching;
}

/////
function clone2d(arr){ // Duplication du plateau de jeu
  var copy = new Array();
  for(var i = 0; i < arr.length; i++ ) {
         copy[ i ] = arr[ i ].slice();
   }
   return copy;
}
/////
function initializeGame(){ // initialisation du plateau de jeu
	var nb = 1;
	var nameTd = "";
	var nameImg = "";
  for(var i=0; i<4; i++){
    grille[i] = new Array();
    for(var j=0; j<4; j++)
    {
      grille[i][j] = theme[indexTheme];
			nameTd = "id"+i+"_"+j;
			nameImg = nb+".png"
			$(name).css("background-image", nameImg);
			nb++;
      // console.log(indexTheme + " " + theme[indexTheme]);
      indexTheme++;
    }
  }
  generateCases();
}
//////////////////////////////// appel de fonctions
initializeGame();
var reference = clone2d(grille);
/////////////////////////////// Actions

$("button").click(function(){
      won();
});

/////////////
});
