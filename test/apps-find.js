const test = require('ava')
const findApps = require('../lib/apps-find')

test('list based on `x`', t => {
  t.plan(1)
  const expected = ['Xcode.app']
  return findApps('x').then(actual => {
    t.deepEqual(actual, expected)
  })
})

test('list based on `google`', t => {
  t.plan(1)
  const expected = [
    'Google Chrome Canary.app',
    'Google Chrome.app',
    'Google Drive.app'
  ]
  return findApps('google').then(actual => {
    t.deepEqual(actual, expected)
  })
})
