var sourceStr = 'AABBCDE';
var strToMatch = 'XYZABABMNOCDE';
var obj = {};
var lookupTable = [];

(function main() {
  var isAnagram = true;

  _buildFrequencyMap();
  _compareString();
  Object.keys(obj).some(function (row) {
    if (obj[row] !== 0) {
      isAnagram = false;
      return true;
    }
  });
  if (isAnagram) {
    console.log('Given string is anagram to each other.');
  } else {
    console.log('Given string is NOT anagram to each other.');
  }
})();

function _buildFrequencyMap() {
  var count = 0;
  sourceStr.split('').forEach(function (row) {
    if (lookupTable.indexOf(row) === -1) {
      count = 0;
      lookupTable[lookupTable.length] = row;
      obj[row] = ++count;
    } else {
      obj[row] = ++count;
    }
  });
}

function _compareString() {
  strToMatch.split('').forEach(function (row) {
    if (lookupTable.indexOf(row) > -1) {
      obj[row]--;
    }
  });
}