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
| Fonctionnalités natives (3) | Oui                         | Oui                                    | Limité par le navigateur [^1] | Limité par le navigateur   |
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

Comme montré dans la matrice de décision des frameworks Javascript, React Native utilise Expo Go pour l'émulation. Expo Go est une application mobile qui permet de tester les applications React Native sur un téléphone mobile. Elle permet de tester les fonctionnalités natives du téléphone comme la caméra, la géolocalisation, etc. Plus généralement, Expo Go fait partie de la suite d'outils Expo. Expo propose un ensemble de modules permettant d'utiliser les fonctionnalités natives du téléphone. Nous allons donc utiliser Expo pour le développement de notre application.

Enfin, React Native peut être utilisé avec Javascript ou Typescript. Nous allons utiliser Typescript pour le développement car il permet d'éviter certaines erreurs de programmation et d'offrir une meilleure lisibilité du code.

### Stockage de données
Comme précisé précédemment, l'application a besoin de stocker les données de jeu pour assurer le suivi et le bon fonctionnement. Elle a besoin de retenir les données de jeu de la dernière tentative du joueur pour lui permettre de reprendre le jeu à l'étape où il s'est arrêté en scannant un QR code.

Les données n'ont pas besoin d'être centralisées sur un serveur externe. Elles peuvent être stockées localement sur le téléphone du joueur. Pour cela, nous pouvons avoir recours à plusieurs technologies : Fichiers locaux, SQLite sont des solutions possibles.  
SQLite apporte un avantage supplémentaire aux fichiers locaux : la manipulation des données se fait par le bien du langage SQL, ce qui facilite et structure la gestion des données. Cependant, l'application ne retient qu'une dizaine de données qui forment un objet simple. L'utilisation de SQLite est donc superflue, nous nous contenterons d'enregistrer les données dans des fichiers locaux pour des raisons de simplicité et de légèreté.

Les données à retenir sont les suivantes :

- la date et l'heure de début de jeu
- la date et l'heure de fin de jeu (si le jeu est terminé)
- la dernière épreuve réussie
- le pseudo du joueur

Elles seront stockées dans un système de stockage de données local sur le téléphone du joueur sous forme de clé-valeur. Comme nous avons choisi React Native pour le développement de l'application (voir la partie précédente), nous allons utiliser un système de stockage proposé par React Native. Pour cela, nous allons utiliser le module [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/) de React Native. Comme expliqué plus tôt, ce stockage se fait sous forme de clé-valeur. Cela veut dire que les données seront stockées avec une clé (une sorte d'étiquette) pour les retrouver facilement.

Ainsi, nous allons stocker les données en deux parties : les données de jeu et les données du joueur. Les données de jeu seront stockées sous la clé `game` et les données du joueur, son pseudo, sous la clé `pseudo`.

Ainsi, nous pourrions représenter les données stockées comme suit :

```json
{
  "game": {
    "start": "2022-01-01T00:00:00",
    "end": "2022-01-01T00:00:00",
    "lastStep": 1
  },
  "pseudo": "Joueur"
}
```

