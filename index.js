

// given dwarf names return a numbered string
function dwarfRollCall(dwarves){
  
  var numNames = "";
  
  for (var i = 0; i < dwarves.length; i++){
    
    numNames += `${i+1}. ${dwarves[i]} `;
  }
  
  return numNames;
}


// upper case array and add ! to end

function summonCaptainPlanet(calls) {
  
  var yell = [];
  
  
  for (var i = 0; i < calls.length; i++) {
    
    yell.push(calls[i].toUpperCase() + "!");
    
  }
  
  return yell;
}


//returns true if calls > 4 characters false if other
function longPlaneteerCalls(calls) {
  
  for(var i = 0; i < calls.length; i++) {
    if (calls[i].length > 4){
    return true;
    } else {
      return false;
    }
  }
}



//looks through array of strings for 3 types of cheeses
function findTheCheese(food){
  
  var cheeses = ["cheddar","gouda","camembert"];
  
  for (var i = 0; i < food.length; i++) {
    
    for (var c = 0; c < cheeses.length; c++) {
      
      if (food[i] === cheeses[c]) {
        return cheeses[c];
      } 
    }
  }

  
  return 'no cheese!';
}




