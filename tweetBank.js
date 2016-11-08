const _ = require('lodash');

let data = [];

function add (name, content, profilePic, id) {
  data.push({name: name, content: content, image: profilePic, id: id});
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

var getFakeImg = function() {
	var fakeImgs = ['/imgs/1.jpeg', '/imgs/2.jpeg', '/imgs/3.jpeg', '/imgs/4.jpeg', '/imgs/5.jpeg'];
	return randArrayEl(fakeImgs);
}

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet(), getFakeImg(), i.toString());
}
