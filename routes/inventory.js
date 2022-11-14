const express=require('express');
const router=express.Router();
const adminController=require('../controllers/adminControllers');
const categoryController=require('../controllers/categoryControllers');
// -----------------BASIC CURD OPERATION OF ADMIN--------------------------
router.post('/insert/admin',adminController.insertAdmin);
router.get('/read/admin',adminController.readAdmin);


// -----------------BASIC CURD OPERATION OF CATEGORY--------------------------
router.post('/insert/category',categoryController.insertCategory);
router.get('/read/category',categoryController.readCategory)





// -----------------BASIC CURD OPERATION OF CUSTOMER--------------------------




// -----------------BASIC CURD OPERATION OF --------------------------


module.exports = router;