class Board {
    constructor(width, height, wall, caracter, weapon) {
    this.width = width;
    this.height = height;
    this.wall = wall;
    this.caracter = caracter;
    this.weapon = weapon;
        
    // Add each object (wall, caracter, weapon)
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
        
        this.objectGenerator(wall, width, height, grid);
        
//*********************** Generate weapons **************************
        
        this.objectGenerator(weapon, width, height, grid);
        
//*********************** Generate caracters ************************
        
        this.objectGenerator(caracter, width, height, grid);
             
    } 
    
    this.objectGenerator = function(object, width, height, grid) {
        var singleBox = true;  
        
        do {
            var list = randomIndex(object, width, height, this.occupiedCells); 
            
            for(var a = 0; a < list.length; a++) {
                var index = list[a];
               
                if(!this.occupiedCells.includes(index)) {
                    this.occupiedCells.push(index);
                } else {
                    singleBox = false;
                    alert("Problème de case");
                }
               
                var line = Math.trunc(index / width);
                var column = (index % width) -1;

                if((column < 0) && (line > 0)) {
                    line = line -1;
                    column = 9;
                } else if((column < 0) && (line == 0)) {
                     line = 0;
                     column = 0;
                }
               
                if(object == wall) {
                    //console.log("wall");
                    grid[line][column].setWall = 1;
                    //console.log($("#cell-" + line + '-' + column).addClass('wallBox'));
                } else if(object == weapon) {
                    //console.log("weapon");
                    grid[line][column].setWeapon = 1;
                    //console.log($("#cell-" + line + '-' + column).addClass('weaponBox'));
                } else if(object == caracter) {
                    //console.log("caracter");
                    grid[line][column].setCaracter = 1;
                    /*console.log(*/$("#cell-" + line + '-' + column).addClass('caracterBox')/*)*/;
                    
                    //console.log(grid[line] && grid[column].includes(grid[line][column].setCaracter = 1));
                    
                    // Pour que les caracters ne soient pas côte à côte
                    /*if() {
                        alert("STOP");
                        //newDraw(board, object, width, height);
                    }*/
                }
                //console.log(grid[line][column]);
            } 
            
        } while(!singleBox)
            
    return grid[line][column];
    }
    
    }   
}
