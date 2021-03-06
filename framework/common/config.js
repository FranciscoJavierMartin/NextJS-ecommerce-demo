const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

function withFrameworkConfig(defaultConfig = {}) {
  const framework = process.env.NEXT_PUBLIC_FRAMEWORK_PROVIDER;
  const frameworkNextConfig = require(path.join(
    '../',
    framework,
    'next.config'
  ));

  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  );

  return merge(defaultConfig, frameworkNextConfig);
}

module.exports = { withFrameworkConfig };
