const pool = require('../config/db');

class Morador {
  static async create({ Nome, CPF, Tipo_Residência, Endereço_ID }) {
    const [rows] = await pool.query(
      'INSERT INTO MORADOR (Nome, CPF, Tipo_Residência, Endereço_ID) VALUES (?, ?, ?, ?)',
      [Nome, CPF, Tipo_Residência, Endereço_ID]
    );
    return { ID: rows.insertId, Nome, CPF, Tipo_Residência, Endereço_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM MORADOR');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM MORADOR WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Nome, CPF, Tipo_Residência, Endereço_ID }) {
    await pool.query(
      'UPDATE MORADOR SET Nome = ?, CPF = ?, Tipo_Residência = ?, Endereço_ID = ? WHERE ID = ?',
      [Nome, CPF, Tipo_Residência, Endereço_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM MORADOR WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Morador;