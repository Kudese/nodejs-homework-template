const getContactControllers = require('./getContactControllers')
const getContactByIDController = require('./getContactByIDController')
const postContactController = require('./postContactController')
const putContactController = require('./putContactController')
const pathcContactByIDToFavorite = require('./pathcContactByIDToFavorite')
const deleteContactController = require('./deleteContactController')

module.exports={
    getContactByIDController,
    getContactControllers,
    postContactController,
    putContactController,
    pathcContactByIDToFavorite,
    deleteContactController
}