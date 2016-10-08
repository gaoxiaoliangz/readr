const base = require('./base')

module.exports = {
  entry: {
    [base.vars.dllNames.reactKit]: [
      ...base.vars.reactKit,
      ...base.vars.reactDevKit,
    ],
    [base.vars.dllNames.utils]: base.vars.utils,
  },
  output: {
    path: base.vars.paths.built,
    filename: '[name].dll.js',
    library: base.vars.vendorLibName
  },
  plugins: [
    base.plugins.dllDefinition
  ],
}
