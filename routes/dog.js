var express = require('express');
const dog_controllers= require('../controllers/dog'); 
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', dog_controllers.dog_view_all_Page);
/* GET detail dog page */ 
router.get('/detail', dog_controllers.dog_view_one_Page); 
/* GET create costume page */ 
router.get('/create',secured, dog_controllers.dog_create_Page); 
/* GET create update page */ 
router.get('/update',secured, dog_controllers.dog_update_Page); 
/* GET delete costume page */ 
router.get('/delete',secured, dog_controllers.dog_delete_Page); 
module.exports = router;

 