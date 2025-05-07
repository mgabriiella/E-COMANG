const pool = require('../config/db');

class Estacao {
  static async create(data) {
    const { Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID } = data;
    if (!Status || Capacidade_Atual === undefined || Capacidade_Máxima === undefined || !Endereço_ID) {
      throw new Error('Campos obrigatórios ausentes: Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID');
    }
    const [rows] = await pool.query(
      'INSERT INTO ESTAÇÃO (Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID) VALUES (?, ?, ?, ?)',
      [Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID]
    );
    return { ID: rows.insertId, Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM ESTAÇÃO');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM ESTAÇÃO WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, data) {
    const { Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID } = data;
    if (!Status || Capacidade_Atual === undefined || Capacidade_Máxima === undefined || !Endereço_ID) {
      throw new Error('Campos obrigatórios ausentes: Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID');
    }
    await pool.query(
      'UPDATE ESTAÇÃO SET Status = ?, Capacidade_Atual = ?, Capacidade_Máxima = ?, Endereço_ID = ? WHERE ID = ?',
      [Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM ESTAÇÃO WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Estacao;