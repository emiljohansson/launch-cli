const exec = require('child_process').exec

module.exports = (value, callback = () => {}) => new Promise((resolve, reject) => {
  value = value.split(' ').join('\\ ')
  exec(`open /Applications/${value}`, (err, stdout, stderr) => {
    if (err) {
      reject(err)
      return
    }
    resolve(callback)
  })
})
