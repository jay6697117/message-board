/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1583567632002_6584';

  // add your middleware config here
  config.middleware = ['locals'];

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs'
    }
  }

  config.ejs = {
    layout: 'layout.html',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
