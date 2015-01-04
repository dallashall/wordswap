var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var view = require('./view');
var exchange = require('./exchange');
var Word = require('./switch');

var newText = "";
var htmlBody = "";

var nounCount = 0;
var verbCount = 0;
var adjCount = 0;
var propCount = 0;

var nounList = [];
var verbList = [];
var adjList = [];
var propList = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/newStory', function(req, res) {
  newText = req.body.story;
  nounCount = exchange.wordCount(/ NOUN/g, newText);
  verbCount = exchange.wordCount(/ VERB/g, newText);
  adjCount = exchange.wordCount(/ADJECTIVE/g, newText);
  propCount = exchange.wordCount(/PROPNOUN/g, newText);

  var htmlNoun = view.formGen("noun", nounCount);
  var htmlVerb = view.formGen("verb", verbCount);
  var htmlAdj = view.formGen("adj", adjCount);
  var htmlProp = view.formGen("prop", propCount);

  htmlBody = view.htmlTop +
    htmlNoun +
    htmlVerb +
    htmlAdj +
    htmlProp +
    view.htmlBottom;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlBody);
  res.end();
});

app.post('/words', function(req, res) {
  for (var i = 0; i < nounCount; i++) {
    nounList.push(req.body.noun[i]);
  }
  for (var j = 0; j < verbCount; j++) {
    verbList.push(req.body.verb[j]);
  }
  for (var k = 0; k < adjCount; k++) {
    adjList.push(req.body.adj[k]);
  }
  for (var l = 0; l < propCount; l++) {
    propList.push(req.body.prop[l]);
  }

  var propnoun = new Word("PROPNOUN", propList, newText);
  newText = propnoun.textChange();
  var noun = new Word("NOUN", nounList, newText);
  newText = noun.textChange();
  var verb = new Word("VERB", verbList, newText);
  newText = verb.textChange();
  var adjective = new Word("ADJECTIVE", adjList, newText);
  newText = adjective.textChange();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(view.wordPage(newText));
  res.end();

});

app.get('/start', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(view.startPage(view.start));
  res.end();
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080');
});
