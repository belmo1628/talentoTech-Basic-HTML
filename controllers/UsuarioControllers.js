const UserSchema = require("../models/Usuario") // Accedemos a los datos del modelo
const bcrypt = require("bcrypt") //importamos la libreria de encriptación

// Permite agrupar atributos y funciones
class UsuarioController {

    async getUsuarios(req, res) {
        var usuarios = await UserSchema.find();
        res.json(usuarios)
    }

    async createUsuario(req, res){
       //encriptando la contraseña
       const hashedPasword = await bcrypt.hash(req.body.pasword, 10)
        var nuevoUsuario = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            password:hashedPasword, //guardo la contraseña hasheada
        }

        await UserSchema(nuevoUsuario).save()
        .then((result)=> {//cuando se ejecuta correctamente
            res.send({"status":"success", "message": "Usuario guardado correctamente"})
    }).cath((error)=> {//cuando hay un error
        res.send({"status": "error", "message": error.message})
    })

    async getUsuarioById(req, res){
        var id = req.params.id
        var usuario = await UserSchema.findById(id)
        res.json(usuario)
    }

    async updateUsuario(req, res){

        var id = req.params.id;

        var updateUser = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            password: req.body.password,
        }

        await UserSchema.findByIdAndUpdate(id, updateUser, { new: true })

        res.json({"status": "success", "message": "Usuario Actualizado correctamente"})
    }

    async deleteUsuario(req, res){
        var id = req.params.id

        await UserSchema.deleteOne({_id: id})

        res.json({"status": "success", "message": "Usuario Eliminador correctamente"})
    }
}

module.exports = UsuarioController