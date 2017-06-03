#! /usr/bin/env node

const findApps = require('./lib/apps-find')
const openApp = require('./lib/app-open')
const argv = require('minimist')(process.argv.slice(2))
const inquirer = require('inquirer')

const searchArg = argv._[0] || ''

findApps(searchArg).then(results => {
  if (results.length < 1) {
    console.log('No matches found.')
    return
  }
  const question = {
    type: 'list',
    name: 'selected',
    message: 'Results:',
    choices: results
  }

  inquirer.prompt([question])
    .then(handleSelection)
    .catch(err => console.log(err))
})

const handleSelection = answer => {
  openApp(answer.selected)
}
