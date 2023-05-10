import express from "express";
import multer from "multer";
import userController from "../Controllers/userController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

router.get("/", userController.getList);

router.get("/:id", userController.getById);

router.put("/:id", userController.update);

router.post("/", userController.addUser);

router.delete("/:id", userController.delete);

router.post(
  "/uploadProfilePicture/:id",
  upload.single("profilePicture"),
  userController.uploadProfilePicture
);

router.delete("/deleteProfilePicture/:id", userController.deleteProfilePicture);

export default router;
