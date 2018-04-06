class Caracter {
    constructor(caracterName, lifePoints) {
    this.caracterName = caracterName;
    this.lifePoints = lifePoints;
      
    this.caracterGenerator = 
        function() {
            console.log("Ce personnage s'appelle " + this.caracterName + " et il a " + this.lifePoints + " points de vie");
        }
    }
}
