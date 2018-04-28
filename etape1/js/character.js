class Character {
    constructor(characterName, lifePoints, position, weapon, picture) {
    this.characterName = characterName;
    this.lifePoints    = lifePoints;
    this.position      = position;
    this.weapon        = weapon;
    this.picture       = picture;

    this.characterGenerator =
        function() {
            if(characterName == "Faucheuse") {
                $(reaper).addClass(picture);
            }
            if(characterName == "Monstre") {
                $(monster).css('background', 'red');
            }
        }

    }
}
