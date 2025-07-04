const db = require('../models');
const Incident = db.Incident;

class IncidentService {
  static async getAll(filter) {
    return await Incident.findAll({ where: filter });
  }

  static async getById(id) {
    return await Incident.findByPk(id);
  }

  static async create(data) {
    return await Incident.create(data);
  }

  static async update(id, data) {
    const incident = await Incident.findByPk(id);
    if (!incident) throw new Error("Incident non trouvé");
    return await incident.update(data);
  }

  static async delete(id) {
    const incident = await Incident.findByPk(id);
    if (!incident) throw new Error("Incident non trouvé");
    return await incident.destroy();
  }
}

module.exports = IncidentService;