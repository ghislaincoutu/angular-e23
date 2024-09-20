# angular-e23 &mdash; Test de programmation de fiches grammaticales
[README](../README.md) &mdash; Angular

Les fichiers se rapportant à l'application qui doivent être installés sur le serveur Web se trouvent dans le sous-répertoire `/releated_files/publication`.

## Démonstration
https://ghislaincoutu.ca/d002/angular-e23

## Commandes Angular à exécuter pour générer les composants de l'application
```sh
ng generate environments
ng generate component accueil
ng generate component menu
ng generate component liste-sommaire
ng generate component liste-detaillee
ng generate component fiche
ng generate service module01
ng generate pipe transform01
```

## Ajout d'un fichier JavaScript externe à l'application
Pour ajouter un fichier JavaScript externe à l'application, il faut spécifier le chemin du fichier externe dans le fichier **angular.json**, dans l'objet _build_ :
```json
{
  "build": {
    "scripts": [
      "src/assets/js/custom.js"
    ]
  }
}
```
