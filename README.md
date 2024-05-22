# mobile-escape-game - Groupe 6
## Présentation
Cette application mobile a été développée dans le cadre du cours de Programmation des Systèmes Mobiles du Master en Architecture des Systèmes Informatiques.  
Membres du groupe 6 :
- BOLLE Emilien
- PIRE Victor

Liens utiles :

- Gitlab : [https://gitlab.com/DTM-Henallux/MASI/etudiants/bolle-emilien/mobile-escape-game](https://gitlab.com/DTM-Henallux/MASI/etudiants/bolle-emilien/mobile-escape-game)
- Figma : [https://www.figma.com/file/qRPFIBP1ofHVQL4dNBUzLs/Escape-Game-mockups](https://www.figma.com/file/qRPFIBP1ofHVQL4dNBUzLs/Escape-Game-mockups)
- Dossier d'analyse : [https://dtm-henallux.gitlab.io/MASI/etudiants/bolle-emilien/mobile-escape-game](https://dtm-henallux.gitlab.io/MASI/etudiants/bolle-emilien/mobile-escape-game)

Cette application a été développée par l'entreprise Escape Museum et est utilisée dans l'exposition temporaire "Pirates de l'île Bourbon" d'un musée. C'est un jeu d'évasion qui utilise les capteurs du téléphone pour résoudre des énigmes.

## Documentation
La documentation de l'analyse de l'application est disponible dans le dossier `docs/`. Elle est rédigée en LaTeX et Markdown et est compilée dans un [document](https://dtm-henallux.gitlab.io/MASI/etudiants/bolle-emilien/mobile-escape-game).

### Contribution
Pour générer le PDF, il est requis d'avoir `docker` installé sur la machine. Ensuite, il suffit de se rendre dans le dossier `docs/` et d'exécuter la commande suivante.
```bash
cd docs

# Docker is required
# Linux
docker run --rm --volume "$(pwd)":/data --platform linux/amd64 mfreeze/pandoc-iesn:mermaid-latest-ubuntu -p xelatex -m -l -M -e -N -c -I -T -s IEEE.csl pdf rapport.md

# Windows
docker run --rm --volume .:/data --platform linux/amd64 mfreeze/pandoc-iesn:mermaid-latest-ubuntu -p xelatex -m -l -M -e -N -c -I -T -s IEEE.csl pdf rapport.md
```

## Application
## Attention
L'application a été développée avec la version 50 du SDK Expo. En mai 2024, Expo est passé à la version 51 et a introduit des changements majeurs. Cela rend cette application obsolète dans la dernière version d'Expo. Pour l'exécuter, il est nécessaire d'utiliser la version 50 d'Expo et l'application Expo Go avec la version associée à l'ancien SDK.

La branche "upgrade-expo-version-to-51" a été créée pour mettre à jour l'application vers la version 51 d'Expo. Cependant, la lampe torche, utilisée dans la première épreuve de l'application, ne fonctionne pas correctement. C'est pourquoi le changement n'a pas été appliqué sur la branche principale. Il est donc possible de lancer l'application sur cette branche avec la dernière version d'Expo.

### Installation
Pour déployer l'application sur un téléphone physique, il est nécessaire d'activer le mode développeur et le débogage USB. Ensuite, il suffit de connecter le téléphone à l'ordinateur et d'exécuter la commande suivante.
```bash
# Préparer l'environnement
cd escape-game
npm install
```

Pour exécuter l'application sur un téléphone physique, il faut que celui-ci soit connecté à l'ordinateur avec un câble USB et que le mode développeur soit activé sur le téléphone. Ensuite, il suffit d'exécuter les commandes suivantes.
```bash
# Vérifier que le téléphone est bien connecté
adb devices

# Android
npx expo start --android
# iOS
npm expo start --ios
```

Pour exécuter l'application à l'aide de Expo Go, il suffit de lancer la commande suivante et de scanner le QR code avec l'application Expo Go.
```bash
npx expo start

# Si ça ne fonctionne pas, il est possible de lancer l'application avec Expo Go en utilisant le tunnel
# A l'Hénallux, c'est nécessaire
npx expo start --tunnel
```
