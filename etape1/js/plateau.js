class Plateau {
    constructor(largeur, hauteur, mur, personnage, arme) {
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.mur = mur;
    this.personnage = personnage;
    this.arme = arme;
    // Ajouter chaque élément qui sera généré (mur, personage, arme)
    this.occupiedCells = [];
        
    
    // Génération de la grille
    this.creerGrille = function() {
        var grille = [];
        for(var i = 0; i < largeur; i++) {
        grille[i] = [];
            for(var j = 0; j < hauteur; j++) {
                grille[i][j] = new Cellule(i, j);
                //console.table(grille[i][j]);
            }   
        }
//*********************** Créer Murs *******************************
        
        this.creerObjet(mur, largeur, hauteur, grille);
        
//*********************** Créer Personnages ************************
        
        this.creerObjet(personnage, largeur, hauteur, grille);
        
//*********************** Créer Armes ******************************
        
        this.creerObjet(arme, largeur, hauteur, grille);
        
//************** Retirer le doublon du tableau *********************
        
        
        /*while(indiceMur == indicePersonnage || indiceMur == indiceArme || indicePersonnage == indiceArme) {
            alert("DOUBLON");
            console.log("Mur " + listeMurs);
            console.log("Personnage " + listePersonnages);
            console.log("Arme " + listeArmes);
            nouveauTirage(listePersonnages, personnage, largeur, hauteur);
            nouveauTirage(listeArmes, arme, largeur, hauteur);
            if(listeMurs != listePersonnages || listeMurs != listeArmes || listePersonnages != listeArmes) {
                break;
            }
        }
        
        // Pour que les personnages ne soient pas côte à côte
        if((listePersonnages[0] == listePersonnages[1] + 1) || (listePersonnages[0] == listePersonnages[1] - 1)) {
            //alert("STOP");
            nouveauTirage(listePersonnages, personnage, largeur, hauteur);
        }*/
        
        
        
        
        console.log(grille);
        
        } 
    this.creerObjet = function(objet, largeur, hauteur, grille) {
     var caseUnique = true;  
    do {
        
       var liste = indiceAleatoire(objet, largeur, hauteur, this.occupiedCells); 
       for(var a = 0; a < liste.length; a++) {

        var indice = liste[a];
        if(!this.occupiedCells.includes(indice)) {
            this.occupiedCells.push(indice);
        } else {
            caseUnique = false;
            alert("Problème de case");
        }
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
            grille[ligne][colonne].setMur = 1;
        } else if(objet == 2) {
            console.log("Personnage");
            grille[ligne][colonne].setPersonnage = 1;
        } else if(objet == 4) {
            console.log("Arme");
            grille[ligne][colonne].setArme = 1;
        }
        
        console.log(grille[ligne][colonne]);
        
       /*if(grille[ligne][colonne].getMur == 1 && grille[ligne][colonne].getPersonnage == 1 || grille[ligne][colonne].getMur == 1 && grille[ligne][colonne].getArme == 1 || grille[ligne][colonne].getPersonnage == 1 && grille[ligne][colonne].getArme == 1) {
            alert("Doublon");
            
            // Je vide mon tableau
            liste.splice(0);

            console.log(liste);

            // Je remplis à nouveau mon tableau
            for(var z = 0; z < objet; z++) {
                liste.push(indiceAleatoire(objet, largeur, hauteur)[z]);
            }
            console.log(liste);
            
        }*/
        
        /*if(grille[ligne][colonne].getMur == 1 && grille[ligne][colonne].getPersonnage == 1) {
            alert("Doublon");
            grille[ligne][colonne].setPersonnage = 0; 
            console.log(grille[ligne][colonne]);
            // Je vide mon tableau
            liste.splice(0);

            console.log(liste);

            // Je remplis à nouveau mon tableau
            for(var z = 0; z < objet; z++) {
                liste.push(indiceAleatoire(objet, largeur, hauteur)[z]);
            }
            
            grille[ligne][colonne].setPersonnage = 1; 
            console.log(liste);
            
        }*/
    } 
    } while(!caseUnique)
            
    
        
    
        
    return grille[ligne][colonne];
}

    
    }   
}


 
        
        /*while(tableau.length < Math.floor(Math.random() * 6 + 3)) {
            
            var caseHasard = Math.floor(Math.random() * this.mur);
            
            if(tableau.indexOf(caseHasard) > -1) continue; {
               tableau[tableau.length] = caseHasard; 
            }
            
            resultat = $(".cell").eq(caseHasard).addClass('caseGrise');
            
            console.log(caseHasard);
            console.log(resultat);
        }*/
        
        /*for(var i = 0; i < this.largeur; i++) {
            grille[i] = new Array();
            $('#plateau').append('<div class="row" id="row-' + i + '">');
            for(var j = 0; j < this.hauteur; j++) {
                grille[i][j] = new Cellule(i, j); "[" + i + "," + j + "]";
                $('#row-' + i).append('<div class="cell" id="cell-'+ i + '-' + j +'">'+'</div>');
            }
            $('.row').append('</div>');
        }*/
