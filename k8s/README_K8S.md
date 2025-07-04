# Kubernetes – Jurassic Park Incident Tracker

## 🚀 Installation

```bash
kubectl apply -f k8s/

# 🐳 Docker – Jurassic Park Incident Tracker

## 🔧 Prérequis
- Docker Desktop installé
- (Optionnel) Minikube si usage local Kubernetes

---

## 🚀 Backend (Node.js)

### Build de l’image
```bash
cd docker/backend
docker build -t incident-backend:latest .