const express = require('express');
const Coleta = require('../models/coletaModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('Corpo recebido no POST:', req.body);
    const coleta = await Coleta.create(req.body);
    res.status(201).json(coleta);
  } catch (error) {
    console.error('Erro no POST:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const coletas = await Coleta.findAll();
    res.status(200).json(coletas);
  } catch (error) {
    console.error('Erro no GET:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const coleta = await Coleta.findById(req.params.id);
    if (!coleta) {
      return res.status(404).json({ error: 'Coleta not found' });
    }
    res.status(200).json(coleta);
  } catch (error) {
    console.error('Erro no GET por ID:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log('Corpo recebido no PUT:', req.body);
    const coleta = await Coleta.update(req.params.id, req.body);
    if (!coleta) {
      return res.status(404).json({ error: 'Coleta not found' });
    }
    res.status(200).json(coleta);
  } catch (error) {
    console.error('Erro no PUT:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log('Deletando ID:', req.params.id);
    const deleted = await Coleta.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Coleta not found' });
    }
    res.status(200).json({ message: 'Coleta deleted' });
  } catch (error) {
    console.error('Erro no DELETE:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;