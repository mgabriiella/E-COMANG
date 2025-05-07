const pool = require('../config/db');

class Beneficio {
  static async create({ Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício = 'Disponível' }) {
    const [rows] = await pool.query(
      'INSERT INTO BENEFÍCIO (Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício) VALUES (?, ?, ?, ?)',
      [Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício]
    );
    return { ID: rows.insertId, Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM BENEFÍCIO');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM BENEFÍCIO WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício }) {
    await pool.query(
      'UPDATE BENEFÍCIO SET Tipo_Desconto = ?, Valor = ?, Pontos_Necessários = ?, Status_Benefício = ? WHERE ID = ?',
      [Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM BENEFÍCIO WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Beneficio;