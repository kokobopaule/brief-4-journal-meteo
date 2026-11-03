# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | jour 1 | 02/11/2026 |https://github.com/kokobopaule/brief-4-journal-meteo.git |
| Fiche 2 : lire et écrire le JSON | jour 2| 03/11/2026| stockage.js|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs |jour 2 | 03/11/2026 |registre.js |
| Fiche 4 : rechercher et trier ; choix 3 et 4 |jour 2 | 03/11/2026 | recherche.js |
| Fiche 5 : synthèse ; choix 5 | jour 2 | 03/11/2026 | synthese.js |
| Tests par un camarade ; mes propres tests | | | |
| Fiche agronomique ; README ; documents | | | |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | | | |
| Bonus | | | |

Blocages
 le message : ✖ listerReleves écrit une ligne par relevé (0.0989ms)
  Error: TODO : coder listerReleves dans src/registre.js
  j'ai essayé : j'ai utilié map pour appeler formaterRelevé sur chaque relevé et join('\n') pour transformer le tableau lignes en une chaine de text et separer chaque ligne par un retour a la ligne
  la solution : ✔ listerReleves écrit une ligne par relevé (0.2002ms)
  
  le message : ✖ listerReleves affiche un message si le journal est vide (2.0751ms)
  j'ai essayé : j'ai ajouté l'accent sur relevé parce que j'avais pas mis et j'ai ajouté un point final apres " enregistré "
  solution  : ✔ listerReleves affiche un message si le journal est vide (0.1554ms)
