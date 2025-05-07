const pool = require('../config/db');

class HistoricoDescarte {
  static async create({ Resíduo_ID, Usuário_ID, Data_Hora_Descarte }) {
    const [rows] = await pool.query(
      'INSERT INTO HISTÓRICO_DESCARTE (Resíduo_ID, Usuário_ID, Data_Hora_Descarte) VALUES (?, ?, ?)',
      [Resíduo_ID, Usuário_ID, Data_Hora_Descarte || new Date()]
    );
    return { ID: rows.insertId, Resíduo_ID, Usuário_ID, Data_Hora_Descarte };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM HISTÓRICO_DESCARTE');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM HISTÓRICO_DESCARTE WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Resíduo_ID, Usuário_ID, Data_Hora_Descarte }) {
    await pool.query(
      'UPDATE HISTÓRICO_DESCARTE SET Resíduo_ID = ?, Usuário_ID = ?, Data_Hora_Descarte = ? WHERE ID = ?',
      [Resíduo_ID, Usuário_ID, Data_Hora_Descarte, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM HISTÓRICO_DESCARTE WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = HistoricoDescarte;