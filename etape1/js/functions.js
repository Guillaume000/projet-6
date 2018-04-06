// Return a board of random nbIndex 
function randomIndex(nbIndex, width, height, occupiedIndex) {
    var board = [];
    var counter = 0;
    var chanceIndex; 

    while(counter != nbIndex) {
        chanceIndex = Math.floor(Math.random() * (width * height) +1);

        if(board.indexOf(chanceIndex) > -1 || occupiedIndex.indexOf(chanceIndex) > -1) continue; {
            board.push(chanceIndex);
            counter++;
        }
    }
    return board;
}

function newDraw(board, object, width, height) {
    // I clean my board
    board.splice(0);

    console.log(board);

    // i fill my board again
    for(var z = 0; z < object; z++) {
        board.push(randomIndex(object, width, height)[z]);
    }
    console.log(board);
    return board;
}




























