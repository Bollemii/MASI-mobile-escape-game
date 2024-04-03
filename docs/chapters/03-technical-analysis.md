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

Nous avons besoin d'une technologie qui soit compatible avec Android et IOS. Elle doit également permettre l'accès aux fonctionnalités natives du téléphone. Notre choix de technologie doit donc commencer par le type de technologie mobile que nous allons utiliser : hybride, natif, PWA ou web.

Pour diriger notre choix, nous allons établir une matrice de décision avec des critères de choix. Dans cette matrice, nous allons pondérer chaque critère avec une valeur de 1 à 3 selon son importance.

| **Critère**                 | **Hybride/Cross-plateforme** | **Natif**                              | **PWA**                       | **Web**                       |
|-----------------------------|-----------------------------|----------------------------------------|-------------------------------|-------------------------------|
| Multiplateforme (3)         | Oui                         | Non                                    | Androïd                       | Oui                           |
| Fonctionnalités natives (3) | Oui                         | Oui                                    | Limité par le navigateur [^1] | Limité par le navigateur [^1] |
| Connaissances requises (2)  | Langage / framework Web     | Langage spécifique à chaque plateforme | Langage / framework Web       | Langage / framework Web       |
| Maintenabilité (2)          | Facile                      | Pour chaque plateforme                 | Facile                        | Facile                        |

[^1]: Le navigateur prend en charge certaines fonctionnalités natives du téléphone. Les applications PWA et Web n'ont donc accès qu'à ces fonctionnalités.

Avec cette matrice, nous pouvons voir qu'avec le critère de multiplateforme, le développement natif doit écarté pour correspondre aux besoins de l'application. En effet, le développement natif ne permet pas de développer une application pour les deux systèmes d'exploitation en même temps. Ensuite, le critère de fonctionnalités natives écarte le développement web et PWA. En effet, ces développements n'ont qu'un accès restreint aux fonctionnalités natives du téléphone dépendamment du navigateur sur lequel l'application est exécutée. Le développement hybride/cross-plateforme est donc le choix le plus adapté pour notre application.

Maintenant que nous avons déterminé que le développement hybride est la meilleure solution pour notre application, nous allons choisir un framework pour le développement. Nous avons le choix entre plusieurs frameworks : React Native, Flutter, Ionic, Xamarin, WinDev, etc.

Généralement les frameworks hybrides et cross-plateforme sont équivalents. C'est pourquoi notre choix se base dans un premier temps sur le langage de programmation qu'ils utilisent. Pour ce choix de langage, nous allons prendre en compte les connaissances de l'équipe de développement. Voici les langages de programmation utilisés par les frameworks que nous comparons :

| **Framework** | **Langage de programmation**    |
|---------------|---------------------------------|
| Flutter       | Dart                            |
| Ionic         | Javascript - React/Angular/Vue3 |
| Native Script | Javascript - React/Angular/Vue3 |
| React Native  | Javascript - React              |
| WinDev        | WLanguage                       |
| Xamarin       | C#                              |

L'équipe de développement a une connaissance avancée de Javascript et du framework web React. Elle a une connaissance de base de C# et elle n'a aucune connaissance de Dart et WLanguage. Les frameworks Flutter, Xamarin et WinDev sont donc écartés pour des raisons de connaissances de l'équipe de développement.

La suite de notre décision va se base sur divers critères que nous allons pondérer pour établir une matrice de décision. Comme précédemment, la pondération des critères se fera de 1 à 3 selon leur importance. Voici les critères que nous allons prendre en compte :

| **Critères**     | **Ionic**        | **Native Script** | **React Native** |
|------------------|------------------|-------------------|------------------|
| Emulation (2)    | Capacitor ou web | Stackblitz        | Expo Go          |
| Popularité (1)   | 50.3k            | 23.6k             | 115k             |
| Appréciation (3) | ++               | +                 | +++              |

Pour la matrice de décision précédente, la popularité du framework correspond au nombre d'étoiles sur le dépôt Github du framework. L'appréciation correspond à la connaissance, l'expérience et l'appréciation de l'équipe de développement pour le framework.

Le tableau qui suit vérifie que les fonctionnalités natives dont nous avons besoin sont prises en charge par les frameworks que nous comparons.

| **Fonctionnalités natives (3)** | **Ionic** | **Native Script** | **React Native** |
|---------------------------------|-----------|-------------------|------------------|
| Scan QR code                    | Oui       | Oui               | Oui              |
| Lampe                           | Oui       | Oui               | Oui              |
| Accéléromètre                   | Oui       | Oui               | Oui              |
| Gyroscope                       | Oui       | Oui               | Oui              |
| Géolocalisation                 | Oui       | Oui               | Oui              |
| Compteur de pas                 | Oui       | Oui               | Oui              |

Avec ces critères, nous pouvons voir que les trois frameworks sont équivalents pour notre application. Cependant, l'équipe de développement a une préférence pour React Native. En effet, elle a une connaissance avancée de Javascript et du framework web React. Elle a également une connaissance de base de React Native. De plus, React Native est le framework le plus populaire des trois. C'est pourquoi nous allons choisir React Native pour le développement de notre application.

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
Voici un exemple de structure de fichier JSON pour les données de jeu.  
Un premier fichier nommé `gameData.json` :
```json
{
  "start": "2021-05-01T14:00:00",
  "end": "2021-05-01T14:30:00",
  "lastStep": 2
}
```

Un second fichier nommé `playerData.json` :
```json
{
  "pseudo": "JohnDoe"
}
```	

## Fonctionnement technique
```md
- Schémas séquence et activité spécifiques
```

## Structure de l'application
```md
- Schéma de l'architecture logicielle de l'application
```
