class Board {
    constructor(width, height, wall, character, weapon) {
    this.width     = width;
    this.height    = height;
    this.wall      = wall;
    this.character = character;
    this.weapon    = weapon;

    // Add each object (wall, character, weapon)
    this.occupiedCells = [];

    this.gridGenerator = function() {
        var grid = [];
        for(var i = 0; i < width; i++) {
            grid[i] = [];
            $('#board').append('<div class="row" id="row-' + i + '">');
            for(var j = 0; j < height; j++) {
                grid[i][j] = new Cell(i, j);
                $('#row-' + i).append('<div class="cell" id="cell-'+ i + '-' + j +'">'+'</div>');
                //console.table(grid[i][j]);
            }
            $('.row').append('</div>');
        }
//*********************** Generate walls ****************************

        this.objectGenerator(wall, width, height, grid, false);

//*********************** Generate weapons **************************

        this.objectGenerator(weapon, width, height, grid, false);

//*********************** Generate characters ************************

        this.objectGenerator(character, width, height, grid, true);

    }

    this.objectGenerator = function(object, width, height, grid, unjoined) {
        var singleBox = true;
        var originalObject = object;

        do {
            singleBox = true;

            var list = randomIndex(object, width, height, this.occupiedCells, unjoined);

            for(var a = 0; a < list.length; a++) {
                var index = list[a];
                var line = Math.trunc(index / width);
                var column = (index % width) -1;

                if(!this.occupiedCells.includes(index)) {
                    this.occupiedCells.push(index);
                } else {
                    singleBox = false;
                    list.splice(a, 1);
                    this.occupiedCells.pop();
                    index = randomIndex(1, width, height, this.occupiedCells, unjoined);
                    list.push(index[0]);
                    singleBox = true;
                }

                if((column < 0) && (line > 0)) {
                    line = line -1;
                    column = 9;
                } else if((column < 0) && (line == 0)) {
                     line = 0;
                     column = 0;
                }

                if(object == wall) {
                    grid[line][column].setWall = 1;
                    /*console.log(*/$("#cell-" + line + '-' + column).addClass('wallBox')/*)*/;
                } else if(object == weapon) {
                    grid[line][column].setWeapon = 1;
                    $("#cell-" + line + '-' + column).addClass('fist');


                /*if(fist.weaponName == "Poing") {
                    var position = $("#cell-" + line + '-' + column).addClass('fist');
                    console.log(position);
                }

                if(remote.weaponName == "Télécommande") {
                    var position = $("#cell-" + line + '-' + column).addClass('remote');
                    console.log(position);
                }

                if(newspaper.weaponName == "Journal") {
                    var position = $("#cell-" + line + '-' + column).addClass('newspaper');
                    console.log(position);
                }

                if(broom.weaponName == "Balai") {
                    var position = $("#cell-" + line + '-' + column).addClass('broom');
                    console.log(position);
                }*/




                } else if(object == character) {
                    grid[line][column].setcharacter = 1;

                    $("#cell-" + line + '-' + column).addClass('reaper');

                    //console.log(Object.entries(reaper));
                }
                //console.log(grid[line][column]);
            }

            /*if(object == character) {
                if(monster.characterName == "Monstre") {
                   var position = $("#cell-" + line + '-' + column).addClass('monster').removeClass('reaper');
                }
            }*/

        } while(!singleBox)

    return grid[line][column];
    }

    }
}

var board      = new Board(10, 10, 5, 2, 4);
var fist       = new Weapon("Poing", 10);
var remote     = new Weapon("Télécommande", 30);
var newspaper  = new Weapon("Journal", 80);
var broom      = new Weapon("Balai", 50);
var reaper     = new Character("Faucheuse", 100, 0, fist, '.reaper');
var monster    = new Character("Monstre", 100, 1, fist, '.monster');

board.gridGenerator();
fist.weaponGenerator();
remote.weaponGenerator();
newspaper.weaponGenerator();
broom.weaponGenerator();
reaper.characterGenerator();
monster.characterGenerator();



/*for(var prop in reaper) {
    console.log(prop + " : " + reaper[prop]);
}*/
