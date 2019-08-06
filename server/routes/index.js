const router = require('express').Router()
const axios = require("axios")

let going = []
let notGoing = []

router.get("/invites", (req, res, next) => {
  axios.get('https://randomuser.me/api/').then(resp => {
    res.json(resp.data)
  })
})
router.get('/numbers', (req, res, next) => {
  res.json({going: going.length, notGoing: notGoing.length})
})
router.post('/mark-invitee', (req,res,next) => {
  if (req.body.going === true) {
    going.push(req.body.results[0])
    res.json(going)
  } else {
    notGoing.push(req.body.results[0])
    res.json(notGoing)
  }
})
router.get('/going', (req, res, next) => {
  res.json(going)
})
router.get('/notgoing', (req, res, next) => {
  res.json(notGoing)
})

module.exports = router