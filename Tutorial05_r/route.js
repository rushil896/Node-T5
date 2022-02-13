var express = require('express');
const AdminInfo = require('./Models/AdminInfo');
var router = express.Router();


//to fetch data
router.get('/AdminInfo',async(req,res)=>{
    const idata = await AdminInfo.find()
    res.send(idata)
})

//to add the data
router.post("/AdminInfo",async(req,res)=>{
    const idata = new AdminInfo({
        name:req.body.name,
        email:req.body.email
    })

    await idata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating data

router.patch('/AdminInfo/:id',async (req,res)=>{
    const idata = await AdminInfo.findOne({_id:req.params.id})
    idata.name = req.body.name
    idata.email = req.body.email
    await idata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api data
router.delete("/AdminInfo/:id",async(req,res)=>{
    const _id = req.params.id;
    const data = await AdminInfo.findByIdAndDelete(_id)
    res.send(data);
})

module.exports = router 