const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
router.get('/adoption', adoptionsController.getAdoption);
router.get('/adoptions', adoptionsController.getAdoptions);
router.post('/adoption', adoptionsController.postAdoption);
router.put('/adoption', adoptionsController.putAdoption);
router.delete('/adoption', adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionsController.getAdoptionByUser);

module.exports = router;