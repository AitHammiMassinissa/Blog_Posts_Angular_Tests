# Utiliser une image de base Node.js (LTS) avec Alpine Linux pour réduire la taille de l'image
FROM node:14-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm i

# Copier le reste des fichiers du projet
COPY . .

# Générer la version de production de l'application Angular
RUN npm run build --prod

# Utiliser une image Nginx pour servir l'application Angular
FROM nginx:1.21-alpine

# Copier la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers de l'application Angular depuis l'étape de build
COPY --from=build /app/dist/blog-posts /usr/share/nginx/html

# Exposer le port 80 pour l'accès à l'application
EXPOSE 80

# Lancer Nginx en mode détaché
CMD ["nginx", "-g", "daemon off;"]
