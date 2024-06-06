const {Talles} = require("../../database/models")

const productsServices = {
    getAllTalles: () => {
        return Talles.findAll()
    },

    getLastTalle: () => {
        return Talles.findOne({
            order: [["created_at", "DESC"]]
        })
    },

    getTalleById: (talleId) => {
        return Talles.findByPk(talleId)
    },

    createTalle: (newTalle, newTalleId) => {
        return Talles.create({
            id: newTalleId,
            name: newTalle
        })
    },

    editarTalle: (talleToEditId, newTalleName) => {
        return Talles.update({
            name: newTalleName
        }, {
            where: {id: talleToEditId}
        })
    },

    deleteTalle: (talleToDeleteId) => {
        return Talles.destroy({
            where: {id: talleToDeleteId}
        })
    }
}

module.exports = productsServices