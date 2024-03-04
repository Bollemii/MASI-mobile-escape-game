# Analyse fonctionnelle
## Cas d'utilisation
Dans cette partie, nous allons décrire les cas d'utilisation de l'application. Cela nous permettra de comprendre les fonctionnalités que l'application doit offrir aux différents utilisateurs et acteurs.

![Diagramme de cas d'utilisation](../assets/images/Usecase.png)

Dans le diagramme ci-dessus, nous pouvons observer qu'il n'y a qu'un acteur qui correspond aux utilisateurs de l'application, ceux qui joueront à l'escape game. Ces utilisateurs pourront participer au jeu d'évasion. Cela nécessite (inclus) de scanner un QR code. Ils pourront également participer directement aux 3 étapes du jeu en scannant un QR code mais il faut impérativement qu'ils aient réussi l'étape précédente.

## Fonctionnement général
![Diagramme d'activité du jeu complet](../assets/images/Activity-full-game.png)

Le diagramme ci-dessus présente le fonctionnement du jeu d'évasion depuis le début. C'est le cas classique d'utilisation où les joueurs scannent le QR code de début du jeu à l'entrée du musée et réalisent toutes les étapes sans devoir rescanner un QR code.

![Diagramme d'activité de la reprise d'une étape](../assets/images/Activity-step-game.png)

Le diagramme ci-dessus présente le fonctionnement du jeu d'évasion lorsqu'un joueur reprend le jeu à une étape précise. Cela peut arriver s'il a quitté le jeu avant de le terminer ou s'il a rencontré un problème. Dans ce cas, il doit scanner le QR code de l'étape à laquelle il veut reprendre le jeu. Il pourra y jouer uniquement s'il a réussi l'étape précédente. Il pourra ensuite continuer le jeu jusqu'à la fin.

## Maquettes d'écrans
```md
- Images visuels
- Ne pas oublier d'expliquer brièvement le visuel

- Maquettes
  - Cale de bateau sombre avec tonneaux et sortie un peu éclairée
  - Cale de bateau éclairée à la lampe torche
  - Pont d'un bateau avec capitaine avec bateau ennemi au loin
  - Chargement fusils
  - Cabine du capitaine
```


### Composants nécessaires
```md
- Lister composants nécessaire (bouton, texte, image...) (sur base des maquettes)
```


