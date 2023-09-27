const { dependencies, devDependencies } = require('../package.json')
const fs = require('fs')
const path = require('path')

const versions = {}
const versionsDev = {}

console.log('------- DEPENDENCIES -------')
const installDeps =
  'yarn add ' +
  Object.keys(dependencies)
    .map(dep => {
      console.log(dep + ` : (${dependencies[dep]})`)
      versions[dep] = dependencies[dep]
      return dep
    })
    .join('@latest ') +
  '@latest'

console.log('\n------- DEV DEPENDENCIES -------')

const installDevDeps =
  'yarn add -D ' +
  Object.keys(devDependencies)
    .map(dep => {
      console.log(dep + ` : (${devDependencies[dep]})`)
      versionsDev[dep] = devDependencies[dep]
      return dep
    })
    .join('@latest ') +
  '@latest'

fs.writeFile(
  path.join(__dirname, './installdeps.sh'),
  `${installDeps} && ${installDevDeps}`,
  () => {}
)
