var express = require("express");
const { route } = require("../../../app");
var router = express.Router();
const { getAll, create, getOne, update, destroy } = require("./controller");
const { validateCreate, validateOne, validateUpdate } = require("./validation");

router.get("/todos", getAll);
router.post("/todos", validateCreate, create);
router.get("/todos/:id", validateOne, getOne);
router.put("/todos/:id", validateUpdate, update);
router.delete("/todos/:id", validateOne, destroy);
/* router.get("/todos", function (req, res, next) {
 * 	res.json({ message: "respond todos with a resource" });
 * });
 */

module.exports = router;
