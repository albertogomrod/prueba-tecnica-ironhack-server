const router = require("express").Router();
const Phone = require("../models/Phone.model")

// en este archivo haremos todas las rutas de CRUD de todos

// GET "/phones" => enviar la lista de telefonos
router.get("/", async (req, res, next) => {
  try {
    const response = await Phone.find()
    res.json(response)
  } catch (error) {
    next(error)
  }
})


// GET "/phones/:id" => enviar los detalles de un telefono por su id
router.get("/:id", async (req, res, next) => {

  console.log(req.params)
  const { id } = req.params;

  try {
    
    const response = await Phone.findById(id)
    res.json(response)

  } catch (error) {
    next(error)
  }
})




module.exports = router;