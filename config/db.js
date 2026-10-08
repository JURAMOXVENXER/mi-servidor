const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('personas_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
    .then(() => console.log('Conectado a MySQL con Sequelize'))
    .catch((err) => console.error('Error de conexión:', err));

module.exports = sequelize;
