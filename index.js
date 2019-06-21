const pika = $("#pika");
let currentPosition = {
   r: 1.,
   c: 1
}

document.onkeydown = function (ev) {
       switch(ev.key) {
           case "ArrowUp":
               if (currentPosition.r=== 1) {
                   return
               }
               moveForward();
           break;
           case "ArrowDown":
               if (currentPosition.r === 10) {
                   return
               }
               moveBackward();
           break;
           case "ArrowLeft":
               if (currentPosition.c === 1) {
                   return
               }
               moveLeft();
           break;
           case "ArrowRight":
               if (currentPosition.c === 10) {
                   return
               }
               moveRight();
           break;
       }
   }

function moveForward() {
   currentPosition.r--;
   updatePosition();
   console.log(currentPosition)
}

function moveBackward() {
   currentPosition.r++;
   updatePosition();
   console.log(currentPosition)
}

function moveLeft() {
   currentPosition.c--;
   updatePosition();
   console.log(currentPosition)
}

function moveRight() {
   currentPosition.c++;
   updatePosition();
   console.log(currentPosition)
}

function updatePosition() {
   $(`.r${currentPosition.r}c${currentPosition.c}`).append(pika);
}