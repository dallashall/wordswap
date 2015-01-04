
function formGen (type, number) {
  var form = "";
  if (isNaN(number)) {
    return "";
  } else{
    for (var i = 0; i < number; i++) {
      var label = type + '[' + i + ']';
      form += '<p><label for="' + label+ '" >' + type + ': </label>' +
                  '<input type="text" name="' + label +'"></input></p>\n';
    }
    return form;
  }
}

function wordPage(finishedStory) {
  var html = '<!DOCTYPE html>' +
    '<head>' +
    '<meta charset = "utf-8" content="game" />' +
    '<title>Word Swapper</title>' +
    '</head>' +
    '<body>' +
    '<p>' + finishedStory +
    '</p>' +
    '<p><a href="/start">Again?</a></p>' +
    '</body>';
    return html;
}

function startPage(startBody) {
  var html = '<!DOCTYPE html>' +
    '<head>' +
    '<meta charset = "utf-8" content="game" />' +
    '<title>Word Swapper</title>' +
    '</head>' +
    '<body>' +
    '<p>' + startBody +
    '</p>' +
    '</body>';
    return html;
}

var start = 'Type your story. When you want a noun, type "NOUN" without quotations.</p>' +
    '<p>Verb: "VERB".</p>' +
    '<p>Adjective: "ADJECTIVE"</p>' +
    '<p>Proper noun: "PROPNOUN"</p>' +
    '<form action="http://127.0.0.1:8080/newStory" method="post">' +
      '<fieldset>' +
          '<label for="text" >Your story:</label>' +
          '<textarea id="story" name="story" ></textarea>' +
          '<input type="submit" value="Submit story" />' +
        '</fieldset>' +
      '</form>';

var htmlTop = '<!DOCTYPE html>' +
    '<head>' +
    '<meta charset = "utf-8" content="game" />' +
    '<title>Enter Your New Words</title>' +
    '</head>' +
    '<body>' +
        '<p>Type your words!</p>' +
        '<form action = "http://127.0.0.1:8080/words" method="post">' +
          '<fieldset>\n';

var htmlBottom = '<input type="submit" value="Submit Words"></input>' +
          '</fieldset>' +
        '</form>' +
    '</body>';

exports.formGen = formGen;
exports.htmlTop = htmlTop;
exports.htmlBottom = htmlBottom;
exports.wordPage = wordPage;
exports.startPage = startPage;
exports.start = start;
