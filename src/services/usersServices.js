const {Users} = require("../../database/models")
const { use } = require("../routers/usersRouter")

const usersServices = {
    findUserEmail: (email) => {
        return Users.findOne({
            where: {email: email}
        })
    },

    createUser: (newUser) => {
        return Users.create({
            id: newUser.id,
            name: newUser.name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            rank: newUser.rank
        })
    },

    editProfilePersonalInformation: (userId, userEdited) => {
        return Users.update({
            name: userEdited.name,
            last_name: userEdited.lastName,
            email: userEdited.email
        }, {
            where: {id: userId}
        })
    },

    editPassword: (userId, passwordEdited) => {
        return Users.update({
            password: passwordEdited
        }, {
            where: {id: userId}
        })
    },

    editProfileShipmentInformation: (userId, newShipmentInfo) => {
        return Users.update({
            country: newShipmentInfo.country,
            province: newShipmentInfo.province,
            city: newShipmentInfo.city,
            address: newShipmentInfo.address,
            cp: newShipmentInfo.cp
        }, {
            where: {id: userId}
        })
    }
}

module.exports = usersServices