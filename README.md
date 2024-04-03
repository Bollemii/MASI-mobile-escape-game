# mobile-escape-game
## Présentation
Cette application mobile a été développée dans le cadre du cours de Programmation des Systèmes Mobiles du Master en Architecture des Systèmes Informatiques.  
Membres du groupe :
- BOLLE Emilien
- PIRE Victor

Cette application a été développée par l'entreprise Escape Museum et est utilisée dans l'exposition temporaire "Pirates de l'île Bourbon" d'un musée. C'est un jeu d'évasion qui utilise les capteurs du téléphone pour résoudre des énigmes.

## Documentation
La documentation de l'analyse de l'application est disponible dans le dossier `docs/`. Elle est rédigée en LaTeX et Markdown et est compilée dans un [document PDF](./docs/rapport.pdf).

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
### Installation
Pour déployer l'application sur un téléphone physique, il est nécessaire d'activer le mode développeur et le débogage USB. Ensuite, il suffit de connecter le téléphone à l'ordinateur et d'exécuter la commande suivante.
```bash
# Préparer l'environnement
cd escape-game
npm install

# Vérifier que le téléphone est bien connecté
adb devices

# Android
npm run android
# iOS
npm run ios
```
