
function wordCount (wordKind, txt) {
  if (txt.match(wordKind) === null) {
    return 0;
  } else{
    return txt.match(wordKind).length;
  }
}

exports.wordCount = wordCount;
