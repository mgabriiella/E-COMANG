const express = require('express');
const Endereco = require('../models/enderecoModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const endereco = await Endereco.create(req.body);
    res.status(201).json(endereco);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const enderecos = await Endereco.findAll();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const endereco = await Endereco.findById(req.params.id);
    if (!endereco) {
      return res.status(404).json({ error: 'Endereço not found' });
    }
    res.status(200).json(endereco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const endereco = await Endereco.update(req.params.id, req.body);
    if (!endereco) {
      return res.status(404).json({ error: 'Endereço not found' });
    }
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Endereco.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Endereço not found' });
    }
    res.status(200).json({ message: 'Endereço deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;