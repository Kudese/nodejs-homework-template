const express = require("express");
const router = express.Router();

const {

  getContactByIDController,
  getContactControllers,
  postContactController,
  deleteContactController,
  putContactController,
  pathcContactByIDToFavorite,
}
 = require("../../controllers/contacts/");

router.get("/", async (req, res) =>
  getContactControllers(req, res)
);
router.post("/", async (req, res) =>
  postContactController(req, res)
);
router.get("/:contactId", async (req, res) =>
  getContactByIDController(req, res)
);
router.delete("/:contactId", async (req, res) =>
  deleteContactController(req, res)
);
router.put("/:contactId", async (req, res) =>
  putContactController(req, res)
);

router.patch("/:contactId/favorite", async (req, res) =>
pathcContactByIDToFavorite(req, res)
);

module.exports = router;
