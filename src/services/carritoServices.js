const {Shopping_cart} = require("../../database/models")

const carritoServices = {
    getUserProducts: (userId) => {
        return Shopping_cart.findAll({
            where: {id_user: userId}
        })
    },

    addProductToCart: (userId, productId, productToCart, quantity, talle) => {
        return Shopping_cart.create({
            id_user: userId,
            id_product: productId,
            product_name: productToCart.product_name,
            product_price: productToCart.price,
            products_total_price: productToCart.price * quantity,
            product_discount: productToCart.discount,
            product_image: productToCart.image,
            quantity: quantity,
            talle: talle
        })
    },

    deleteProductCart: (productIdToDelete, userId, talle) => {
        return Shopping_cart.destroy({
            where: {
                id_user: userId,
                id_product: productIdToDelete,
                talle: talle
            }
        })
    }
}

module.exports = carritoServices