---
title: "Programmation des Systèmes Mobiles - Escape Museum Game"
author:
  [
    Bolle Emilien,
    Pire Victor,
  ]
academicyear: 2023-2024
category: MASI
fontsize: 12pt
titlepage: true
code-block-font-size: \large
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

!include ./chapters/intro.md

# Bibliographie
