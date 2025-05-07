const express = require('express');
const Residuos = require('../models/residuosModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('Corpo recebido no POST:', req.body);
    const residuo = await Residuos.create(req.body);
    res.status(201).json(residuo);
  } catch (error) {
    console.error('Erro no POST:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const residuos = await Residuos.findAll();
    res.status(200).json(residuos);
  } catch (error) {
    console.error('Erro no GET:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const residuo = await Residuos.findById(req.params.id);
    if (!residuo) {
      return res.status(404).json({ error: 'Resíduo not found' });
    }
    res.status(200).json(residuo);
  } catch (error) {
    console.error('Erro no GET por ID:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log('Corpo recebido no PUT:', req.body);
    const residuo = await Residuos.update(req.params.id, req.body);
    if (!residuo) {
      return res.status(404).json({ error: 'Resíduo not found' });
    }
    res.status(200).json(residuo);
  } catch (error) {
    console.error('Erro no PUT:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log('Deletando ID:', req.params.id);
    const deleted = await Residuos.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Resíduo not found' });
    }
    res.status(200).json({ message: 'Resíduo deleted' });
  } catch (error) {
    console.error('Erro no DELETE:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;