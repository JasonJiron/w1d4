function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === 'Waldo') {
      found(index)
    }
  })
}

function actionWhenFound(element) {
  console.log('Waldo at index of ' + element);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);