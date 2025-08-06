const pool = require('../db');

// Listar todas as notificações
exports.getAllNotifications = async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM notifications ORDER BY createdAt DESC');
    conn.release();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar notificações' });
  }
};

// Buscar notificação por ID
exports.getNotificationById = async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM notifications WHERE id = ?', [req.params.id]);
    conn.release();
    if (rows.length === 0) return res.status(404).json({ error: 'Notificação não encontrada' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar notificação' });
  }
};

// Criar nova notificação
exports.createNotification = async (req, res) => {
  try {
    const { name, message, isActive } = req.body;
    const conn = await pool.getConnection();
    const result = await conn.query(
      'INSERT INTO notifications (name, message, isActive, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())',
      [name, message, isActive]
    );
    conn.release();
    res.status(201).json({ id: result.insertId, name, message, isActive });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar notificação' });
  }
};

// Atualizar notificação
exports.updateNotification = async (req, res) => {
  try {
    const { name, message, isActive } = req.body;
    const conn = await pool.getConnection();
    const result = await conn.query(
      'UPDATE notifications SET name=?, message=?, isActive=?, updatedAt=NOW() WHERE id=?',
      [name, message, isActive, req.params.id]
    );
    conn.release();
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Notificação não encontrada' });
    res.json({ id: req.params.id, name, message, isActive });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar notificação' });
  }
};

// Alterar status (ativo/inativo)
exports.updateNotificationStatus = async (req, res) => {
  try {
    const { isActive } = req.body;
    const conn = await pool.getConnection();
    const result = await conn.query(
      'UPDATE notifications SET isActive=?, updatedAt=NOW() WHERE id=?',
      [isActive, req.params.id]
    );
    conn.release();
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Notificação não encontrada' });
    res.json({ id: req.params.id, isActive });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar status' });
  }
};
