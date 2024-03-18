# Analyse technique
## Choix technologiques
### Besoins techniques
**Stockage de données**  
L'application a besoin de stocker les données de jeu pour assurer le suivi et le bon fonctionnement. En effet, l'application a besoin de retenir les étapes réussies par le joueur pour lui permettre de reprendre le jeu à l'étape où il s'est arrêté en scannant un QR code.  
Les données de jeu sont les suivantes :
- la date et l'heure de début de jeu
- la date et l'heure de fin de jeu (si le jeu est terminé)
- la dernière épreuve réussie
- le pseudo du joueur

L'application n'a pas de nécessité de retenir d'autres données dans son état actuel et n'a pas besoin de retenir toutes les tentatives de jeu du joueur. Pour son fonctionnement, elle n'a besoin que de la dernière tentative pour savoir si le joueur a réussi ou non le jeu et pour lui permettre de reprendre le jeu à l'étape où il s'est arrêté.  

**Accès à des fonctionnalités natives du téléphone**  
L'application se base sur des fonctionnalités natives du téléphone pour offrir une expérience immersive.
Elle a besoin de :
- la caméra pour scanner les QR codes
- la lampe torche pour éclairer la cale du bateau (épreuve 1)
- l'accéléromètre et le gyroscope pour simuler le chargement des canons (épreuve 2)
- la géolocalisation pour simuler le déplacement vers la cabine du capitaine (épreuve 3)

**Evolutivité / portabilité**  
L'application doit être portable sur les deux systèmes d'exploitation mobiles les plus utilisés : Android et iOS.

### Technologie mobile
Pour répondre aux besoins techniques de l'application énoncés précédemment, nous allons déterminer dans cette partie la technologie mobile la plus adaptée pour le développement de l'application.

```md
- Choix techno
  - hybride, natif, web
  - React Native, Flutter, Android...
    - Matrice évaluation

- => Matrice de décision avec critères
- Justification choix
```

### Stockage de données
Comme précisé précédemment, l'application a besoin de stocker les données de jeu pour assurer le suivi et le bon fonctionnement. Elle a besoin de retenir les données de jeu de la dernière tentative du joueur pour lui permettre de reprendre le jeu à l'étape où il s'est arrêté en scannant un QR code.

Les données n'ont pas besoin d'être centralisées sur un serveur externe. Elles peuvent être stockées localement sur le téléphone du joueur. Pour cela, nous pouvons avoir recours à plusieurs technologies : Fichiers locaux, SQLite sont des solutions possibles.  
SQLite apporte un avantage supplémentaire aux fichiers locaux : la manipulation des données se fait par le bien du langage SQL, ce qui facilite et structure la gestion des données. Cependant, l'application ne retient qu'une dizaine de données qui forment un objet simple. L'utilisation de SQLite est donc superflue, nous nous contenterons d'enregistrer les données dans des fichiers locaux pour des raisons de simplicité et de légèreté.

Les données à retenir sont les suivantes :
- la date et l'heure de début de jeu
- la date et l'heure de fin de jeu (si le jeu est terminé)
- la dernière épreuve réussie
- le pseudo du joueur

Elles seront stockées dans un fichier JSON pour avoir une structure et une manipulation aisée dans l'application.  

Le pseudo du joueur sera stocké dans un fichier à part car il peut être utilisé pour plusieurs parties. Il sera enregistré dans un fichier JSON également.  
Voici un exemple de structure de fichier JSON pour les données de jeu :
```json
// gameData.json
{
  "start": "2021-05-01T14:00:00",
  "end": "2021-05-01T14:30:00",
  "lastStep": 2
}
```
```json
// playerData.json
{
  "pseudo": "JohnDoe"
}
```	

## Fonctionnement technique
```md
- Schémas séquence et activité spécifiques
```


