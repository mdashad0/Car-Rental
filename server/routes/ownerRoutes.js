// import express from "express";
// import { protect } from "../middleware/auth";
// import { addCar, changeRoleToOwner, DeleteCar, getOwnerCars, toogleCarAvailability } from "../controllers/ownerController";
// import upload from "../middleware/multer";


// const ownerRoute = express.Router();


// ownerRoute.post("/change-role", protect, changeRoleToOwner)
// ownerRoute.post("/add-car", upload.single("image"), protect, addCar)
// ownerRoute.get("/cars", protect, getOwnerCars)
// ownerRoute.post("/toggle-car", protect, toogleCarAvailability)
// ownerRoute.post("/delete-car", protect, DeleteCar)

// export default ownerRoute;

import express from "express";
import protect from "../middleware/auth.js";
import {
  addCar,
  changeRoleToOwner,
  DeleteCar,
  getDashboardData,
  getOwnerCars,
  toogleCarAvailability,
  updateUserImage,
} from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRoute = express.Router();

ownerRoute.post("/change-role", protect, changeRoleToOwner);
ownerRoute.post("/add-car", protect, upload.single("image"), addCar);
ownerRoute.get("/cars", protect, getOwnerCars);
ownerRoute.post("/toggle-car", protect, toogleCarAvailability);
ownerRoute.post("/delete-car", protect, DeleteCar);

ownerRoute.get('/dashboard', protect,getDashboardData)
ownerRoute.post('/update-image', upload.single('image'),protect,updateUserImage )

export default ownerRoute;
