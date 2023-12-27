const {sucursales} = require('../../db')

const sucursalPostController = async(name,ciudad,direccion,imagen) =>{
  const create =  await sucursales.create({
        name,
        ciudad,
        direccion,
        imagen
    })

    return create
}

module.exports = sucursalPostController;