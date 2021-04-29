const { Router } = require("express");
const router = Router();
const { getPhoto, updatePhoto } = require("../controllers/photoController");

router.get("/photo/:id", getPhoto);
router.patch("/photo/:id", updatePhoto);

module.exports = router;
