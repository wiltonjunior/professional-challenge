const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const typeProfessional = require("../controllers/typeProfessional.controller");

router.get("/", auth, typeProfessional.index);
router.post("/", auth, typeProfessional.store);
router.get("/:id", auth, typeProfessional.read);
router.put("/:id", auth, typeProfessional.update);
router.delete("/:id", auth, typeProfessional.delete);

module.exports = router;
