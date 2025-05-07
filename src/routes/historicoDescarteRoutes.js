const express = require('express');
const HistoricoDescarte = require('../models/historicoDescarteModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const historico = await HistoricoDescarte.create(req.body);
    res.status(201).json(historico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const historicos = await HistoricoDescarte.findAll();
    res.status(200).json(historicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const historico = await HistoricoDescarte.findById(req.params.id);
    if (!historico) {
      return res.status(404).json({ error: 'Histórico Descarte not found' });
    }
    res.status(200).json(historico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const historico = await HistoricoDescarte.update(req.params.id, req.body);
    if (!historico) {
      return res.status(404).json({ error: 'Histórico Descarte not found' });
    }
    res.status(200).json(historico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await HistoricoDescarte.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Histórico Descarte not found' });
    }
    res.status(200).json({ message: 'Histórico Descarte deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;