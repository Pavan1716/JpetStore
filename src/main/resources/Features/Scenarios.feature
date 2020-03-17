Feature: TestCases 
	Test Scenario
	
Background: Below are the common steps for each scenario 
	Given User Launch browser with JpetStorePage 
	
	Scenario: Navigate back
	When User fill login details from Excel "src/test/resources/resources/Book1.xlsx" with SheetName "Sheet1"
	And navigate back
	Then close the browser
	
	
	Scenario: Navigate front
	When User fill login details from Excel "src/test/resources/resources/Book1.xlsx" with SheetName "Sheet1"
	And navigate front
	Then close the browser
	
	Scenario: placing dog and fish combine
	When User fill login details from Excel "src/test/resources/resources/Book1.xlsx" with SheetName "Sheet1"
	And selecting two products and checkout
	Then close the browser
	
    Scenario: Check Signout
    When User fill login details from Excel "src/test/resources/resources/Book1.xlsx" with SheetName "Sheet1"
    And check signout happens or not
    Then close the browser 