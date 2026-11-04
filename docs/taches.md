# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | jour 1 | 02/11/2026 |https://github.com/kokobopaule/brief-4-journal-meteo.git |
| Fiche 2 : lire et écrire le JSON | jour 2| 03/11/2026|  npm run test:stockage : 3 verts|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs |jour 3 | 04/11/2026 |npm run test:registre : 13 verts + choix 1 et 2 testés dans le menu |
| Fiche 4 : rechercher et trier ; choix 3 et 4 |jour 3| 04/11/2026 | 6 verts + choix 3 et 4 testés |
| Fiche 5 : synthèse ; choix 5 | jour 3| 04/11/2026 | 5 verts + choix 5 testé|
| Tests par un camarade ; mes propres tests |jour 3 | 04/11/2026 |npm run test : stockage , npm run test:registre , npm run test:recherche, npm run test:synthese |
| Fiche agronomique ; README ; documents |jour 2 |03/11/2026|fiche-agronomique.md , README.md |
| Dépôt cloné et lancé ailleurs ; démonstration répétée |jour 2 | 03/11/2026 |https://github.com/kokobopaule/brief-4-journal-meteo.git |
| Bonus | x | x | x |

***Blocages***
 1.le message : `Error: TODO : coder listerReleves dans src/registre.js`
  j'ai essayé : j'ai utilié `map` pour appeler `formaterReleve` sur chaque relevé et `join('\n')` pour transformer le tableau lignes en une chaine de text et separer chaque ligne par un retour a la ligne
  la solution : remplacer le `throw` par ce code ; le test <<listerReleves écrit une ligne par relevé >> passe.
  
  2.le message : ` AssertionError [ERR_ASSERTION]: Expected values to be strictly equal`
  j'ai essayé : j'ai ajouté l'accent sur `relevé` parce que j'avais pas mis et j'ai ajouté un point final après `enregistré`
  solution  : corriger les erreurs ; le test <<listerReleves affiche un message si le journal est vide >> passe.
