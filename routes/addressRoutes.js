import express from 'express';
import { getAddresses, createAddress, getAddressById, updateAddress, deleteAddress } from '../controllers/addressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getAddresses).post(protect, createAddress);
router.route('/:id').get(protect, getAddressById).put(protect, updateAddress).delete(protect, deleteAddress);

export default router;