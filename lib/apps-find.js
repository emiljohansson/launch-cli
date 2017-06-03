const exec = require('child_process').exec

module.exports = value => new Promise((resolve, reject) => {
  exec('ls /Applications/', (err, stdout, stderr) => {
    if (err) {
      reject(err)
      return
    }
    resolve(stdout.split('\n')
      .filter(app => app.toLowerCase().startsWith(value.toLowerCase()))
    )
  })
})
