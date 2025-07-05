# Déploiement avec Docker

Ce projet utilise Docker pour simplifier le déploiement des services.

## Services
- **jurassic-db** : Base de données MySQL.
- **jurassic-phpmyadmin** : Interface pour gérer la base de données.
- **incident-frontend** : Interface utilisateur pour gérer les incidents.

## Prérequis
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Commandes
1. Construisez et démarrez les conteneurs :
   ```bash
   docker compose up --build
## Arrêtez les conteneurs :

2. docker compose down

## Nettoyez les volumes et images inutilisés :

3. docker system prune -af

## Accès
Frontend : http://localhost:3000
API Swagger : http://localhost:8080/swagger
phpMyAdmin : http://localhost:8081