## Fonctionnement technique
### Scanneur de QR code
Pour pouvoir scanner les QR codes, nous allons utiliser le module [Camera](https://docs.expo.dev/versions/latest/sdk/camera/) de React Native. Ce module permet d'accéder à la caméra du téléphone pour prendre des photos et des vidéos. Il permet également de scanner des QR codes.

Pour réaliser la redirection vers une épreuve en fonction du QR code scanné, nous allons inscrire dans le QR code le chemin URL vers l'écran de l'épreuve. Ainsi, lorsque le joueur scanne le QR code, l'application récupère le chemin URL et redirige le joueur vers l'écran de l'épreuve correspondante.

Les URL des épreuves seront construits de deux parties : le nom de l'exposition et le numéro de l'épreuve. Autrement dit, l'URL sera de la forme `/nom-de-lexposition/numero-de-lepreuve`. Par exemple, le joueur scanne le QR code de l'épreuve 1 de l'exposition "Le trésor de la Licorne", l'application récupère le chemin URL `/letresordelalicorne/1` et redirige le joueur vers l'écran de l'épreuve 1 de l'exposition "Le trésor de la Licorne".

Enfin, nous allons différencier le commencement du jeu à la première épreuve. Ainsi, le QR code de début lancera l'écran d'introduction du jeu avec sa description alors que celui de la première épreuve lancera l'écran de l'épreuve. Pour différencier cela, l'identifiant de l'épreuve 0 sera réservé pour le commencement du jeu.

### Illumination de la cale du bateau
Dans la première épreuve, nous allons avoir besoin de la lampe torche pour éclairer la cale du bateau. Plus précisément, l'application doit scruter l'état de la lampe torche pour savoir si elle est allumée ou éteinte. Ainsi, l'utilisateur doit allumer la lampe torche depuis les fonctionnalités natives de son téléphone pour éclairer la cale du bateau.

Un problème se pose : React Native ne propose pas de module pour écouter l'état de la lampe torche. Il existe des plugins pour manipuler la lampe torche, mais aucun pour écouter son état.

Pour outrepasser ce problème, nous allons modifier le scénario de cette épreuve. Une première proposition serait d'utiliser la luminosité de l'écran pour simuler une source de lumière. Ainsi, le joueur devrait augmenter la luminosité de son téléphone pour éclairer la cale du bateau. Pour réaliser cela, nous allons utiliser le module [Brightness](https://docs.expo.dev/versions/latest/sdk/brightness/) de React Native. Ce module permet de contrôler la luminosité de l'écran du téléphone.

Une autre proposition serait de mettre en scène une lampe torche. Le joueur trouverait une lampe torche à côté de lui sauf qu'elle est déchargée. Il doit donc la recharger pour pouvoir éclairer la cale du bateau. Pour simuler cela, il devrait donc brancher son téléphone pour le recharger. Une fois cela fait la lampe torche s'allumerait automatiquement. Pour réaliser cela, nous allons utiliser le module [Battery](https://docs.expo.dev/versions/latest/sdk/battery/) de React Native. Ce module permet de connaître le niveau de la batterie et l'état de celle-ci (déchargement, chargement) du téléphone.

Après discussion, la proposition de la batterie a été retenue pour rester proche du scénario initial de l'épreuve.

### Chargement des canons
Dans la deuxième épreuve, le joueur doit simuler le chargement d'un canon. Pour cela, il doit réaliser le geste de tasser la poudre dans la canon à l'aide d'un outil. Le canon étant en position horizontal, le joueur doit réaliser un mouvement horizontal de va et viens pour tasser la poudre. Pour simuler ce mouvement, nous allons utiliser l'accéléromètre et l'orientation du téléphone. L'accéléromètre nous permettra de détecter les mouvements de va et viens du téléphone et l'orientation nous permettra de détecter dans quelle position se trouve le téléphone. Ainsi, le téléphone devra être en position horizontale pour simuler l'outil et l'accéléromètre devra détecter un mouvement de va et viens horizontal pour tasser la poudre. Pour ce dernier point, nous pourrons détecter que le mouvement est horizontal car l'accéléromètre se base sur les 3 axes de l'espace. Ainsi, un mouvement horizontal se traduit par une variation de l'accélération sur l'axe x. Pour réaliser cela, nous utiliserons le module [Device motion](https://docs.expo.dev/versions/latest/sdk/devicemotion/) de React Native qui inclus l'accéléromètre, l'orientation et d'autres fonctionnalités de mouvement du téléphone.

### Déplacement vers la cabine du capitaine
Pour simuler le déplacement vers la cabine du capitaine, nous avons deux choix possibles : utiliser la géolocalisation ou utiliser le podomètre

La géolocalisation permet de connaître la position du téléphone dans l'espace. Cette solution permet de demander au joueur de se rendre à un point précis, par exemple, à 30 mètres au nord de sa position actuelle. Cependant, elle n'est pas précise suffisamment pour notre cas d'utilisation. En effet, la géolocalisation utilise le signal GPS qui a une précision théorique de 30 mètres. En pratique, nous utiliserions le module [Location](https://docs.expo.dev/versions/latest/sdk/location/) de React Native mais comme c'est précisé dans le point sur la précision de la géolocalisation ([documentation](https://docs.expo.dev/versions/latest/sdk/location/#accuracy)), la précision va de 3 kilomètres à une dizaine de mètres. Cette précision est insuffisante pour repérer un point précis dans un bâtiment.

L'autre solution est d'utiliser le podomètre. Il permet de compter les pas du joueur. Cette solution est plus précise au niveau de la distance parcourue par le joueur. Cependant, elle ne permet pas de connaitre sa direction, c'est-à-dire qu'on ne peut pas demander au joueur de se rendre à un point précis. Ce n'est pas un problème pour notre cas d'utilisation car nous pouvons demander au joueur de se déplacer de 30 pas. Pour réaliser cette épreuve, nous allons utiliser le module [Pedometer](https://docs.expo.dev/versions/latest/sdk/pedometer/) de React Native. Ce module permet de compter les pas du joueur.

En résumé, voici une matrice de décision pour choisir entre la géolocalisation et le podomètre :

| **Critères**                      | **Géolocalisation**  | **Podomètre**                 |
|-----------------------------------|----------------------|-------------------------------|
| Précision (3)                     | 3 km à 10 m          | 1 m (= 1 pas)                 |
| Direction (2)                     | Oui                  | Non                           |
| Adapté à l'usage en intérieur (3) | Non                  | Oui                           |
| Triche (1)                        | Difficile            | Facile (secouer le téléphone) |

Avec cette matrice de décision, nous pouvons voir que le podomètre est plus adapté à notre cas d'utilisation. En effet, il est plus précis et il est adapté à l'usage en intérieur. Cela est important car l'application sera utilisée dans un musée. Nous allons donc utiliser le podomètre pour simuler le déplacement vers la cabine du capitaine en demandant au joueur de se déplacer d'un certain nombre de pas.

## Structure de l'application
La structure de l'application est divisée en plusieurs parties pour faciliter le développement et la maintenance de l'application. Nous allons diviser l'application en deux grandes parties : le dossier `src` et le dossier `assets`. Le premier contiendra tout le code source de l'application et le second contiendra les ressources (images, QR codes, etc.) utilisés dans l'application.

Le dossier `assets` se divise en deux parties : `images` et `qrcodes`. Le premier contiendra toutes les images utilisées dans l'application et le second contiendra tous les QR codes des épreuves.

Le dossier `src` se divise en plusieurs parties.

1. `router` : Ce dossier contiendra le fichier de navigation de l'application et la liste des routes de l'application.
2. `screens` : Ce dossier contiendra les différents écrans de l'application.
3. `components` : Ce dossier contiendra les composants réutilisables utilisés dans les écrans comme les boutons.
4. `hooks` : Ce dossier contiendra les hooks[^2] personnalisés utilisés dans l'application.
5. `models` : Ce dossier contiendra les modèles de données utilisés dans l'application.
6. `dataaccess` : Ce fossier contiendra les accès aux données de l'application, c'est là que nous enregistrerons les données de jeu et du joueur.
7. `utils` : Ce dossier contiendra les fonctions utilitaires utilisées dans l'application.

[^2]: Les hooks sont des fonctions qui permettent d'utiliser des variables d'état et de suivre le cycle de vie d'un composant fonctionnel.

Des fichiers de gestion générale de l'application seront également présents à la racine du dossier `src`. Ces fichiers sont les suivants :
1. `constants.ts` : Ce fichier contiendra les constantes de l'application au niveau de l'appareil (taille de l'écran, etc.).
2. `defaultStyles.ts` : Ce fichier contiendra les styles par défaut de l'application (couleurs, polices, etc.).

Enfin, le fichier `App.tsx` à la racine du projet contiendra le point d'entrée de l'application. C'est ce fichier qui sera exécuté au lancement de l'application.

Ainsi, la structure de l'application sera la suivante :

```
./
├── assets/
│   ├── images/
│   └── qrcodes/
├── src/
│   ├── components/
│   ├── dataaccess/
│   ├── hooks/
│   ├── models/
│   ├── router/
│   ├── screens/
│   ├── utils/
│   ├── constants.ts
│   └── defaultStyles.ts
└── App.tsx
```
