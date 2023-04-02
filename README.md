# Blog_Posts_Angular_Tests
This code is a simple technical test with the Angular framework and the WordPress REST API that aims to create a page that lists blog posts with pagination and to allow the visualization of each post on a dedicated page 

# Installation

## Via npm 

***Clonner le projet***
```shell
git clone https://github.com/AitHammiMassinissa/Blog_Posts_Angular_Tests.git
```
***Entrer dans le dossier Blog_Posts***
```shell
cd Blog_Posts/
```

***Installer les dépendances***

```shell
npm i 
```
***Lancement sur http://localhost:4200/***

```shell
ng serve
```

## Via docker 

***Clonner le projet***

```shell
git clone https://github.com/AitHammiMassinissa/Blog_Posts_Angular_Tests.git
```
***Entrer dans le dossier Blog_Posts***
```shell
cd Blog_Posts/
```

***Création et lancement de l'image docker***

```shell
docker build -t blog-posts-angular .
docker run -d -p 80:80 blog-posts-angular
```

