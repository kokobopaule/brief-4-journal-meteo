# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

le responsable de la ferme pédagogique rassemble des relevés météo ( température , pluie , humidité de l'air) pour comprendre les conditions rencontrées pendant les activités. l'outil permet de saisir un relevé , le retrouver , trier la serie et la resumer, chaque relevé décrit la météo d'une journée ; dix jours forment une courte serie , pas un climat ( 30 ans en général). l'humidité relative de l'air n'est pas celle du sol.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/releves.json`
- [x] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [x] Lister les relevés, message si le journal est vide
- [x] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [x] Trier par température ou par pluie
- [x] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [ ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [ ] Bonus : tri par température décroissante, journée la plus chaude

## Données

donnees/releves.json , 10 relevés du 2026-10-15 au 2026-10-24 , chaque relevés contient cinq champs ( id , date, temperatureC, pluieMm et humiditeAirPct) (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), les unités. Rappelez qu'ils sont fictifs.*

## Limites

- Dix jours de relevés forment une courte série : ils ne décrivent pas le climat de la région (qui demande 30 ans de données).
- L'humidité mesurée est celle de l'air, pas celle du sol : elle ne dit pas si les cultures ont besoin d'eau.
- Les données sont fictives et viennent d'un seul point de mesure : on ne peut pas en tirer de conclusion pour une parcelle réelle.
- Il n'y a qu'un relevé par jour : on ne voit ni les pics de chaleur, ni la répartition de la pluie dans la journée.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

 kokobo paule, https://github.com/kokobopaule/brief-4-journal-meteo.git. Entraide : Coulibaly Salif, sur le calcul à la main dans la partie releve test.md
