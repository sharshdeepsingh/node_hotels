const express=require('express');
const router=express.Router()
const Person=require('../models/person')

router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newPerson = new Person(data);
      const response=await newPerson.save();
      console.log('Data is saved');
      res.status(200).json(response);
    }
    catch(err)
    {
  console.log(err);
  res.status(500).json({error:'Internal server error'});
    }
  });

  router.get('/',async(req,res)=>
    {
      try{
        const data=await Person.find()
        console.log('data is fetched');
        res.status(200).json(data);
      }
      catch(err)
      {
        console.log(err);
        res.status(500).json({err:"internal server error"});
      }
    })

    router.get('/:WorkType',async(req,res)=>
        {
          try{
            const WorkType=req.params.WorkType;
            if(WorkType=='chef' || WorkType=='waiter'|| WorkType=='manager')
            {
              const result=await Person.find({works: WorkType})
              console.log('data is fetched successfully');
              res.status(200).json(result)
            }
            else
            {
              res.status(404).json({error:'invalid WorkType'});
            }
          }
          catch(err)
          {
            console.log(err);
            res.status(500).json({error:'data is not fetched'})
          }
})

router.put('/:id',async(req,res)=>
{
    try{
        const get_id=req.params.id;
        const update_id=req.body;
        
        const result=await Person.findByIdAndUpdate(get_id,update_id,{
            new:true,
            runValidators:true
        })
        if(!result)
        {
            return res.status(404).json({error:'person not found'});
        }
        console.log('data uploaded');
        res.status(200).json(result);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const get_id=req.params.id;
        const result=await Person.findOneAndDelete(get_id);
        if(!result)
        {
         return   res.status(404).json('person not found');
        }
        console.log('person deleted successfully')
        res.status(200).json({message:'person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})



module.exports=router;

        