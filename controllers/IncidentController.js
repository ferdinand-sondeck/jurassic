const IncidentService = require('../services/IncidentService');

class IncidentController {
  /**
   * Récupère la liste des incidents, en appliquant des filtres si présents dans la query string.
   * @param {Object} req - Objet requête Express.
   * @param {Object} res - Objet réponse Express.
   * @param {Function} next - Fonction middleware pour passer les erreurs.
   */
  static async getAll(req, res, next) {
    try {
      // Création d'un objet filtre en fonction des paramètres query
      const filter = {};
      if (req.query.type) {
        filter.type = req.query.type;
      }
      if (req.query.urgence) {
        filter.urgence = req.query.urgence;
      }
      if (req.query.zone) {
        filter.zone = req.query.zone;
      }

      const incidents = await IncidentService.getAll(filter);
      res.status(200).json(incidents);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Récupère un incident en fonction de son ID.
   */
  static async getById(req, res, next) {
    try {
      const incident = await IncidentService.getById(req.params.id);
      if (!incident) {
        return res.status(404).json({ error: 'Incident non trouvé' });
      }
      res.status(200).json(incident);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Crée un nouvel incident à partir des données fournies dans le corps de la requête.
   */
  static async create(req, res, next) {
    try {
      const createdIncident = await IncidentService.create(req.body);
      res.status(201).json(createdIncident);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Met à jour un incident existant identifié par son ID.
   */
  static async update(req, res, next) {
    try {
      const updatedIncident = await IncidentService.update(req.params.id, req.body);
      res.status(200).json(updatedIncident);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Supprime un incident en fonction de son ID.
   */
  static async delete(req, res, next) {
    try {
      await IncidentService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = IncidentController;
