class Arme {
    constructor(nomArme, degats, image) {
    this.nomArme = nomArme;
    this.degats = degats;
    this.image = image;
     
    this.genererArme = 
        function() {
            console.log("Cette arme s'appelle " + this.nomArme + ' et inflige ' + this.degats + " points de dégâts");
        }
    }
}
