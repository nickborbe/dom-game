let gridX = 1;
let gridY = 1;
let stringGrid = 'r' + gridX + 'c' + gridY;
const pikaURL = '<img src="pika.gif">';


function pikaMove() {
   $('.'+stringGrid).html(pikaURL);
 
} 

function removePika(){
  $('.'+stringGrid).html('');
}

function updateGrid(){
  stringGrid = 'r' + gridX + 'c' + gridY;
}

document.onkeydown = function(e){

  switch(e.key){
    case "ArrowUp":
      if(gridX > 1){
        removePika();
        gridX--;
        updateGrid();
        pikaMove();
      }
      break;
      case "ArrowDown":
      if(gridX < 10){
        removePika();
        gridX++;
        updateGrid();
        pikaMove();
      }
      break;
      case "ArrowLeft":
      if(gridY > 1){
        removePika();
        gridY--;
        updateGrid();
        pikaMove();
      }
      break;
      case "ArrowRight":
      if(gridY < 10){
        removePika();
        gridY++;
        updateGrid();
        pikaMove();
      }
      break;
  }
  }

