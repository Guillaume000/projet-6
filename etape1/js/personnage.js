class Personnage {
    constructor(nomPersonnage, pointsVie) {
    this.nomPersonnage = nomPersonnage;
    this.pointsVie = pointsVie;
      
    this.creerPersonnage = 
        function() {
            console.log("Ce personnage s'appelle " + this.nomPersonnage + " et il a " + this.pointsVie + " points de vie");
        }
    }
}
