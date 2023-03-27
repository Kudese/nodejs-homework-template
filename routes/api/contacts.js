const express = require("express");
// const { addFavoriteStatus } = require("../../middelwares/contactMiddelwares");
const router = express.Router();

const {
  getContactByIDController,
  getContactControllers,
  postContactController,
  deleteContactController,
  putContactController,
  pathcContactByIDToFavorite,
} = require("../controllers/contatcs");

router.get("/", async (req, res) => getContactControllers(req, res));
router.post("/",
  // addFavoriteStatus,
  postContactController
);

router.get("/:contactId", async (req, res) =>
  getContactByIDController(req, res)
);
router.delete("/:contactId", async (req, res) =>
  deleteContactController(req, res)
);
router.put("/:contactId", async (req, res) => putContactController(req, res));

router.patch("/:contactId/favorite", async (req, res) => {
  pathcContactByIDToFavorite(req, res);
});

module.exports = router;
