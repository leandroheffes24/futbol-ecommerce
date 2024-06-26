const {Router} = require("express")
const router = Router()
const categoriesController = require("../controllers/categoriesController")
const adminMiddleware = require("../middlewares/adminMiddleware")

router.get("/categories/:categoryName", categoriesController.categoryProducts)
router.get("/crear/categoria", adminMiddleware, categoriesController.crearCategoria)
router.post("/crear/categoria", adminMiddleware, categoriesController.crearCategoriaProcess)
router.get("/editar/categoria", adminMiddleware, categoriesController.editarCategoria)
router.get("/editar/categoria/:categoryId", adminMiddleware, categoriesController.editarCategoriaId)
router.put("/editar/categoria/:categoryId", adminMiddleware, categoriesController.editarCategoriaProcess)
router.get("/eliminar/categoria", adminMiddleware, categoriesController.eliminarCategoria)
router.delete("/eliminar/categoria/:categoryId", adminMiddleware, categoriesController.eliminarCategoriaProcess)
router.get("/crear/subcategoria", adminMiddleware, categoriesController.crearSubcategoria)
router.post("/crear/subcategoria", adminMiddleware, categoriesController.crearSubcategoriaProcess)
router.get("/editar/subcategoria", adminMiddleware, categoriesController.editarSubcategoria)
router.get("/editar/subcategoria/:subcategoryId", adminMiddleware, categoriesController.editarSubcategoriaId)
router.put("/editar/subcategoria/:subcategoryId", adminMiddleware, categoriesController.editarSubcategoriaProcess)
router.get("/eliminar/subcategoria", adminMiddleware, categoriesController.eliminarSubcategoria)
router.delete("/eliminar/subcategoria/:subcategoryId", adminMiddleware, categoriesController.eliminarSubcategoriaProcess)
router.get("/categories/:categoryName/filtrado", categoriesController.categoryFilterProducts)

module.exports = router