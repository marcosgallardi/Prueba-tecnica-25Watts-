const {Sucursales} = require('../../db')

const sucPostController = async(name,ciudad,direccion,imagen) =>{
  const create =  await Sucursales.create({
        name,
        ciudad,
        direccion,
        imagen
    })

    return create
}

module.exports = sucPostController;