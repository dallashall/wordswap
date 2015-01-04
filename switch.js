function Word (wordKind, wordList, text) {
  this.type = wordKind;
  this.keyWord = new RegExp(wordKind);
  this.keyW = new RegExp(wordKind, 'g');
  //this.keyWordCount = text.match(this.keyW).length;
  this.textChange = function() {
    var i = 0;
    while (this.keyWord.test(text)) {
      var numWord = "numWord" + i;
      text = text.replace(wordKind, numWord);
      this.exchange(numWord, wordList[i]);
      i+=1;
    }
    return text;
  };
  this.exchange = function(wordNum, userWord) {
    text = text.replace(wordNum, userWord);
  };
}

module.exports = Word;
