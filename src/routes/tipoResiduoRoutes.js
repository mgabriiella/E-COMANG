const express = require('express');
const TipoResiduo = require('../models/tipoResiduoModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const tipoResiduo = await TipoResiduo.create(req.body);
    res.status(201).json(tipoResiduo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tiposResiduo = await TipoResiduo.findAll();
    res.status(200).json(tiposResiduo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tipoResiduo = await TipoResiduo.findById(req.params.id);
    if (!tipoResiduo) {
      return res.status(404).json({ error: 'Tipo de Resíduo not found' });
    }
    res.status(200).json(tipoResiduo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tipoResiduo = await TipoResiduo.update(req.params.id, req.body);
    if (!tipoResiduo) {
      return res.status(404).json({ error: 'Tipo de Resíduo not found' });
    }
    res.status(200).json(tipoResiduo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await TipoResiduo.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Tipo de Resíduo not found' });
    }
    res.status(200).json({ message: 'Tipo de Resíduo deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;