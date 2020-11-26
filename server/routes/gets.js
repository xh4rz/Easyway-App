const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid');

const json_books = fs.readFileSync('./item.json', 'utf-8');
let books = JSON.parse(json_books);

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const json_users = fs.readFileSync('./users.json', 'utf-8');
    let users = JSON.parse(json_users);
    let user = users.filter(users => users.Email == req.params.id);
    res.json(user);
});

router.post('/newuser', (req, res) => {

  res.redirect('/Register');
});

module.exports = router;