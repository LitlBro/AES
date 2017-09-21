
## Synopsis

Site web permettant la compréhension de l'AES (Advanced Encryption Standard).

## Motivation

Ce projet a été réalisé dans le cadre d'une TX de l'UTC
* Réalisation d'un démonstrateur pédagogique pour l'AES

## Installation
Aucune installation préalable n'est requise :

* utiliser git-clone pour récupérer le projet
* créer un lien symbolique dans la racine de votre serveur sous le nom "tx/"
* dans le dossier racine du serveur : sudo ln -s /path/to/txPHP tx/

# Recommandations
 * Attention, les liens utilisés dans le projet sont absolus
 * Les fichiers de header et footer (racine du projet et sous aes/) contiennent des chemins absolus
 * Ceux-ci sont à changer si besoin est


## Solution possible si échec 
 * utilisateur et groupes des liens symboliques : passer de root a user courant
 * droits (fonctionne, peut potentiellement être réduit) : 751
 * problémes de liens

## Contribution

 * Si vous voulez contribuer, cloner le projet et faite une pull request, ou envoyer un commentaire pour de petits correctifs (orthographe, grammaire...)

## Informations supplémentaires
 * Pour des informations plus précises sur la construction/structure du projet, voir doc.txt
