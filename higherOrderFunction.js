var words = ["ground", "control", "to", "major", "tom"]

map(words, function(word) {
  return word.length;
});
map(words, function(word) {
  return word.toUpperCase();
});
map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, callback) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  console.log(newArr)
}
