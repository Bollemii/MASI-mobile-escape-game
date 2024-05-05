---
# Thanks to Sermeus Steven for his pandoc template
title: "Programmation des Systèmes Mobiles - Escape Museum Game"
author:
  [
    Groupe 6 - BOLLE Emilien, PIRE Victor,
  ]
academicyear: 2023-2024
category: MASI
fontsize: 12pt
titlepage: true
code-block-font-size: \small
default-language: python
minted:
  block_attributes:
    - linenos
    - style=rainbow_dash
    - frame=lines
    - framesep=1pt
    - bgcolor=solbg
    - breaklines=true
  default_block_language: python
  default_inline_language: python
header-includes:
  - \usepackage{fontawesome5}
  - \usepackage[outputdir=.minted_output]{minted}
  - \definecolor{solbg}{HTML}{efece2}
  - \setmintedinline{bgcolor={}}
  - \usepackage{tikz}
  - \usetikzlibrary{arrows,calc,shapes,automata,backgrounds,petri,fit,mindmap,decorations.pathmorphing,patterns,intersections,trees,positioning}
  - "\\makeatletter"
  - "\\let\\listoflistings\\@undefined"
  - "\\makeatother"
babel-lang: french
---

\newpage

\renewcommand{\contentsname}{Table des matières}

\tableofcontents
\newpage

!include ./chapters/00-presentation.md

!include ./chapters/01-specifications.md

!include ./chapters/02-functional-analysis.md

!include ./chapters/03-technical-analysis.md

!include ./chapters/04-improvements.md
