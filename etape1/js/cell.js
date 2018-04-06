class Cell {
    constructor(lineIndex, columnIndex) {
        this.line = lineIndex;
        this.column = columnIndex;

        this.caracter = 0;
        this.weapon = 0;
        this.wall = 0;
    }
    
    get getWall() {     
        return this.wall;
    }
        
    get getWeapon() {
        return this.weapon;
    }
    
    get getCaracter() {
        return this.caracter;
    }
    
    get getLine() {
        return this.line;
    }
    
    get getColumn() {
        return this.column;
    }
    
    
    set setCaracter(value) {
        this.caracter = value;
    }
    
    set setWeapon(value) {
        this.weapon = value;
    }
    
    set setCell(value) {
        this.cell = value;
    }
    
    set setWall(value) {
        this.wall = value;
    }
}









