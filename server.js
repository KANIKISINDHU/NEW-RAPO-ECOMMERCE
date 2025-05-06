
const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database_name',
});

app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching product' });
    }
});

app.get('/api/cart', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM cart');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching cart' });
    }
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
  