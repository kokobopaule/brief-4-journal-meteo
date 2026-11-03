# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | M08 |
| date | date du relevé | texte|format AAAA-MM-JJ, date valide | — |2026-10-22|
| temperatureC|Température du jour | nombre| nombre valide , négatif/décimal possible |°C |26 |
| pluieMm | pluie|nombre | >= 0|mm | 15|
| humiditeAirPct| Humidité relative de l'air|nombre |entre 0 et 100 |% | 85|

**Listes de valeurs autorisées** : 

**Sources** : SUJET.md, donnees/releves.json, fiche station
