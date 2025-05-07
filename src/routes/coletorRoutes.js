const express = require('express');
const Coletor = require('../models/coletorModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const coletor = await Coletor.create(req.body);
    res.status(201).json(coletor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const coletores = await Coletor.findAll();
    res.status(200).json(coletores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const coletor = await Coletor.findById(req.params.id);
    if (!coletor) {
      return res.status(404).json({ error: 'Coletor not found' });
    }
    res.status(200).json(coletor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const coletor = await Coletor.update(req.params.id, req.body);
    if (!coletor) {
      return res.status(404).json({ error: 'Coletor not found' });
    }
    res.status(200).json(coletor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Coletor.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Coletor not found' });
    }
    res.status(200).json({ message: 'Coletor deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;