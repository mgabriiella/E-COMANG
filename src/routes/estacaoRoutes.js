const express = require('express');
const Estacao = require('../models/estacaoModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const estacao = await Estacao.create(req.body);
    res.status(201).json(estacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const estacoes = await Estacao.findAll();
    res.status(200).json(estacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const estacao = await Estacao.findById(req.params.id);
    if (!estacao) {
      return res.status(404).json({ error: 'Estação not found' });
    }
    res.status(200).json(estacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const estacao = await Estacao.update(req.params.id, req.body);
    if (!estacao) {
      return res.status(404).json({ error: 'Estação not found' });
    }
    res.status(200).json(estacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Estacao.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Estação not found' });
    }
    res.status(200).json({ message: 'Estação deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;