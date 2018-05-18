navigator.getBattery().then(function(result) {
console.log(result)
}).catch(function(error) {
  console.log('An error occured: ' + error)
})

fetch('https://randomuser.me/api/').then(function(response) {
  console.log(response)
}).catch(function(error) {
  console.log('An error occured: ' + error)
})

function readJSON(json) {
  return new Promise(function(resolve, reject) {
    try {
      const data = JSON.parse(json)
      resolve(data)
    }
    catch (error) {
      reject({ error: true, message: error.message })
    }
  })
}

const x = '{ "name":"John", "age":"25" }'
readJSON(x).then(function(result) {
  console.log(result)
})
