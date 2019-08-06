const router = require('express').Router()
const axios = require("axios")


router.get("/invites", (req, res, next) => {
  axios.get('https://randomuser.me/api/').then(resp => {
    res.json(resp.data)
  })
})

module.exports = router