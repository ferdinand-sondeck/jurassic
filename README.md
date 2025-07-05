# Jurassic Park Incident Management

Ce projet est une application de gestion des incidents pour Jurassic Park. Elle permet de suivre les incidents tels que les évasions, les pannes, ou les blessures, avec des niveaux d'urgence et des statuts.

## Fonctionnalités
- Suivi des incidents par type, zone, urgence et statut.
- API documentée avec Swagger.
- Déploiement via Docker et Kubernetes.

## Prérequis
- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/) (pour Kubernetes)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

## Démarrage
1. Clonez le dépôt :
   ```bash
   git clone <url-du-repo>
   cd jurassic-park
## Lancez l'application avec Docker Compose :
2. docker compose up
## Accédez à l'API Swagger :

3. http://localhost:8080/swagger
