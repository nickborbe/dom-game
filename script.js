const elementWithTheGuy = $('#little-guy')
//find the span with this class and append little-guy to this element
let row = 1;
let col = 1;
let coordsClass = `r${row}c${col}`
document.onkeydown = function(e) {
  if(e.key == "ArrowUp") {
    if (row > 1) {
      console.log(`moving the little guy up`);
      row -= 1;
      moveTheLittleGuy(row, col)
    }
  }
  if(e.key == "ArrowDown") {
    if (row < 10 ) {
      console.log(`moving the little guy down`);
      row += 1;
      moveTheLittleGuy(row, col)
    }
  }
  if(e.key == "ArrowLeft") {
    if(col > 1) {
      console.log(`moving the little guy left`);
      col -= 1;
      moveTheLittleGuy(row, col)
    }
  }
  if(e.key == "ArrowRight") {
    if(col < 10) {
      console.log(`moving the little guy right`);
      col += 1;
      moveTheLittleGuy(row, col)
    }
  }
}
function moveTheLittleGuy (rowToMoveto, colToMoveTo) {
  let coordsClass = `.r${rowToMoveto}c${colToMoveTo}`
  console.log(coordsClass);
  $(coordsClass).append($('#little-guy'))
}