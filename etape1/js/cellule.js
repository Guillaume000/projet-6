class Cellule {
    constructor(ligneIndex, colonneIndex) {
        this.ligne = ligneIndex;
        this.colonne = colonneIndex;

        this.personnage = 0;
        this.arme = 0;
        this.mur = 0;
    }
    
    get getMur() {     
        return this.mur;
    }
        
    get getArme() {
        return this.arme;
    }
    
    get getPersonnage() {
        return this.personnage;
    }
    
    get getLigne() {
        return this.ligne;
    }
    
    get getColonne() {
        return this.colonne;
    }
    
    
    set setPersonnage(value) {
        this.personnage = value;
    }
    
    set setArme(value) {
        this.arme = value;
    }
    
    set setCellule(value) {
        this.cellule = value;
    }
    
    set setMur(value) {
        this.mur = value;
    }
}









