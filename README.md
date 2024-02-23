# mobile-escape-game
Application mobile développée dans le cadre du cours de Programmation des Systèmes Mobiles du Master en Architecture des Systèmes Informatiques. Cette application est un jeu d'évasion qui utilise les capteurs du téléphone et utilisé dans l'exposition temporaire "Pirates de l'île Bourbon" du musée de l'Escape Museum.

Membres du groupe :
- BOLLE Emilien
- PIRE Victor

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
