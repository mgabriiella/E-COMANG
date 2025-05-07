const pool = require('../config/db');

class Empresa {
  static async create({ Nome_Empresa, CNPJ, Tipo_Parceria, Contato, Endereço_ID }) {
    const [rows] = await pool.query(
      'INSERT INTO EMPRESA (Nome_Empresa, CNPJ, Tipo_Parceria, Contato, Endereço_ID) VALUES (?, ?, ?, ?, ?)',
      [Nome_Empresa, CNPJ, Tipo_Parceria, Contato, Endereço_ID]
    );
    return { ID: rows.insertId, Nome_Empresa, CNPJ, Tipo_Parceria, Contato, Endereço_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM EMPRESA');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM EMPRESA WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Nome_Empresa, CNPJ, Tipo_Parceria, Contato, Endereço_ID }) {
    await pool.query(
      'UPDATE EMPRESA SET Nome_Empresa = ?, CNPJ = ?, Tipo_Parceria = ?, Contato = ?, Endereço_ID = ? WHERE ID = ?',
      [Nome_Empresa, CNPJ, Tipo_Parceria, Contato, Endereço_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM EMPRESA WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Empresa;