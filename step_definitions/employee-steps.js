import _ from 'lodash';
import async from 'async-q';
import generatedValues from '../lib/generated-values';
import paths from '../lib/paths';

const expect = require('chai').use(require('chai-as-promised')).expect;
const timeout = 1000;

const baseSteps = function () {  

  this.Given(/^an Employer$/, () => {
    var targetUrl = "";
    browser.ignoreSynchronization = true;
    return browser.wait(() => {
        targetUrl = paths['login'];
        browser.get(targetUrl);
        return Promise.resolve(browser.getCurrentUrl());
      }).then(() => {
        return expect(browser.getCurrentUrl()).to.eventually.equal(process.env.UI_ENV + targetUrl);
      }).then(() => {
        const clickable = element(by.id('btnLogin'));
        return browser.wait(() => {
        expect(clickable.getText()).to.eventually.equal('Login');
        return Promise.resolve(clickable.isPresent());
      }).then(() => {
        const fillable = element(by.css('input[type="password"]'));
        fillable.sendKeys(process.env.PASSWORD);
      }).then(() => {
        const fillable = element(by.css('input[name="form-username"]'));
        return fillable.sendKeys(process.env.USER_NAME);
      }).then(() => {
        const text = element(by.css('#footer'));
        expect(text.isPresent()).to.become(true);
        return clickable.click();
      });
    });
  });

  this.Given(/^I am on the Benefits Dashboard page$/, () => {
    var targetUrl = "/home.html?username=testUser";
    browser.ignoreSynchronization = true;
    return browser.wait(() => {
      browser.get(targetUrl);
      return Promise.resolve(browser.getCurrentUrl());
    }).then(() => {
      return expect(browser.getCurrentUrl()).to.eventually.equal(process.env.UI_ENV + targetUrl);
    });
  });

  this.Given(/^I select Add Employee$/, () => {
    const clickable = element(by.id('btnAddEmployee'));
    return browser.wait(() => {
      return Promise.resolve(clickable.isPresent());
    }, timeout).then(() => {
      return clickable.click();
    }).then(() => {
      browser.sleep(2 * 1000);
      const text = element(by.css('.modal-title'));
      expect(text.getText()).to.eventually.equal('Add Employee & His dependents');
      return expect(text.isPresent()).to.become(true);
    });
  });

  this.Given(/^I should be able to enter employee details$/, () => {
    return browser.wait(() => {
        const text = element(by.css('h4.modal-title'));
        expect(text.getText()).to.eventually.equal('Add Employee & His dependents');
        return expect(text.isPresent()).to.become(true);
      }).then(() => {
        const firstName = element(by.xpath('//*[@id="employees-form"]/div[1]/div/input'));
        firstName.sendKeys(generatedValues.randomFirstName());
      }).then(() => {
        const lastName = element(by.xpath('//*[@id="employees-form"]/div[2]/div/input'));
        return lastName.sendKeys(generatedValues.randomLastName());
      }).then(() => {
        const dependents = element(by.xpath('//*[@id="employees-form"]/div[3]/div/input'));
        return dependents.sendKeys(generatedValues.numberOfDependants101());
      }).then(() => {
        const clickable = element(by.buttonText('Submit'));
        return browser.wait(() => {
        expect(clickable.getText()).to.eventually.equal('Submit');
        return Promise.resolve(clickable.isPresent());
      });
    });
  });

  this.Then(/^the employee should save$/, () => {
    const clickable = element(by.buttonText('Submit'));
    return browser.wait(() => {
      return Promise.resolve(clickable.isPresent());
    }, timeout).then(() => {
      return clickable.click();
    });
  }); 

  this.Then(/^I should see the employee in the table$/, () => {
    const text = element(by.xpath('//*[@id="employee-table"]/tbody/tr[2]/td[2]'));
    return expect(text.getText()).to.eventually.equal(generatedValues.storedLastName());
  }); 

  this.Then(/^I select the Action Edit$/, () => {
    const clickable = element(by.id('btnEdit'));
    return browser.wait(() => {
      return Promise.resolve(clickable.isPresent());
    }, timeout).then(() => {
      return clickable.click();
    });
  }); 

  this.Given(/^I can edit employee details$/, () => {
    const dependents = element(by.xpath('//*[@id="employees-form"]/div[3]/div/input'));
    dependents.clear();
    dependents.sendKeys(generatedValues.numberOfDependants101());
    const clickable = element(by.buttonText('Submit'));
    return clickable.click();
  });

  this.Then(/^the data should change in the table$/, () => {
    const text = element(by.xpath('//*[@id="employee-table"]/tbody/tr/td[5]'));
    return expect(text.getText()).to.eventually.equal(generatedValues.numberOfDependants101());
  });

  this.Then(/^I click the Action X$/, () => {
    const clickable = element(by.id('btnDelete'));
    return browser.wait(() => {
      return Promise.resolve(clickable.isPresent());
    }, timeout).then(() => {
      return clickable.click();
    });
  }); 

  this.Then(/^the employee should be deleted$/, () => {
    const text = element(by.xpath('//*[@id="employee-table"]/tbody/tr/td[2]'));
    return expect(text.getText()).to.not.eventually.equal('Zack');
  });

  this.Then(/^I should be redirected to dashboard page$/, () => {
    browser.ignoreSynchronization = true;
    var targetUrl = 'home.html?username';
    return browser.wait(() => {
      return browser.getCurrentUrl().then((url) => {
      return Promise.resolve(url === targetUrl);
      });
    }, timeout).then(() => {
      return expect(browser.getLocationAbsUrl()).to.equal(targetUrl);
    });
  });

  this.When(/^I (?:should )?wait (?:for )?(\d+) second[s]?$/, (sec) => {
    const intSec = parseInt(sec, 10);
    return browser.sleep(intSec * 1000);
  });
};

module.exports = baseSteps;