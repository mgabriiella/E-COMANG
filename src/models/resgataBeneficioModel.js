const pool = require('../config/db');

class ResgataBeneficio {
  static async create({ Data_Resgate, Usuário_ID, Benefício_ID }) {
    const [rows] = await pool.query(
      'INSERT INTO RESGATA_BENEFÍCIO (Data_Resgate, Usuário_ID, Benefício_ID) VALUES (?, ?, ?)',
      [Data_Resgate, Usuário_ID, Benefício_ID]
    );
    return { ID: rows.insertId, Data_Resgate, Usuário_ID, Benefício_ID };
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM RESGATA_BENEFÍCIO');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM RESGATA_BENEFÍCIO WHERE ID = ?', [id]);
    return rows[0];
  }

  static async update(id, { Data_Resgate, Usuário_ID, Benefício_ID }) {
    await pool.query(
      'UPDATE RESGATA_BENEFÍCIO SET Data_Resgate = ?, Usuário_ID = ?, Benefício_ID = ? WHERE ID = ?',
      [Data_Resgate, Usuário_ID, Benefício_ID, id]
    );
    return await this.findById(id);
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM RESGATA_BENEFÍCIO WHERE ID = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ResgataBeneficio;