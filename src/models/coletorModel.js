const pool = require('../config/db');

class Coletor {
  static async create({ Nome, CPF_CNPJ, Capacidade_Kg, Empresa_ID }) {
    const [rows] = await pool.query(
      'INSERT INTO COLETOR (Nome, CPF_CNPJ, Capacidade_Kg, Empresa_ID) VALUES (?, ?, ?, ?)',
      [Nome, CPF_CNPJ, Capacidade_Kg, Empresa_ID]
    );
    return { ID: rows.insertId, Nome, CPF_CNPJ, Capacidade_Kg, Empresa_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM COLETOR');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM COLETOR WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Nome, CPF_CNPJ, Capacidade_Kg, Empresa_ID }) {
    await pool.query(
      'UPDATE COLETOR SET Nome = ?, CPF_CNPJ = ?, Capacidade_Kg = ?, Empresa_ID = ? WHERE ID = ?',
      [Nome, CPF_CNPJ, Capacidade_Kg, Empresa_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM COLETOR WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Coletor;