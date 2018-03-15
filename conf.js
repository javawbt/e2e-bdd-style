exports.config = 
  {
    seleniumAddress:   'http://localhost:4444/wd/hub',
    multiCapabilities: [{
      browserName:     'chrome',
      versionkey:      'ANY',
      logName:         'Chrome - English',
      count:           1,
      shardTestFiles:  (process.env.PARALLEL === 'true'),
      maxInstances:    3,
      'chromeOptions': {
        args: ['--no-sandbox', '--test-type=browser'],
      }
    }],
    onPrepare() {
      // Override the timeout for webdriver
      browser.driver.manage().timeouts().setScriptTimeout(60000);
    },
    baseUrl:                  process.env.UI_ENV,
    specs:                    process.env.PROTRACTOR_TEST_SPEC_DEFAULT,
    allScriptsTimeout:        30000,
    ignoreUncaughtExceptions: false,
    framework:                'custom',
    cucumberOpts:             {
      require: [
        './step_definitions/hooks/*-hooks.js',
        './step_definitions/*-steps.js'
      ],
      format: 'json:./reports/cucumber.json',
      tags: [process.env.INCLUSIVE_TAGS, process.env.EXCLUSIVE_TAGS]
    },
    frameworkPath: require.resolve('protractor-cucumber-framework')
  };

