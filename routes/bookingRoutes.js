import express from "express"
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingController.js"
import { verifyAdmin, verifyUser } from "../middleware/verifyToken.js"

const router = express.Router()

router.post('/', verifyUser, createBooking)
router.get('/',getAllBooking)
router.get('/:id', verifyUser,getBooking)

export default router