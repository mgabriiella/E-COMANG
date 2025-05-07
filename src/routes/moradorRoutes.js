const express = require('express');
const Morador = require('../models/moradorModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const morador = await Morador.create(req.body);
    res.status(201).json(morador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const moradores = await Morador.findAll();
    res.status(200).json(moradores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const morador = await Morador.findById(req.params.id);
    if (!morador) {
      return res.status(404).json({ error: 'Morador not found' });
    }
    res.status(200).json(morador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const morador = await Morador.update(req.params.id, req.body);
    if (!morador) {
      return res.status(404).json({ error: 'Morador not found' });
    }
    res.status(200).json(morador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Morador.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Morador not found' });
    }
    res.status(200).json({ message: 'Morador deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;