const personaService = require('../services/usuario.service');

exports.getAll = async (req, res) => {
    try {
        const personas = await personaService.getAll();
        res.json(personas);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const persona = await personaService.getById(req.params.id);
        res.json(persona);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevaPersona = await personaService.create(req.body);
        res.json(nuevaPersona);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async (req, res) => {
    try {
        await personaService.update(req.params.id, req.body);
        res.json({ mensaje: 'Persona actualizada' });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await personaService.delete(req.params.id);
        res.json({ mensaje: 'Persona eliminada' });
    } catch (err) {
        res.status(500).json(err);
    }
};
