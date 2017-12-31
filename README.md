# Anansi's React Babel Preset

## Usage

Just include in .babelrc

```json
{
  "presets": ["@anansi/babel-preset"]
}
```

Or configure options

```json
{
  "presets": [
    [
      "@anansi/babel-preset",
      {
        "targets": {
          "node": "current"
        },
        "modules": "commonjs"
      }
    ]
  ]
}
```

## Options

### runInNode : bool = false

This is simple way to use the configuration for node scripts. Other options
below will not work if this is set. Targets the current node version in
babel-preset-env while disabling the extra imports.

### productionTargets : object = (`modern browsers`)[https://github.com/ai/browserslist]

Can be used to override babel-preset-env targets for building production.

### developmentTargets : object = (`latest firefox & chrome`)[https://github.com/ai/browserslist]

Can be used to override babel-preset-env targets for building development.

### targets : object = (`modern browsers`)[https://github.com/ai/browserslist]

Can be used to override babel-preset-env targets for non-testing environment.

### modules: string|false = false

Can be used to override our default of false in non-testing environments
in case you want babel to transform imports.

Warning: something other than 'false' will disable HMR and 'tree shaking'
in webpack

### minify: bool = false

Setting this to true will run the minifier [babel-minify](https://github.com/babel/babel-minify)