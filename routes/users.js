const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM user_access', (err, rows) => {
    if (err) throw err;
    res.render('index', { users: rows });
  });
});

router.get('/add', (req, res) => {
  res.render('add');
});

router.post('/add', (req, res) => {
  const { username, email, role, access_area, approver, grant_date, revoke_date, status, comments } = req.body;
  const query = `
    INSERT INTO user_access (username, email, role, access_area, approver, grant_date, revoke_date, status, comments)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [username, email, role, access_area, approver, grant_date, revoke_date, status, comments], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

router.get('/edit/:id', (req, res) => {
  db.query('SELECT * FROM user_access WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.render('edit', { user: rows[0] });
  });
});

router.post('/edit/:id', (req, res) => {
  const { username, email, role, access_area, approver, grant_date, revoke_date, status, comments } = req.body;
  db.query(
    `UPDATE user_access SET username=?, email=?, role=?, access_area=?, approver=?, grant_date=?, revoke_date=?, status=?, comments=? WHERE id=?`,
    [username, email, role, access_area, approver, grant_date, revoke_date, status, comments, req.params.id],
    (err) => {
      if (err) throw err;
      res.redirect('/');
    }
  );
});

router.get('/delete/:id', (req, res) => {
  db.query('DELETE FROM user_access WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
