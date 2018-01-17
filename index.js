//return string of numbered dwarves
function dwarfRollCall(array) {
  var numName = "";
  for (var i = 0; i < array.length; i++){
    numName += (i+1).toString() + ". " + array[i] + " ";
  }
  
  return numName;
}

//convert to upper and add !
//return array
function summonCaptainPlanet(array) {
  var loudCalls = [];
  
  for(var i = 0; i < array.length; i++) {
    loudCalls.push(array[i].toUpperCase() + "!");
  }
  
  return loudCalls;
}

//returns true or false
function longPlaneteerCalls(array) {
  for(var i = 0; i < array.length; i++){
    if (array[i].length > 4) {
      return true;
    } else { 
      return false;
    }
  }  
}

//looks through array of strings returns first cheese
function findTheCheese(array){
  var snacks = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < array.length; i++){
    for (var h = 0; h < snacks.length; h++){
      if (array[i] === snacks[h]) {
        return snacks[h];
      }
    }
  }
 return "no cheese!"; 
}



