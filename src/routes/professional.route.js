const router = require("express").Router();

const auth = require("../middlewares/auth.middleware");
const professional = require("../controllers/professional.controller");

router.get("/", auth, professional.index);
router.post("/", auth, professional.store);
router.get("/:id", auth, professional.read);
router.put("/:id", auth, professional.update);
router.delete("/:id", auth, professional.delete);

module.exports = router;
