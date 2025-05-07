const pool = require('../config/db');

class Endereco {
  static async create({ Bairro, Cidade, Estado, CEP, Número }) {
    const [rows] = await pool.query(
      'INSERT INTO ENDEREÇO (Bairro, Cidade, Estado, CEP, Número) VALUES (?, ?, ?, ?, ?)',
      [Bairro, Cidade, Estado, CEP, Número]
    );
    return { ID: rows.insertId, Bairro, Cidade, Estado, CEP, Número };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM ENDEREÇO');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM ENDEREÇO WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Bairro, Cidade, Estado, CEP, Número }) {
    await pool.query(
      'UPDATE ENDEREÇO SET Bairro = ?, Cidade = ?, Estado = ?, CEP = ?, Número = ? WHERE ID = ?',
      [Bairro, Cidade, Estado, CEP, Número, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM ENDEREÇO WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Endereco;