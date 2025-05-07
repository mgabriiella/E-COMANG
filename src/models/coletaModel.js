const pool = require('../config/db');

class Coleta {
  static async create(data) {
    const { Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID } = data;
    if (!Data_Hora_Recolhimento || !Status_Coleta || !Coletor_ID || !Empresa_ID) {
      throw new Error('Campos obrigatórios ausentes: Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID');
    }
    const [rows] = await pool.query(
      'INSERT INTO COLETA (Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID) VALUES (?, ?, ?, ?)',
      [Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID]
    );
    return { ID: rows.insertId, Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM COLETA');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM COLETA WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, data) {
    const { Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID } = data;
    if (!Data_Hora_Recolhimento || !Status_Coleta || !Coletor_ID || !Empresa_ID) {
      throw new Error('Campos obrigatórios ausentes: Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID');
    }
    await pool.query(
      'UPDATE COLETA SET Data_Hora_Recolhimento = ?, Status_Coleta = ?, Coletor_ID = ?, Empresa_ID = ? WHERE ID = ?',
      [Data_Hora_Recolhimento, Status_Coleta, Coletor_ID, Empresa_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM COLETA WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Coleta;