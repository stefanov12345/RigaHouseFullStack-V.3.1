import express from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllfavorites, toFav} from "../controllers/userCntrl.js";
import jwtCheck from "../config/authoConfig.js";
const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBooking", getAllBookings) 
router.post("/removeBooking/:id",cancelBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav/", getAllfavorites)

export { router as userRoute };
