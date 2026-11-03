# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés |post et depot  | 2026-11-02 | PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> git init
Initialized empty Git repository in C:/Users/DELL/Documents/brief-4-journal-meteo-main/.git/
PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'SUJET.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/dictionnaire-donnees.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/fiche-agronomique.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/fiche-individuelle.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/journal-recherche.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/releve-tests.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/taches.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'donnees/releves.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/1-concevoir.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/2-donnees-json.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/3-ajouter-lister.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/4-rechercher-trier.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/5-synthese.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/6-finaliser.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'fiches/7-bonus.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/bonus.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/outils.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/recherche.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/registre.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/saisie.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/stockage.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/synthese.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/bonus.test.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/donnees-test.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/outils.test.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/recherche.test.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/registre.test.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/stockage.test.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'test/synthese.test.js', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> git commit -m "Départ du brief 4 : kit fourni"
[master (root-commit) a877cf5] Départ du brief 4 : kit fourni
 33 files changed, 1293 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 SUJET.md
 create mode 100644 app.js
 create mode 100644 docs/dictionnaire-donnees.md
 create mode 100644 docs/fiche-agronomique.md
 create mode 100644 docs/fiche-individuelle.md
 create mode 100644 docs/journal-recherche.md
 create mode 100644 docs/releve-tests.md
 create mode 100644 docs/taches.md
 create mode 100644 donnees/releves.json
 create mode 100644 fiches/1-concevoir.md
 create mode 100644 fiches/2-donnees-json.md
 create mode 100644 fiches/3-ajouter-lister.md
 create mode 100644 fiches/4-rechercher-trier.md
 create mode 100644 fiches/5-synthese.md
 create mode 100644 fiches/6-finaliser.md
 create mode 100644 fiches/7-bonus.md
 create mode 100644 package.json
 create mode 100644 src/bonus.js
 create mode 100644 src/outils.js
 create mode 100644 src/recherche.js
 create mode 100644 src/registre.js
 create mode 100644 src/saisie.js
 create mode 100644 src/stockage.js
 create mode 100644 src/synthese.js
 create mode 100644 test/bonus.test.js
 create mode 100644 test/donnees-test.json
 create mode 100644 test/outils.test.js
 create mode 100644 test/recherche.test.js
 create mode 100644 test/registre.test.js
 create mode 100644 test/stockage.test.js
 create mode 100644 test/synthese.test.js
PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> git branch -M main
PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> git remote add origin https://github.com/kokobopaule/brief-4-journal-meteo.git
PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> ^C
PS C:\Users\DELL\Documents\brief-4-journal-meteo-main> git push -u origin main
Enumerating objects: 39, done.
Counting objects: 100% (39/39), done.
Delta compression using up to 12 threads
Compressing objects: 100% (37/37), done.
Writing objects: 100% (39/39), 27.40 KiB | 3.04 MiB/s, done.
Total 39 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/kokobopaule/brief-4-journal-meteo.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.|
| Fiche 2 : lire et écrire le JSON |convertion du JSON |2026-11-03 |  extension : enregistrerJson écrit un JSON indenté de 2 espaces (7.9097ms)
✔ extension : chargerJson relit ce qu’enregistrerJson a écrit (2.9969ms)
✔ extension : chargerJson laisse remonter l’erreur « fichier absent » (ENOENT) (1.6783ms)
ℹ tests 3
ℹ suites 0
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 76.8341|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs |Le menu ; ajouter et lister ; choix 1 et 2 |2026-11-03 | ✔ formaterReleve écrit un relevé sur une ligne (0.6254ms)
✖ listerReleves écrit une ligne par relevé (0.1369ms)
✖ listerReleves affiche un message si le journal est vide (0.0592ms)
✖ trouverParId : M08 renvoie le relevé du 2026-10-22 avec 15 mm de pluie (0.0837ms)
✖ trouverParId : M99 est introuvable (undefined) (0.0697ms)
✖ verifierReleve accepte une saisie valide (0.0635ms)
✖ verifierReleve refuse une pluie négative (0.0574ms)
✖ verifierReleve refuse une humidité de 101 % (0.0475ms)
✖ verifierReleve refuse un identifiant déjà utilisé (0.0818ms)
✖ creerReleve convertit les trois mesures en nombres (0.1326ms)
✖ ajouterReleve ajoute une saisie valide à la fin du journal (0.3796ms)
✖ ajouterReleve refuse un deuxième M01 : le journal reste à dix relevés (0.1395ms)
✖ ajouterReleve refuse une pluie négative sans ajouter de ligne (0.0768ms)
ℹ tests 13
ℹ suites 0
ℹ pass 1
ℹ fail 12
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 74.598|
| Fiche 4 : rechercher et trier ; choix 3 et 4 | | | |
| Fiche 5 : synthèse ; choix 5 | | | |
| Tests par un camarade ; mes propres tests | | | |
| Fiche agronomique ; README ; documents | | | |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | | | |
| Bonus | | | |

**Blocages** (le message exact, ce que j'ai essayé, la solution) : ✏️
