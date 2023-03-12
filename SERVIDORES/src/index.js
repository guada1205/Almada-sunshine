const express = require('express');
const path = require('path');
const app = express();

const port = 3005

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/home.html'))
});

app.get('/detalle_producto', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/detalle_producto.html'))
});

app.get('/iniciosesion', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/iniciosesion.html'))
});

app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/registro.html'))
});

app.get('/carrito', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/carrito.html'))
});