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

| **Critère**                 | **Hybride**             | **Natif**                              | **PWA**                                            | **Web**                                            |
|-----------------------------|-------------------------|----------------------------------------|----------------------------------------------------|----------------------------------------------------|
| Multiplateforme (3)         | Oui                     | Non                                    | Androïd                                            | Oui                                                |
| Fonctionnalités natives (3) | Oui                     | Oui                                    | Limité à celles prises en charge par le navigateur | Limité à celles prises en charge par le navigateur |
| Connaissances requises (2)  | Langage / framework Web | Langage spécifique à chaque plateforme | Langage / framework Web                            | Langage / framework Web                            |
| Maintenabilité (2)          | Facile                  | Pour chaque plateforme                 | Facile                                             | Facile                                             |

Avec cette matrice, nous pouvons voir qu'avec le critère de multiplateforme, le développement natif est écarté. En effet, le développement natif ne permet pas de développer une application pour les deux systèmes d'exploitation en même temps. Ensuite, le critère de fonctionnalités natives écarte le développement web. En effet, le développement web ne permet pas d'accéder aux fonctionnalités natives du téléphone. Enfin, les PWA sont écartées car elles ont un accès plus limité aux fonctionnalités natives du téléphone que les applications hybrides. L'indice de performance pour les applications hybrides ne pose pas de problème pour notre application car elle n'est pas prévue pour être très gourmande en ressources.

Maintenant que nous avons déterminé que le développement hybride est la meilleure solution pour notre application, nous allons choisir un framework pour le développement hybride. Nous avons le choix entre plusieurs frameworks : React Native, Flutter, Ionic, Xamarin, etc.

Tout comme précédemment, pour diriger notre choix, nous allons établir une matrice de décision avec des critères de choix. Dans cette matrice, nous allons pondérer chaque critère avec une valeur de 1 à 3 selon son importance.

| **Critères**                 | **React Native**       | **Flutter**                            | **Ionic**                             |
|------------------------------|------------------------|----------------------------------------|---------------------------------------|
| Langage de programmation (3) | Javascript<br>React    | Dart                                   | Javascript<br>React ou Vue ou Angular |
| Documentation (2)            | Complète avec exemples | Très complète avec vidéos explicatives | Complète avec exemples                |
| Emulation (2)                | Expo Go                | Flutter doctor                         | Capacitor ou navigateur web           |
| Performance (1)              | Moyenne                | Elevée                                 | Moyenne                               |
| Communauté (1)               | Grande                 | En croissance                          | Grande                                |

Le tableau qui suit vérifie que les fonctionnalités natives dont nous avons besoin sont prises en charge par les frameworks que nous comparons.

| **Fonctionnalités natives (3)** | **React Native** | **Flutter** | **Ionic** |
|---------------------------------|------------------|-------------|-----------|
| Scan QR code                    | Oui              | Oui         | Oui       |
| Lampe                           | Oui              | Oui         | Oui       |
| Accéléromètre                   | Oui              | Oui         | Oui       |
| Gyroscope                       | Oui              | Oui         | Oui       |
| Géolocalisation                 | Oui              | Oui         | Oui       |
| Compteur de pas                 | Oui              | Oui         | Oui       |

Avec cette matrice, Flutter parait être un framework parfait à utiliser. Cependant, l'équipe de développement n'a aucune connaissance de Dart, le langage de programmation de Flutter. Elle a une connaissance avancée de Javascript ainsi que des frameworks React, React Native et Ionic. Ces technologies seraient donc des choix plus adaptés pour l'équipe de développement.

Concernant les fonctionnalités natives, Flutter n'est pas le plus simple à utiliser pour accéder aux fonctionnalités natives du téléphone. En effet, il faut écrire des portions de code natif pour y accéder. React Native et Ionic sont plus simples d'utilisation car ils proposent des plugins intégrés à leur moteur de rendu (Expo Go et Capacitor) pour accéder aux fonctionnalités natives du téléphone commme la géolocalisation ou le gyroscope.

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
