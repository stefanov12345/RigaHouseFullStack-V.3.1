import express from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllfavorites, toFav} from "../controllers/userCntrl.js";
import jwtCheck from "../config/authoConfig.js";
const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id",jwtCheck, bookVisit);
router.post("/allBooking", getAllBookings) 
router.post("/removeBooking/:id",jwtCheck,cancelBooking)
router.post("/toFav/:rid",jwtCheck, toFav) 
router.post("/allFav/",jwtCheck, getAllfavorites)

export { router as userRoute };
