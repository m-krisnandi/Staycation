const router = require('express').Router();
const adminController = require('../controllers/adminController');

// endpoint dashboard
router.get('/dashboard', adminController.viewDashboard);

// endpoint category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

// endpoint bank
router.get('/bank', adminController.viewBank);

// endpoint item
router.get('/item', adminController.viewItem);

// endpoint booking
router.get('/booking', adminController.viewBooking);

module.exports = router;