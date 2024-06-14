const express = require('express') // Importando la libreria
const app = express() // Inicializamos la variable de la libreria
const CarroController = require('../controllers/carroControllers') // Importando el controlador
const controller = new CarroController(); // Creando un objeto de Carros

// Creamos nuestros servicios web
app.get('/carro', controller.getCarros) // Obtengo todos los carros
app.post('/carro', controller.createCarro) // Creo un usuario
app.get('/carro/:id', controller.getCarroById) // Consulto un usuario
app.put('/carro/:id', controller.updateCarro) // Actualizo un usuario
app.delete('/carro/:id', controller.deleteCarro) // Elimino un usuario

module.exports = app