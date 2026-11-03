# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| comment convertir un text en tableau| claude.ai | readFile permet de lire le fichier et retourne une promesse resolue, le await attend que cette promesse soit resolue avant de passé a JSON.parse, JSON.parse convertit le texte en tableau , utf8 pour que readFile renvoi le texte et pas des octets bruts| stockage.js |
| comment convertir un tableau en texte| claude.ai| stringify transforme le tableau en text et writeFile met ce texte dans le fichier| stockage.js|
| le rôle de la fonction Find | claude.ai| find parcourt la liste du tableau et s'arrete au premier element qui repond a la condition et le renvoie. si rien ne correspond elle renvoie undefined tout seule| registre.js |
| la definition de filter |claude.ai| Elle parcourt chaque élément du tableau
et applique la fonction fléchée (le test) , si elle renvoie true, l'élément est
gardé, sinon il est ignoré | recherche.js |
|definition de math.round | claude.ai | math.round arrondi un nombre a l'entier le plus proche| synthese.js|
