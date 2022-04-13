var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/nguoidung', async function(req, res, next) {
  const users = await userController.get();
  
    res.render('nguoidung',{users:users});
  });
router.post('/switch-role/:id', async function(req, res, next) {
  const {params} = req;
     await userController.switchrole(params.id);
    
      res.json({"status":true});
    });
module.exports = router;
