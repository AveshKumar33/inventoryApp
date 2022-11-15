const express=require('express');
const router=express.Router();
const categoryController=require('../controllers/categoryControllers');
const itemController=require('../controllers/itemsControllers');

// -----------------BASIC CURD OPERATION OF CATEGORY--------------------------
router.post('/category/create',categoryController.insertCategory);
router.get('/category/read',categoryController.readCategory);
router.delete("/category/:Name/delete", categoryController.deleteCategory);
//router.put("/category/:id/update", categoryController.updateCategory);




// -----------------BASIC CURD OPERATION OF ITEM--------------------------
router.post('/item/create',itemController.insertItem);
router.get('/item/read',itemController.readItem);
//router.get("/category/:id/delete", author_controller.author_delete_get);


module.exports = router;