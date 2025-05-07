const pool = require('../config/db');

class Residuos {
  static async create(data) {
    const { Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID } = data;
    if (!Data_Descarte || Peso === undefined || Pontos_Acumulados === undefined || !Usuário_ID || !Estação_ID || !Tipo_Resíduo_ID) {
      throw new Error('Campos obrigatórios ausentes: Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID');
    }
    const [rows] = await pool.query(
      'INSERT INTO RESÍDUO (Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID) VALUES (?, ?, ?, ?, ?, ?)',
      [Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID]
    );
    return { ID: rows.insertId, Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM RESÍDUO');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM RESÍDUO WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, data) {
    const { Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID } = data;
    if (!Data_Descarte || Peso === undefined || Pontos_Acumulados === undefined || !Usuário_ID || !Estação_ID || !Tipo_Resíduo_ID) {
      throw new Error('Campos obrigatórios ausentes: Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID');
    }
    await pool.query(
      'UPDATE RESÍDUO SET Data_Descarte = ?, Peso = ?, Pontos_Acumulados = ?, Usuário_ID = ?, Estação_ID = ?, Tipo_Resíduo_ID = ? WHERE ID = ?',
      [Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM RESÍDUO WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Residuos;