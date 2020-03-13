let queen = {
  direction: 'S',
  whereabouts: [],
  position: {
    x: 4,
    y: 0,
  }
}

var user_input = prompt("Please enter the directions and steps");

var user_input_split = user_input.split(" ");

function changeDirection(steps, direction) {
switch(direction) {
  case "S":
    temp = queen.position.x;
    temp2 = queen.position.y + steps;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "SE":
    temp = queen.position.x + steps;
    temp2 = queen.position.y + steps;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "SW":
    temp = queen.position.x - steps;
    temp2 = queen.position.y + steps;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "N":
    temp = queen.position.x;
    temp2 = queen.position.y - steps;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "NE":
    temp = queen.position.x + steps;
    temp2 = queen.position.y - steps;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "NW":
    temp = queen.position.x - steps;
    temp2 = queen.position.y - steps;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "E":
    temp = queen.position.x + steps;
    temp2 = queen.position.y;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
    
  case "W":
    temp = queen.position.x - steps;
    temp2 = queen.position.y;
    if(boundaryCheck(temp, temp2)) {
      queen.position.x = temp
      queen.position.y = temp2
      console.log(queen.position.x, queen.position.y);
    }
    else {
      console.log("Crossing the boundary")
    }
    updatePosition(temp, temp2);
    break;
}
}

function boundaryCheck(position, position2) {
  if(position >= 0 && position <= 7 && position2 >= 0 && position2 <= 7){
    return true;
  }
  else{
    return false;
  }
}

function updatePosition(co_ordinate, co_ordinate2) {
  switch(co_ordinate) {
    case 0:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("a8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("a7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("a6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("a5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("a4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("a3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("a2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("a1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 1:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("b8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("b7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("b6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("b5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("b4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("b3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("b2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("b1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 2:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("c8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("c7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("c6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("c5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("c4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("c3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("c2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("c1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 3:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("d8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("d7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("d6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("d5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("d4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("d3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("d2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("d1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 4:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("e8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("e7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("e6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("e5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("e4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("e3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("e2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("e1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 5:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("f8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("f7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("f6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("f5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("f4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("f3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("f2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("f1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 6:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("g8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("g7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("g6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("g5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("g4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("g3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("g2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("g1");
        console.log(queen.whereabouts);
      }
      break;
      
      case 7:
      if(co_ordinate2 == 0){
        queen.whereabouts.push("h8");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 1){
        queen.whereabouts.push("h7");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 2){
        queen.whereabouts.push("h6");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 3){
        queen.whereabouts.push("h5");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 4){
        queen.whereabouts.push("h4");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 5){
        queen.whereabouts.push("h3");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 6){
        queen.whereabouts.push("h2");
        console.log(queen.whereabouts);
      }
      else if(co_ordinate2 == 7){
        queen.whereabouts.push("h1");
        console.log(queen.whereabouts);
      }
      break;
  }
}

function moveForward() {
  queen.position.x = queen.position.x + 1;
  console.log(queen.position.x, queen.position.y) 
}

function jumpMoveForward(steps) {
  queen.position.x = queen.position.x + steps;
  console.log(queen.position.x, queen.position.y) 
}


for (index = 0; index < user_input_split.length; index++) { 
  var forDirection = user_input_split[index];
  var steps = Number(forDirection.slice(-1));
  var direction = "";
  if(forDirection.length == 3){
    direction = forDirection.slice(0,2);
  }
  else{
    direction = forDirection.slice(0,1);
  }
  changeDirection(steps, direction);
}