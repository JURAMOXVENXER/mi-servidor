const Persona = require('../models/usuario.model');

exports.getAll = () => {
    return Persona.findAll();
};

exports.getById = (id) => {
    return Persona.findByPk(id);
};

exports.create = (persona) => {
    return Persona.create(persona);
};

exports.update = (id, persona) => {
    return Persona.update(persona, { where: { id } });
};

exports.delete = (id) => {
    return Persona.destroy({ where: { id } });
};
