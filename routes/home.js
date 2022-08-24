const express = require('express');
const { leerUrls, agregarUrls, eliminarUrl, editarUrl, editarUrlForm, redireccionamiento } = require('../controllers/homeController');
const validarUrl = require('../middlewares/urlValida');
const router = express.Router();

router.get("/", leerUrls);
router.post("/",validarUrl, agregarUrls);
router.get("/eliminar/:id", eliminarUrl);
router.get("/editar/:id", editarUrlForm);
router.post("/editar/:id",validarUrl, editarUrl);
router.get("/:shortUrl", redireccionamiento);


module.exports = router;
