import interactions from '../../lib/element-interactions';
import navigation from '../navigation';
import generatedValues from '../../lib/generated-values';

const shell = require('shelljs');
const path = require('path');
const rp = require('request-promise');
const expect = require('chai').use(require('chai-as-promised')).expect;
const nameFieldMaxLength = 29;
import paths from '../../lib/paths';
import async from 'async-q';
let targetUrl;



const attrs = {
    //Add Employee popup elements
    title: 		       	   "by.css('h4.modal-title')",
    title1: 		       "by.css('.modal-title')",  
    closeEmployeePopUp:    "by.css('button[data-dismiss=\"modal\"]')",
    closeEmployeePopUp1:   "by.buttonText('×')",
    employeeForm:          "by.id('employees-form')",
    employeeForm1:         "by.css('form[role=\"form\"]')",
    firstNameText:   	   "by.css('label[for=\"firstname\"]')",
    firstNameText1:   	   "by.css('.control-label.col-sm-2')",
    firstName: 	   		   "by.css('input[type=\"text\"]')",
    firstName1:            "by.css('input.form-control')",
    lastNameText:   	   "by.css('label[for=\"lastname\"]')",
    lastNameText1:   	   "by.css('.control-label.col-sm-2')",
    lastName: 	   		   "by.css('input[\"=\"\"]')",
	dependents:     	   "by.css('label[for=\"dependents\"]')",
    submitBtn: 		   	   "by.buttonText('Submit')",
    closeBtn: 	   		   "by.buttonText('Close')",
}

const text = {
 	//Add Employee popup text
 	titleText:   "Add Employee & His dependent",
 	firstNameText:  	"First Name",
}


export default {
    // createRandomPractice: function () {
        
//     //     return navigation.navigateTo('practices')
//     //         .then(() => interactions.clickElementPromise('add'))
//     //         .then(() => browser.sleep(3000))//Sometimes name box does not load fast enough
//     //         .then(() => interactions.fillFieldPromise(attrs.name, generatedValues.randomOfficeName()))
//     //         .then(() => browser.sleep(3000))
//     //         .then(() => interactions.fillFieldPromise(attrs.address1, generatedValues.randomStreetAddress()))
//     //         .then(() => browser.sleep(3000))
//     //         .then(() => interactions.fillFieldPromise(attrs.zipCode, '92101'))
//     //         .then(() => browser.sleep(3000))
//     //         .then(() => interactions.fillFieldPromise(attrs.phone, generatedValues.randomPhoneNumber()))
//     //         .then(() => browser.sleep(3000))
//     //         .then(() => interactions.clickElementPromise(attrs.save));
//     //     //  TODO: add assert
//     //     //     .then(() => {
//     //     //         return expect(interactions
//     //     //             .isItemWithTextInListPromise(attrs.nameItem, generatedValues.storedOfficeName().slice(0, nameFieldMaxLength)))
//     //     //             .to.eventually.equal(true);
//     //     // });  
//     // },
//     // createPracticeViaSql: function () {
//     //     return new Promise((resolve, reject) => {
//     //         var practiceScriptPath =
//     //             path.join(path.resolve(__dirname),'/../../db', 'Practices/Practice_Valid.sql');
      
//     //         if (shell.exec(`SqlCmd -E -S "(local)" -i ${practiceScriptPath}`).code !== 0) {
//     //             shell.exit(1);
//     //             reject('Error: Fail to insert practice');
//     //         } else {
//     //             resolve('Inserted practice successful');
//     //         }
//     //     });    
//     // },
//   //   createCustomPractice: function (table) {
//   //       return browser.wait(() => {
//   //         targetUrl = process.env.UI_ENV + paths['practiceAdd'];
//   //         browser.get(targetUrl);
//   //         return Promise.resolve(browser.getCurrentUrl());
//   //       }).then(() => {
//   //         return expect(browser.getCurrentUrl()).to.eventually.contain(targetUrl);
//   //       }).then(() => {
//   //         return browser.executeScript(`return (document.querySelectorAll("[data-qa='zipcode']"))`);
//   //       }).then(() => {
//   //       const clickable = element(by.css(`[data-qa="bill-as-group"]`));
//   //       return browser.wait(() => {
//   //         return Promise.resolve(clickable.isPresent());
//   //       }).then(() => {
//   //         return clickable.click();
//   //       });
//   //       }).then(() => {
//   //         const hash = table.rowsHash();
//   //         return async.eachSeries(Object.keys(hash), (key) => {
//   //           if (hash[key].match(/(?:\*)/)) {
//   //             hash[key] = generatedValues[hash[key].match(/\*([^\*]*)\*/)[1]]();
//   //           }
//   //           const fillable = element(by.css(`[data-qa="${key}"]`));
//   //           return fillable.sendKeys(hash[key]);
//   //         });
//   //       }).then(() => {
//   //          return browser.executeScript(`return (document.querySelectorAll("[data-qa='state']"))`);
//   //       }).then(() => {
//   //           const clickable = element(by.css(`[data-qa="save"]`));
//   //           return browser.wait(() => {
//   //             return Promise.resolve(clickable.isPresent());
//   //           }).then(() => {
//   //             return clickable.click();
//   //           });
//   //       }).then(() => {
//   //         targetUrl = process.env.UI_ENV + paths['practiceList'];
//   //         return expect(browser.getCurrentUrl()).to.eventually.contain(targetUrl);
//   //       }).then(() => {
//   //         const text = element(by.css(`[data-qa="item-name-1"]`));
//   //         return expect(text.getText()).to.eventually.contain(generatedValues.storedName());
//   //       }); 
//   // }
}



