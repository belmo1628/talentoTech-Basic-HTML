const mongoose = require("mongoose") // Importamos la libreria mongoose

const UserSchema = new mongoose.Schema({
   modelo: {
    type: String,
    required: Number
    validate: {
        validator: function(modelo){
            return modelo > 1900;
            },
            message: props => props.value + "No es un modelo válido"
    }
   },
   marca: {
    type: String,
    required: true
   },
    color: {
        type: String,
        required: true
    },
    cilindraje: {
        type: String,
        required: true
        validate: {
            validator: function(cilindraje){
                return modelo > 800;
                },
                message: props => props.value + "No es un cilindraje válido"
   }
},
   placa: {
    type: String,
    required: true,
    unique: true,
    validate: {
     validator: function(placa){
        return /^[A-Z]{3}\d{3}$/.test(placa);
     },
     message: props=> props.value + "No es una placa válida!"
    }
   },
   linea: {
    type: String,
    required: true
   },
   modelo: {
    type: Number,
    required: true
   },
capacidad: {
        validator: function(capacidad){
            return capacidad > 0;
            },
            message: props => props.value + "Capacidad no válida"
},
})

module.exports = mongoose.model('carro', UserSchema)