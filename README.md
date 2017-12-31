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

```json
{
  "presets": [
    [
      "@anansi/babel-preset",
      {
        "additionalProductionTargets": {
          "explorer": "10"
        }
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

### productionTargets : object = [`modern browsers`](http://browserl.ist/?q=last+2+versions%2C+not+%3C+0.05%25%2C+not+ie+%3C+11%2C+not+op_mini+all)

Can be used to override babel-preset-env targets for building production. See
[babel-preset-env configuration options](https://github.com/babel/babel/tree/master/packages/babel-preset-env#options)

### additionalProductionTargets: object = undefined

Is merged with the default productionTargets. Use this to extend base production support.

### developmentTargets : object = [`latest firefox & chrome`](http://browserl.ist/?q=last+1+Chrome+versions%2C+last+1+Firefox+versions)

Can be used to override babel-preset-env targets for building development.

### targets : object = undefined

Can be used to override babel-preset-env targets for non-testing environment.

### modules: string|false = false

Can be used to override our default of false in non-testing environments
in case you want babel to transform imports.

Warning: something other than 'false' will disable HMR and 'tree shaking'
in webpack

### minify: bool = false

Setting this to true will run the minifier [babel-minify](https://github.com/babel/babel-minify)