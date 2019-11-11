// const rewireSass = require('react-app-rewire-sass-modules');

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
        strictMath: true,
        noIeCompat: false,
        localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    }),
    // (config, env) => {
    //     config = rewireSass(config, env);
    //     return config;
    // },
);