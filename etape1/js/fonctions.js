// Retourne un tableau de nbindice aléatoire
function indiceAleatoire(nbIndice, largeur, hauteur, occupiedIndex) {
    var tableau = [];
    var compteur = 0;
    var indiceHasard; 

    while(compteur != nbIndice) {
        indiceHasard = Math.floor(Math.random() * (largeur * hauteur) +1);

        if(tableau.indexOf(indiceHasard) > -1 || occupiedIndex.indexOf(indiceHasard) > -1) continue; {
            
            tableau.push(indiceHasard);
            compteur++;
        }
    }
    return tableau;
}

function nouveauTirage(tableau, objet, largeur, hauteur) {
    // Je vide mon tableau
    tableau.splice(0);

    console.log(tableau);

    // Je remplis à nouveau mon tableau
    for(var z = 0; z < objet; z++) {
        tableau.push(indiceAleatoire(objet, largeur, hauteur)[z]);
    }
    console.log(tableau);
    return tableau;
}

/*function creerObjet(objet, largeur, hauteur, cadre) {
    var liste = indiceAleatoire(objet, largeur, hauteur); 
        
    for(var a = 0; a < liste.length; a++) {

        var indice = liste[a];

        //console.warn(indice);

        var ligne = Math.trunc(indice / largeur);
        var colonne = (indice % largeur) -1;

        if((colonne < 0) && (ligne > 0)) {
            ligne = ligne -1;
            colonne = 9;
        } else if((colonne < 0) && (ligne == 0)) {
            ligne = 0;
            colonne = 0;
        }
        //console.log(ligne);
        //console.log(colonne);
        
        if(objet == 5) {
            console.log("Mur");
            cadre[ligne][colonne].setMur = 1;
        } else if(objet == 2) {
            console.log("Personnage");
            cadre[ligne][colonne].setPersonnage = 1;
        } else if(objet == 4) {
            console.log("Arme");
            cadre[ligne][colonne].setArme = 1;
        }
        
        console.log(cadre[ligne][colonne]);
        
       /*if(cadre[ligne][colonne].getMur == 1 && cadre[ligne][colonne].getPersonnage == 1 || cadre[ligne][colonne].getMur == 1 && cadre[ligne][colonne].getArme == 1 || cadre[ligne][colonne].getPersonnage == 1 && cadre[ligne][colonne].getArme == 1) {
            alert("Doublon");
            
            // Je vide mon tableau
            liste.splice(0);

            console.log(liste);

            // Je remplis à nouveau mon tableau
            for(var z = 0; z < objet; z++) {
                liste.push(indiceAleatoire(objet, largeur, hauteur)[z]);
            }
            console.log(liste);
            
        }
        
        if(cadre[ligne][colonne].getMur == 1 && cadre[ligne][colonne].getPersonnage == 1) {
            alert("Doublon");
            cadre[ligne][colonne].setPersonnage = 0; 
            console.log(cadre[ligne][colonne]);
            // Je vide mon tableau
            liste.splice(0);

            console.log(liste);

            // Je remplis à nouveau mon tableau
            for(var z = 0; z < objet; z++) {
                liste.push(indiceAleatoire(objet, largeur, hauteur)[z]);
            }
            
            cadre[ligne][colonne].setPersonnage = 1; 
            console.log(liste);
            
        }
    }
    return cadre[ligne][colonne];
}*/



























