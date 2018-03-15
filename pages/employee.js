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



