var game, form, player, database, gameState = 0, playerCount;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start()

  
}

function draw(){
  background("white");
  
    
  
}

