var express = require('express');
const dog_controllers= require('../controllers/dog'); 
var router = express.Router();

/* GET home page. */
router.get('/', dog_controllers.dog_view_all_Page);
/* GET detail dog page */ 
router.get('/detail', dog_controllers.dog_view_one_Page); 
/* GET create costume page */ 
router.get('/create', dog_controllers.dog_create_Page); 
/* GET create update page */ 
router.get('/update', dog_controllers.dog_update_Page); 
/* GET delete costume page */ 
router.get('/delete', dog_controllers.dog_delete_Page); 
module.exports = router;

 