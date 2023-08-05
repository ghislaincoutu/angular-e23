# angular-e23 &mdash; Test de programmation des fiches grammaticales
Les fichiers se rapportant à l'application qui doivent être installés sur le serveur Web se trouvent dans le sous-répertoire `/releated_files/publication`.

## Commandes Angular à exécuter pour générer les composants de l'application
```sh
ng generate component accueil
ng generate component menu
ng generate component liste-sommaire
ng generate component liste-detaillee
ng generate component fiche
ng generate service module01
ng generate pipe safe
```

## Ajout d'un fichier JavaScript externe à l'application

Pour ajouter un fichier JavaScript externe à l'application, il faut spécifier le chemin du fichier externe dans le fichier **angular.json**, dans l'objet _build_ :

"build": {
  ...
    "scripts": [
      "src/assets/js/custom.js"
    ]
  ...
  },
}
