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
function afficherAcceuil() {
  console.log ('==================================================================');
  console.log ('        JOURNAL MÉTÉOROLOGIQUE DE LA FERME');
   console.log ('       Suivi agroclimatique de la ferme pédagogique');
   console.log ('=================================================================')
   }
   function afficherMenu() {
console.log('');
console.log('--------------------- MENU --------------------- ');
console.log('1. Ajouter un relevé');
console.log('2. Lister les relevés');
console.log('3. Rechercher (identifiant, date, journées pluvieuses)');
console.log('4. Trier (température, pluie)');
console.log('5. Synthèse de la série');
console.log('0. Quitter');
}
 async function demanderSaisieReleve() {
  console.log('\n--- Ajouter un relevé ---');
  const id = await demander('Identifiant (ex. M11) : ');
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

async function ajouter(releves) {
  const saisie = await demanderSaisieReleve();
  if (saisie === null) return false;
  const erreurs = ajouterReleve(releves, saisie);
  if (erreurs.length > 0) {
    console.log('Relevé refusé :');
    erreurs.forEach((erreur) => console.log(`  - ${erreur}`));
    console.log(`Le journal compte toujours ${releves.length} relevé(s).`);
    return true;
  }
  await enregistrerJson(FICHIER_DONNEES, releves);
  console.log(`Relevé ${saisie.id} ajouté. Le journal compte ${releves.length} relevé(s).`);
  return true;
}

function lister(releves) {
  console.log(`\n--- Liste des relevés (${releves.length}) ---`);
  console.log(listerReleves(releves));
}

async function rechercher(releves) {
  console.log('\n--- Rechercher ---');
  console.log('1. Par identifiant');
  console.log('2. Par date');
  console.log(`3. Les journées pluvieuses (au moins ${SEUIL_JOUR_PLUVIEUX} mm)`);
  const choix = await demander('Votre choix : ');
  if (choix === null) return false;

  if (choix === '1') {
    const idSaisi = await demander('Identifiant : ');
    if (idSaisi === null) return false;
    const id = idSaisi.toUpperCase();
    const releve = trouverParId(releves, id);
    console.log(releve ? formaterReleve(releve) : `Relevé ${id} introuvable.`);
  } else if (choix === '2') {
    const date = await demander('Date (AAAA-MM-JJ) : ');
    if (date === null) return false;
    const releve = trouverParDate(releves, date);
    console.log(releve ? formaterReleve(releve) : `Relevé du ${date} introuvable.`);
  } else if (choix === '3') {
    const resultat = joursPluvieux(releves, SEUIL_JOUR_PLUVIEUX);
    console.log(`${resultat.length} journée(s) avec au moins ${SEUIL_JOUR_PLUVIEUX} mm de pluie :`);
    console.log(listerReleves(resultat));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
  return true;
}

async function trier(releves) {
  console.log('\n--- Trier ---');
  console.log('1. Par température croissante');
  console.log('2. Par pluie croissante');
  console.log('3. Par température décroissante (bonus)');
  const choix = await demander('Votre choix : ');
  if (choix === null) return false;

  let resultat;
  if (choix === '1') {
    resultat = trierParTemperature(releves);
  } else if (choix === '2') {
    resultat = trierParPluie(releves);
  } else if (choix === '3') {
    resultat = trierParTemperatureDecroissante(releves);
  } else {
    console.log('Choix inconnu : retour au menu.');
    return true;
  }
  console.log(listerReleves(resultat));
  return true;
}

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
  const plusChaude = journeeLaPlusChaude(releves);
  console.log(`Journée la plus chaude : ${plusChaude ? formaterReleve(plusChaude) : 'aucune donnée'}`);
  console.log('Rappels :');
  console.log('  - Quelques jours de relevés forment une courte série météo : ils ne décrivent pas le climat de la région.');
  console.log('  - Le seuil de 10 mm est une catégorie d’exercice : il ne prévoit ni inondation ni stress hydrique.');
  console.log("  - L'humidité relative de l'air (en %) n'est pas l'humidité du sol.");
}

async function supprimer(releves) {
  const idSaisi = await demander('Identifiant : ');
  if (idSaisi === null) return false;
  const id = idSaisi.toUpperCase();
  const retire = supprimerReleve(releves, id);
  if (!retire) {
    console.log(`Relevé ${id} introuvable.`);
    return true;
  }
  await enregistrerJson(FICHIER_DONNEES, releves);
  console.log(`Relevé ${id} supprimé. Le journal compte ${releves.length} relevé(s).`);
  return true;
}

async function modifier(releves) {
  const idSaisi = await demander('Identifiant : ');
  if (idSaisi === null) return false;
  const id = idSaisi.toUpperCase();
  const champ = await demander('Champ à modifier (date, temperatureC, pluieMm, humiditeAirPct) : ');
  if (champ === null) return false;
  const valeur = await demander('Nouvelle valeur : ');
  if (valeur === null) return false;

  const erreurs = modifierReleve(releves, id, champ, valeur);
  if (erreurs.length > 0) {
    console.log('Modification refusée :');
    erreurs.forEach((erreur) => console.log(`  - ${erreur}`));
    return true;
  }
  await enregistrerJson(FICHIER_DONNEES, releves);
  console.log(`Relevé ${id} modifié.`);
  return true;
}

async function main() {
  ouvrirSaisie();
  try {
    console.log('==================================================');
    console.log('   JOURNAL MÉTÉOROLOGIQUE DE LA FERME');
    console.log('   Suivi agroclimatique de la ferme pédagogique');
    console.log('==================================================');

    let releves;
    try {
      releves = await chargerJson(FICHIER_DONNEES);
      console.log(`${releves.length} relevé(s) chargé(s) depuis ${FICHIER_DONNEES}.`);
    } catch (erreur) {
      console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le journal démarre vide.`);
      releves = [];
    }

    let continuer = true;
    while (continuer) {
      afficherMenu();
      const choix = await demander('Votre choix : ');
      if (choix === null || choix === '0') {
        console.log('Au revoir !');
        break;
      }

      try {
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
          case '6':
            continuer = await supprimer(releves);
            break;
          case '7':
            continuer = await modifier(releves);
            break;
          default:
            console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
        }
      } catch (erreur) {
        if (String(erreur.message).startsWith('TODO')) {
          console.log(`À compléter : ${erreur.message}`);
        } else {
          console.log(`Erreur inattendue : ${erreur.message}`);
        }
      }
    }
  } finally {
    fermerSaisie();
  }
}

main();