class Cell {
    constructor(lineIndex, columnIndex) {
        this.line   = lineIndex;
        this.column = columnIndex;

        this.character = 0;
        this.weapon   = 0;
        this.wall     = 0;
    }
    
    get getWall() {     
        return this.wall;
    }
        
    get getWeapon() {
        return this.weapon;
    }
    
    get getcharacter() {
        return this.character;
    }
    
    get getLine() {
        return this.line;
    }
    
    get getColumn() {
        return this.column;
    }
    
    
    set setcharacter(value) {
        this.character = value;
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









