'use strict';

const reporter = require('cucumber-html-reporter');
const LocalStorage = require('node-localstorage').LocalStorage;
const fs = require('fs');
const path = require('path');

const dir = './dataContainer';
const reports = './report';
 
const expect = require('chai').use(require('chai-as-promised')).expect;

const systemHooks = function () {    
  const regex = /\[(.*?)\]/;

  // create data container folder for npm localstorage if it does not exist in the project
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.mkdirSync(reports);
  }

  this.BeforeScenario((scenario, callback) => {
    const scenarioName = scenario.getName();
    global.localStorage = new LocalStorage(`${dir}/${regex.exec(scenarioName)[1]}`);
    callback();

  });

  this.AfterFeatures((features, callback) => {
    const date = new Date();
    const newMonth = date.getMonth() + 1;
    const newDay = date.getDate();
    const newYear = date.getFullYear();
    const newHrs = date.getHours().toString();
    const newMin = date.getMinutes().toString();

    const outDir = `reports/cucumber_report-${newMonth}-${newDay}-${newYear}-${newHrs}h-${newMin}m.html`;
    const options = {
      theme: 'bootstrap',
      jsonFile: 'reports/cucumber.json',
      output: outDir,
      reportSuiteAsScenarios: true,
      launchReport: true
    };
    if ((process.env.GENERATE_REPORT === 'true')) {
      reporter.generate(options);
    }
    callback();
  });

  this.After((scenario, callback) => {
      global.localStorage._deleteLocation();
      callback();
    });
};

module.exports = systemHooks;
