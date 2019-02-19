---
title: "N Queens Problem"
date: "2009-03-19"
path: "/n-queens"
coverImage: "../images/n-queens.jpg"
author: "Prakash Prasad"
excerpt: "The standard N Queen’s problem asks a very interesting question – how to place N queens on an N x N chess board so that none of them can hit any other in one move."
---

In chess, a queen can move as far as she pleases, horizontally, vertically, or diagonally. A conventional chess board has 8 rows and 8 columns. But when a mathematician looks at a problem like this one, then he always likes to generalize it. The standard $N \times N$ Queen’s problem asks a very interesting question – how to place N queens on a $N \times N$ chess board so that none of them can hit any other in one move.

Although solutions can be found by construction for N=1 and all N>3, many researchers have tried to find solutions by different methods with different success to demonstrate the properties of the methods (divide and conquer, search methods, neural networks). The following table summarizes what the authors have achieved.

| Author | Method | Max. N Solved | Year |
| :---: | --- | :---: | ---: |
| Gauß, Nauck | trial and error | 8 | 1850 |
| several | systematic construction | all N > 3 | >1850 |
| Stone, Stone | depth first search | 96 | 1987 |
| Page, Tagliarini | Hopfield network | 10 | 1987 |
| Kajura, Akiyama, Anzai | Boltzmann machine | 1000 | 1989 |
| Adorf, Johnston | GDS | 1024 | 1989 |
| Abramson, Yung | divide and conquer | all N>39 | 1989 |
| Sosic, Gu | local search, conflict minimization | 3000000 | 1990 |
| Chen, Wu | Parallel PROLOG | ? | 1991 |
| Nakagawa, Kitagawa | SDNN | 3000 | 1991 |
| Miller | depth first search | 64 | 1992 |
| Shagrir | Hopfield Network | 100 | 1992 |
| Mandziuk, Macukow | Hopfield Network | 8 | 1992 |
| Mandziuk | Hopfield Network | 80 | 1995 |
| Ali, Turner, Homifar | Genetic Algorithm | 200 | 1992 |
| Minton, Johnston, Philips, Laird | heuristic repair | 1000000 | 1992 |
| Takefuji | Minimum network | 100 | 1992 |
| Lorenz | GDS | 6001 | 1993 |
| Schaller | DBNN | 200 | 1994 |

I made a program that calculates the solution to this problem by brute force algorithm (I know, the least intelligent procedure). All the four solutions to the $6 \times 6$ Queens Problem are given below (1 represents the presence of a Queen at the position, while 0 represents the absence of a queen):