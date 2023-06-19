const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getHurto, postHurto, putHurto, deleteHurto} = require('../controllers/hurto')

route.get('/', getHurto)

route.post('/', postHurto)

route.put('/', putHurto)

route.delete('/', deleteHurto)


module.exports = route 