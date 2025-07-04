module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Incident', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('Evasion', 'Panne', 'Blessure'),
        allowNull: false
      },
      zone: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      urgence: {
        type: DataTypes.ENUM('Basse', 'Moyenne', 'Haute'),
        allowNull: false
      },
      statut: {
        type: DataTypes.ENUM('En cours', 'Résolu'),
        allowNull: false,
        defaultValue: 'En cours'
      }
    });
  };