
---

### README Kubernetes
```markdown
# Déploiement avec Kubernetes

Ce projet peut être déployé sur un cluster Kubernetes pour une gestion avancée.

## Prérequis
- [Minikube](https://minikube.sigs.k8s.io/docs/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

## Déploiement
1. Démarrez Minikube :
   ```bash
   minikube start
## Appliquez les fichiers de configuration Kubernetes :
2. kubectl apply -f k8s/
## Exposez le service incident-frontend :
3. kubectl get pods
## Exposez le service incident-frontend :
4. minikube service incident-frontend
## Accès
Frontend : URL générée par minikube service.
API Swagger : Accessible via le service backend.
phpMyAdmin : Accessible via le service MySQL.
## Nettoyage Pour supprimer les ressources Kubernetes :
kubectl delete -f k8s/