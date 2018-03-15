@Regression @Employee @Maxim_Sitnikov @CRUD 

Feature: Employee  Functionality
	As an Employer
	I should be able to login
	I want to input my employee data so that I can get a preview of benefit costs

    Scenario: [Add] Add Employee
		Given an Employer
        And I am on the Benefits Dashboard page
		When I select Add Employee
		Then I should be able to enter employee details
        And the employee should save
	 	And I should see the employee in the table

 	Scenario: [Edit]Edit Employee
		Given an Employer
		And I am on the Benefits Dashboard page
		When I select the Action Edit
        And I should wait for 4 seconds
		Then I can edit employee details
	    And the data should change in the table
	        And I should wait for 4 seconds

	
 	Scenario: [Delete] Delete Employee
		Given an Employer
		And I am on the Benefits Dashboard page
		When I click the Action X
	    Then the employee should be deleted
