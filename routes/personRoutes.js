const express = require('express')
const router = express.Router()

const person = require('../models/person')

router.post('/', async (req, res) => {

  try {
    const data = req.body

    const newPerson = new person(data)

    let response = await newPerson.save()
    console.log('Data saved.')
    res.status(200).json(response)

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "internal server Error" })
  }

})

router.get('/', async (req, res) => {
  try {
    let data = await person.find()
    res.status(200).json(data)
    console.log('data Fetched.')
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'getting error' })
  }
})

router.get('/:workType', async (req, res) => {
  try {
    const work = req.params.workType
    if (work == 'chef' || work == 'manager' || work == 'waiter') {
      let response = await person.find({ work: work })
      res.status(200).json(response)
    }
  } catch (error) {
    res.status(500).json(Error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id
    const updatedPersonData = req.body

    let response = await person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,
      runValidators: true
    })
    if (!response) {
      res.status(404).json('Person Not Found')
    }
    res.status(200).json(response)
    console.log('Data Updated')
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id

    let response = await person.findByIdAndDelete(personId)

    if (!response) {
      res.status(404).json('Person Not Found')
    }

    res.status(200).json({ message: "person deleted successfully" })

  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router