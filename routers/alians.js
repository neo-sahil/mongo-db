const express = require('express');
const Alian = require('../modals/alian');

const router = express.Router();

//this is for fetching all data
router.get('/', async(req,res)=>{
    try{
        const alians = await Alian.find();
        res.json(alians);
    }
    catch(err){
        res.send('Error '+ err);
    }
});


//this is fetching one data
router.get('/:id', async(req,res)=>{
    try{
        const alian = await Alian.findById(req.params.id);
        res.json(alian);
    }
    catch(err){
        res.send('Error '+ err);
    }
});


//this is for creating new data
router.post('/', async(req,res)=>{

    const alian = new Alian({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alian.save();
        res.json(a1);
    }
    catch(err){
        res.send('Error '+ err);
    }
});

router.patch('/:id',async(req,res)=>{
    try{
        const alian = await Alian.findById(req.params.id);
        alian.sub = req.body.sub;
        const a1 = await alian.save();
        res.json(a1);
    }catch(err){
        res.send('Error '+ err);
    }
});


//this is for deletion
router.delete('/:id', async(req,res)=>{
    try{
        const alian = await Alian.findById(req.params.id);
        const a1 = await alian.remove();
        res.json(a1);
    }catch(err){
        res.send('Error '+err);
    }
});
module.exports = router;