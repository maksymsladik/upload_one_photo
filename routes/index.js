const { Router } = require("express");
const router = Router();
const photoRouter = require("./photoRouter");

router.use("/app", photoRouter);

module.exports = router;
