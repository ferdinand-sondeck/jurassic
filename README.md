# Jurassic Park Incident Management

Ce projet est une application de gestion des incidents pour Jurassic Park. Elle permet de suivre les incidents tels que les évasions, les pannes, ou les blessures, avec des niveaux d'urgence et des statuts.

## Fonctionnalités
- Suivi des incidents par type, zone, urgence et statut.
- API documentée avec Swagger.
- Déploiement via Docker et Kubernetes.
- Pipeline CI/CD Github Actions

## Prérequis
- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/) (pour Kubernetes)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)


## Dépôt GITHUB

https://github.com/ferdinand-sondeck/jurassic

## Démarrage
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ferdinand-sondeck/jurassic
   cd jurassic-park
   ```

2. Lancez l'application avec Docker Compose :
   ```bash
      docker compose up
   ```

3. Accédez à l'API Swagger :

   http://localhost:8080/swagger
