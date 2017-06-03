const test = require('ava')
const openApp = require('../lib/app-open')

test('open `Notes.app`', async t => {
  t.plan(1)
  await t.throws(
    openApp('Notes.app')
      .then(t.pass)
  )
})

test('app not found', async t => {
  t.plan(1)
  await t.throws(
    openApp('Bad app')
      .catch(t.pass)
  )
})
