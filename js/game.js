
window.onload = function() {

    const score = document.getElementById('score');
    let board = document.getElementById("board");
    let boardCTX = board.getContext("2d");
    
    setInterval(game, 100);

    document.addEventListener("keydown", keyPush);

    const velocity = 1;

    let scoreValue = 0;

    let velocityX = 0;
    let velocityY = 0;

    let coordX = 10;
    let coordY = 10;

    let lengthBlock = 20;
    let quantityBlocks = 30;

    let appleX = 15;
    let appleY = 15;

    let trail = [];
    tail = 5;
    
    function game() {

        coordX += velocityX;
        coordY += velocityY;
        if (coordX < 0) {
            coordX = quantityBlocks - 1;
        }
        if (coordX > quantityBlocks - 1) {
            coordX = 0;
        }
        if (coordY < 0) {
            coordY = quantityBlocks - 1;
        }
        if (coordY > quantityBlocks - 1) {
            coordY = 0;
        }

          boardCTX.fillStyle = 'green';
          boardCTX.fillRect (0,0, board.width, board.height);

          boardCTX.fillStyle = "red";
          boardCTX.fillRect(appleX * lengthBlock, appleY * lengthBlock, lengthBlock, lengthBlock);

          boardCTX.fillStyle = "gray";
          for(let i = 0; i < trail.length; i++) {
          boardCTX.fillRect ( trail[i].x * lengthBlock, trail[i].y * lengthBlock, lengthBlock, lengthBlock);

            if (coordX == trail[i].x && coordY == trail[i].y && tail > 5) {
                alert("Game over!\n Score: "+scoreValue);
                tail = 5;
                scoreValue = 0;
                score.innerHTML = scoreValue;
                velocityX = 0;
                velocityY = 0;
            }
          }
          trail.push({x: coordX, y: coordY});
          while (trail.length > tail) {
            trail.shift();
          };
            if (coordX == appleX && coordY == appleY) {
                appleX = Math.floor(Math.random() * quantityBlocks);
                appleY = Math.floor(Math.random() * quantityBlocks);
                tail++;
                scoreValue += 1;
                score.innerHTML = scoreValue;
            }
    }

    function keyPush(e) {
        switch (e.keyCode) {
            case 37:
                velocityX = -velocity;
                velocityY = 0;
                break;
            case 38:
                velocityX = 0;
                velocityY = -velocity;
                break;
            case 39:
                velocityX = velocity;
                velocityY = 0;
                break;
            case 40:
                velocityX = 0;
                velocityY = velocity;
                break;
        }
    }
}