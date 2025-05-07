const express = require('express');
const ResgataBeneficio = require('../models/resgataBeneficioModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const resgate = await ResgataBeneficio.create(req.body);
    res.status(201).json(resgate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const resgates = await ResgataBeneficio.findAll();
    res.status(200).json(resgates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resgate = await ResgataBeneficio.findById(req.params.id);
    if (!resgate) {
      return res.status(404).json({ error: 'Resgate Benefício not found' });
    }
    res.status(200).json(resgate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const resgate = await ResgataBeneficio.update(req.params.id, req.body);
    if (!resgate) {
      return res.status(404).json({ error: 'Resgate Benefício not found' });
    }
    res.status(200).json(resgate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ResgataBeneficio.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Resgate Benefício not found' });
    }
    res.status(200).json({ message: 'Resgate Benefício deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;