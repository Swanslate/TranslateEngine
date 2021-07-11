const express = require('express');
const translate = require('@vitalets/google-translate-api');
const model = require('../Models/index.js');

const router = express.Router();

router.get('/speech', function(req, res) {
    res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

router.post('/speech',(req,res) => {

    console.log(req.body.speech)
  
    translate(req.body.speech, {to: req.body.language}).then(response => {
      res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
  }).catch(err => {
      console.error(err);
  });
  
  })

router.get('/a', function(req, res) {
    console.log('Hello')
})
module.exports = router;