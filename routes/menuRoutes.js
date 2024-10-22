const express=require('express');
const router= express.Router();
const Menu=require('./../models/menu')


router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const NewData= new Menu(data);
      const response=await NewData.save();
      console.log('data is saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })


  
 router.get('/',async(req,res)=>{
    try{
      const data= await Menu.find();
      console.log('data is fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'internal server error'});
    }
  })

  router.get('/:tasteType',async(req,res)=>
{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='spicy' || tasteType=='sweet' || tasteType=='sour')
        {
            const result=await Menu.find({taste:tasteType});
            console.log('data is fetched succesfully')
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({error:'invalid taste entered'})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal syntax error'})
    }
})

router.put('/:id',async(req,res)=>{
  try{
    const get_id=req.params.id;
  const update_id=req.body;
  const result=await Menu.findByIdAndUpdate(get_id,update_id,{
    new:true,
    runValidators:true
  })
  if(!result)
  {
   return res.status(404).json({error:'invalid id entered'})
  }
  console.log('data updated');
  res.status(200).json(result);
  }
  catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
  }
  
})


router.delete('/:id',async(req,res)=>{
  try{
    const get_id=req.params.id;
    const result=await Menu.findByIdAndDelete(get_id);
    if(!result)
    {
      return res.status(404).json('cannot fond the id');
    }
    console.log('the data has been deleted');
    res.status(200).json({deleted:'deletion successfully'});
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({err:'internal server error'});
  }
})

  module.exports=router;