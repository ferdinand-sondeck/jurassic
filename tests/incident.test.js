const IncidentService = require('../services/IncidentService');
const db = require('../models');

jest.mock('../models'); // Mock Sequelize et Incident

describe('IncidentService', () => {
  const mockIncident = {
    id: 1,
    titre: 'Fuite de raptor',
    description: 'Un raptor s’est échappé de son enclos',
    type: 'Evasion',
    zone: 'Velociraptor Enclosure',
    urgence: 'Haute',
    statut: 'En cours'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('create() crée un incident', async () => {
    db.Incident.create.mockResolvedValue(mockIncident);
    const result = await IncidentService.create(mockIncident);
    expect(result).toEqual(mockIncident);
    expect(db.Incident.create).toHaveBeenCalledWith(mockIncident);
  });

  test('getAll() retourne tous les incidents', async () => {
    db.Incident.findAll.mockResolvedValue([mockIncident]);
    const result = await IncidentService.getAll({});
    expect(result).toEqual([mockIncident]);
    expect(db.Incident.findAll).toHaveBeenCalled();
  });

  test('getById() retourne un incident existant', async () => {
    db.Incident.findByPk.mockResolvedValue(mockIncident);
    const result = await IncidentService.getById(1);
    expect(result).toEqual(mockIncident);
    expect(db.Incident.findByPk).toHaveBeenCalledWith(1);
  });

  test('update() modifie un incident existant', async () => {
    const updated = { ...mockIncident, statut: 'Résolu' };
    const updateMock = jest.fn().mockResolvedValue(updated);

    db.Incident.findByPk.mockResolvedValue({
      ...mockIncident,
      update: updateMock,
    });

    const result = await IncidentService.update(1, { statut: 'Résolu' });
    expect(result).toEqual(updated);
    expect(updateMock).toHaveBeenCalledWith({ statut: 'Résolu' });
  });

  test('delete() supprime un incident', async () => {
    const destroyMock = jest.fn().mockResolvedValue();
    db.Incident.findByPk.mockResolvedValue({
      ...mockIncident,
      destroy: destroyMock,
    });

    await IncidentService.delete(1);
    expect(destroyMock).toHaveBeenCalled();
  });
});