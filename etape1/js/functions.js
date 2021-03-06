// Return a board of random nbIndex 
function randomIndex(nbIndex, width, height, occupiedIndex, unjoined) {
    var board = [];
    var counter = 0;
    var chanceIndex;

    while (counter != nbIndex) {
        chanceIndex = Math.floor(Math.random() * (width * height) + 1);

        if (board.indexOf(chanceIndex) > -1 || occupiedIndex.indexOf(chanceIndex) > -1) continue; {
            board.push(chanceIndex);

            var line = Math.trunc(chanceIndex / width);
            var column = (chanceIndex % width) - 1;

            if (unjoined) {
                if (nbIndex == nbIndex) {
                    if (column < (width - 1)) {
                        occupiedIndex.push(chanceIndex + 1);
                    }
                    if (column > 0) {
                        occupiedIndex.push(chanceIndex - 1);
                    }
                    if (line < (height - 1)) {
                        occupiedIndex.push(chanceIndex + width);
                    }
                    if (line > 0) {
                        occupiedIndex.push(chanceIndex - width);
                    }
                    if (column < (width - 1) && line < (height - 1)) {
                        occupiedIndex.push(chanceIndex + width + 1);
                    }
                    if (column > 0 && line < (height - 1)) {
                        occupiedIndex.push(chanceIndex + width - 1);
                    }
                    if ((line > 0) && width > (width - 1)) {
                        occupiedIndex.push(chanceIndex - width + 1);
                    }
                    if (column > 0 && line > 0) {
                        occupiedIndex.push(chanceIndex - width - 1);
                    }
                }
            }
            counter++;
        }
    }
    return board;
}
