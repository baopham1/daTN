var express = require('express');
var router = express.Router();
const orderController = require("../controllers/order")

router.get('/lichsumuahang', async function(req, res, next) {
    const orders = await orderController.get();
    console.log(orders,"dong7")
      res.render('lichsumuahang',{orders:orders});
      
    });
    

router.post("/addOrder", async(req, res)=>{
    const { checkOutData } = req.body
    console.log(checkOutData)
    try{
        const result = await orderController.checkoutdata(checkOutData)
        if(result){
            res.json({...result, success:true})
        }else{
            res.json({...result, success:false})
        }
    }catch(e){
        
        res.json({e, success:false})
        console.log(e)
    }

});


module.exports = router;