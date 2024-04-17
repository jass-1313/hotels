const express = require('express')
const router = express.Router()

 let item = require('../models/menuItems')

 router.post('/',async (req,res)=>{
    try{
      const data = req.body
      const newItem = new item(data)
      const response = await newItem.save()
      console.log('data saved.')
      res.status(200).json(response)
  
    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  })
  
  router.get('/',async (req,res)=>{
    try{
      let data = await item.find()
      res.status(200).json(data)
      console.log('info fetched.')
    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  })

  router.get('/:itemType',async (req,res)=>{
    try {
        let itemType = req.params.itemType
        let response = await item.find({name: itemType})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
  })

  module.exports = router