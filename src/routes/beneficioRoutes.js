const express = require('express');
const Beneficio = require('../models/beneficioModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const beneficio = await Beneficio.create(req.body);
    res.status(201).json(beneficio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const beneficios = await Beneficio.findAll();
    res.status(200).json(beneficios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const beneficio = await Beneficio.findById(req.params.id);
    if (!beneficio) {
      return res.status(404).json({ error: 'Benefício not found' });
    }
    res.status(200).json(beneficio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const beneficio = await Beneficio.update(req.params.id, req.body);
    if (!beneficio) {
      return res.status(404).json({ error: 'Benefício not found' });
    }
    res.status(200).json(beneficio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Beneficio.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Benefício not found' });
    }
    res.status(200).json({ message: 'Benefício deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;