const express = require('express');
const router = express.Router();
// could use one line instead: var router = require('express').Router();
const tweetBank = require('../tweetBank');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use(express.static('public'));

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} ).reverse();
  res.render( 'index', { name: name, tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find({id: id}).reverse();
  res.render('index', {name: list[0].name, tweets: list});
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list().reverse();
  res.render( 'index', { name: 'Steve', tweets: tweets, showForm: true } );
});

module.exports = router;
