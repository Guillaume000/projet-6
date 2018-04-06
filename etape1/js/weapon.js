class Weapon {
    constructor(weaponName, damages, picture) {
    this.weaponName = weaponName;
    this.damages = damages;
    this.picture = picture;
     
    this.weaponGenerator = 
        function() {
            console.log("Cette arme s'appelle " + this.weaponName + ' et inflige ' + this.damages + " points de dégâts");
        }
    }
}
