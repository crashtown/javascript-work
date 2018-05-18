function addOne(number, callback) {
  console.log('Started function addOne!')
  result = number + 1
  setTimeout(function() {
    console.log('invoking callback....')
    callback(result)
  }, 2000)
}

function showResult(value) {
  console.log(`addOne completed with result: ${value}!`)
}

addOne(5, showResult)
