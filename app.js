// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/releves.json';
async function afficherAccueil () {
  // 1. ACCEUIL ET CHARGEMENT DES DONNEES
  console.log ('==================================================================');
  console.log ('        JOURNAL MÉTÉOROLOGIQUE DE LA FERME');
   console.log ('       Suivi agroclimatique de la ferme pédagogique');
   console.log ('=================================================================');
}
function afficherMenu() { 
 console.log('\n--------------------- MENU ---------------------'); 
 console.log('1. Mettre un relevé'); 
 console.log('2. Donner la liste des relevés'); 
 console.log('3. Chercher (identifiant, date, journées pluvieuses)'); 
 console.log('4. Ranger (température, pluie)'); 
 console.log('5. Bilan de la série'); 
 console.log('0. Sortir'); 
}

// --- 2. FONCTIONS MÉTIER (Actions du menu) ---

// Demande à l'utilisateur de faire entrer les informations d'un nouveau relevé 
async function demanderSaisieReleve() { 
 console.log('\n--- Ajouter un relevé ---'); 
 const id = await demander('Identifiant (exemple M11) : '); 
 if (id === null) return null; 
 const date = await demander('Date du relevé (AAAA-MM-JJ) : '); 
 if (date === null) return null; 
 const temperatureC = await demander('Température en °C : '); 
 if (temperatureC === null) return null; 
 const pluieMm = await demander('Pluie en mm : '); 
 if (pluieMm === null) return null; 
 const humiditeAirPct = await demander("Humidité relative de l'air en % : "); 
 if (humiditeAirPct === null) return null;

return { id: id.toUpperCase(), date, temperatureC, pluieMm, humiditeAirPct }; 
}
// Option 1 : Mettre un relevé dans le journal et sauvegarder de façon asynchrone 
async function ajouter(releves) { 
const saisie = await demanderSaisieReleve(); 
if (saisie === null) 
  return false;

const erreurs = ajouterReleve(releves, saisie); 
if (erreurs.length > 0) { 
  console.log('Relevé refusé :'); 
  erreurs.forEach((erreur) => console.log(` - ${erreur}`)); 
  console.log(`Le journal compte toujours ${releves.length} relevé(s).`); 
  return true; 
}

await enregistrerJson(FICHIER_DONNEES, releves);
console.log(`Relevé ${saisie.id} ajouté avec succès. Le journal compte ${releves.length} relevé(s).`); 
return true; 
}

//Option 2 : Afficher tous les relevés
function lister(releves) {
 console.log(`\n--- Liste des relevés (${releves.length}) ---`);
 console.log(listerReleves(releves));
}

// Option 3 : Rechercher un relevé ou filtrer
async function rechercher(releves) {
console.log('\n--- Rechercher ---');
console.log('1. Par date');
console.log(`2. Les journées pluvieuses (au moins ${SEUIL_JOUR_PLUVIEUX} mm)`);
const choix = await demander('Votre choix : ');
if (choix === null) 
  return false;

if (choix === '1') {
  const date = await demander('Date (AAAA-MM-JJ) : ');
  if (date === null) return false;
  const releve = trouverParDate(releves, date);
 console.log(releve ? formaterReleve(releve) : `Relevé du ${date} introuvable.`);
 } else if (choix === '2') {
    const resultat = joursPluvieux(releves, SEUIL_JOUR_PLUVIEUX);
  console.log(`${resultat.length} journée(s) avec au moins ${SEUIL_JOUR_PLUVIEUX} mm de pluie :`);
  console.log(listerReleves(resultat));
 } else {
   console.log('Choix inconnu : retour au menu.');
}
 return true;
}
// Option 4 : Trier les relevés
async function trier(releves) {
 console.log('\n--- Trier ---');
 console.log('1. Par température croissante');
 console.log('2. Par pluie croissante');
const choix = await demander('Votre choix : ');
if (choix === null) return false;

 let resultat;
 if (choix === '1') {
   resultat = trierParTemperature(releves);
} else if (choix === '2') {
   resultat = trierParPluie(releves);
 } else {
  console.log('Choix inconnu : retour au menu.');
 return true;
 }
 console.log(listerReleves(resultat));
 return true;
}
// Option 5 : Afficher la synthèse statistique
function afficherSynthese(releves) {
 const moyenne = moyenneTemperature(releves);
 const minMax = temperatureMinMax(releves);
  const nombreJoursPluvieux = joursPluvieux(releves, SEUIL_JOUR_PLUVIEUX).length;

 console.log('\n--- Synthèse de la série ---');
 console.log(`Nombre de relevés : ${releves.length}`);
 console.log(`Température moyenne : ${moyenne === null ? 'aucune donnée' : `${moyenne} °C`}`);
 if (minMax === null) {
 console.log('Températures minimale et maximale : aucune donnée');
 } else {
   console.log(`Température minimale : ${minMax.min} °C · maximale : ${minMax.max} °C`);
 }
 console.log(`Cumul de pluie : ${cumulPluie(releves)} mm`);
console.log(`Journées avec au moins ${SEUIL_JOUR_PLUVIEUX} mm de pluie : ${nombreJoursPluvieux}`);
}

// --- 3. FONCTION PRINCIPALE (Point d'entrée du programme) ---

async function main() {
  ouvrirSaisie();
 try {
  afficherAccueil();

 // Chargement initial des données depuis le fichier JSON
 let releves = [];
 try {
  releves = await chargerJson(FICHIER_DONNEES);
  console.log(`${releves.length} relevé(s) chargé(s) depuis ${FICHIER_DONNEES}.`);
} catch (erreur) {
console.log(`Impossible de lire ${FICHIER_DONNEES}. Le journal démarre vide.`);
   releves = [];
 }

 // Boucle principale du menu interactif
let continuer = true;
 while (continuer) {
 afficherMenu();
  const choix = await demander('Votre choix : ');

 if (choix === null || choix === '0') {
 console.log('Au revoir !');
  break;
 }

switch (choix) {
  case '1':
 continuer = await ajouter(releves);
  break;
 case '2':
  lister(releves);
  break;
case '3':
  continuer = await rechercher(releves);
   break;
  case '4':
  continuer = await trier(releves);
   break;
 case '5':
  afficherSynthese(releves);
  break;
 default:
 console.log(`Choix inconnu : « ${choix} ». Veuillez choisir une option valide.`);
    }
  }
 } finally {
 fermerSaisie();
 }
}
// Lancement de l'application
main();