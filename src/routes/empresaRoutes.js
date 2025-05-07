const express = require('express');
const Empresa = require('../models/empresaModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const empresa = await Empresa.create(req.body);
    res.status(201).json(empresa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const empresa = await Empresa.findById(req.params.id);
    if (!empresa) {
      return res.status(404).json({ error: 'Empresa not found' });
    }
    res.status(200).json(empresa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const empresa = await Empresa.update(req.params.id, req.body);
    if (!empresa) {
      return res.status(404).json({ error: 'Empresa not found' });
    }
    res.status(200).json(empresa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Empresa.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Empresa not found' });
    }
    res.status(200).json({ message: 'Empresa deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;