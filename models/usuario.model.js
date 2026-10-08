const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoDocumento: DataTypes.STRING,
    numeroDocumento: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    correo: DataTypes.STRING
}, {
    tableName: 'personas',
    timestamps: false
});

module.exports = Persona;
