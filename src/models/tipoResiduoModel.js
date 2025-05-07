const pool = require('../config/db');

class TipoResiduo {
  static async create({ Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg }) {
    const [rows] = await pool.query(
      'INSERT INTO TIPO_RESÍDUO (Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg) VALUES (?, ?, ?)',
      [Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg]
    );
    return { ID: rows.insertId, Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM TIPO_RESÍDUO');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM TIPO_RESÍDUO WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg }) {
    await pool.query(
      'UPDATE TIPO_RESÍDUO SET Nome_Resíduo = ?, Potencial_Reciclagem = ?, Pontos_por_Kg = ? WHERE ID = ?',
      [Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM TIPO_RESÍDUO WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = TipoResiduo;