const pos = require('pos');

function getPartOfSpeech(word) {
  const tagger = new pos.Tagger();
  const taggedWord = tagger.tag([word]);
  const partOfSpeech = taggedWord[0][1];
  return partOfSpeech;
}

// Usage example
const word = 'Ran';
const partOfSpeech = getPartOfSpeech(word);
console.log(`The word "${word}" is a ${partOfSpeech}`);
