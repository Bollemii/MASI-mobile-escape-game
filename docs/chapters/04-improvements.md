# Possibilités d'amélioration
## Inclure de nouvelles expositions
Dans un objectif business, il serait intéressant de permettre à l'application d'inclure de nouvelles exposition avec leur propre jeu d'évasion et d'autres musées. Cela permettrait de diversifier l'offre et de proposer des jeux d'évasion différents dans chaque musée dans une même application.

Cette fonctionnalité nécessiterait un travail de développement considérable par rapport à ce qui est initiallement prévu mais elle amènerait une plus-value énorme à l'application.

### Stockage de données
Le gros du travail se situerait au niveau du stockage des données. Il faudrait revoir toute la structure de données afin de pouvoir retenir le fonctionnement de tous les jeux d'évasion. Cela permettrait d'ajouter, modifier ou supprimer les jeux d'évasion sans pour autant devoir altérer le code source de l'application. Il faudrait également revoir le stockage des données de jeu pour permettre à l'application de gérer plusieurs parties en même temps. Un joueur pourrait ainsi avoir joué à plusieurs jeux d'évasion pour lesquels il faut retenir sa progression.

Ce changement dans le stockage des données nécessiterait de revoir la manière dont les données sont stockées. Dans l'état initial, les données sont stockées dans des fichiers JSON mais cette solution serait dépassée pour gérer plusieurs jeux d'évasion et retenir une structure de données plus complexe. Il faudrait donc envisager de stocker les données dans une base de données de type SQL ou NoSQL.

Une première ébauche de structure de données pour une base de données relationnelle (SQL) pourrait être la suivante :

![Ebauche structure de données incluant de nouvelles expositions](../assets/images/diagrams/Draft-database-include-new-games.png)

Cette ébauche est non-contractuelle et doit être affinée pour correspondre aux besoins de l'application. Elle permet d'avoir une première idée de la structure de données nécessaire pour gérer plusieurs jeux d'évasion. Dans cette structure, on peut voir les tables `EscapeGame`, `GameStep` et `Museum` qui permettent de gérer les jeux d'évasion, les étapes de jeu et les musées respectivement. Ensemble, elles permettent de retenir les données nécessaires pour gérer plusieurs jeux d'évasion. Ensuite, les tables `Player` et `GameStepProgress` permettent de retenir les données de progression des joueurs pour chaque jeu d'évasion.

## Centraliser les données des joueurs
### Statistiques de jeu
Il pourrait être intéressant, pour les musées, de pouvoir prendre connaissance de statistiques sur les joueurs et leurs tentatives de jeu. Cela nécessiterait de centraliser les données des joueurs sur un serveur externe. Les données seraient ainsi disponibles pour les musées qui pourraient les utiliser pour améliorer leur offre ou pour analyser le comportement des joueurs.

Cette fonctionnalité nécessiterait, en plus de la centralisation des données, de créer une application web pour les musées qui leur permettrait de consulter les données des joueurs pour leurs expositions.

### Stockage des données de jeu
Pour faire un lien avec la fonctionnalité d'inclure de nouveaux jeux d'évasion, le changement de stockage des données vers une base de données permettrait une transition plus facile vers cette centralisation des données. De plus, la centralisation du stockage des données de fonctionnement des jeux d'évasion permettrait de ne pas surcharger les appareils mobiles des utilisateurs.

Ainsi, les appareils des joueurs communiqueraient avec le serveur pour récupérer les données de jeu (fonctionnement étapes etc) et pour enregistrer et récupérer leur progression. Les échanges entre l'application et le serveur se dérouleraient comme illustré dans le diagramme suivant :

![Diagramme de séquence des communications avec les données centralisées](../assets/images/diagrams/Sequence-centralized-data-communications.png)
