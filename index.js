
const package = require('./package.json');

function app()
{
  console.log(`${package.name} version ${package.version}`);
}

module.exports = app;