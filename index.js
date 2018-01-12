
//add numbers in front of dwarves iterate through
function dwarfRollCall(dwarves) {
  var numberNames = "";
  
  for (var i = 0; i < dwarves.length; i++){
    numberNames += ((i+1).toString() +". "+ dwarves[i]+ " ");
  }
  
  return numberNames;
}

function summonCaptainPlanet(planeteerCalls){
//convert to upper case and add exlamation point
  var arr = [];
  
  for (var i = 0; i < planeteerCalls.length; i++){
    arr.push(planeteerCalls[i] + "!");
  }
  
  return arr;
}

function longPlaneteerCalls(words) {
//iterate through words find out if they are > 4
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
    
}

function findTheCheese (foods) {
//3 types of cheese. return first cheese
//iterate through Array + iterate through cheese 
//compare the two
var cheese = ["gouda", "cheddar", "camembert"];

  for (var i = 0; i < foods.length; i++){
    for (var c = 0; c < cheese.length; c++) {
      
      if (foods[i] === cheese[c]) {
        return foods[i];
      } 
    } 
  }
return "no cheese!";
  
}


