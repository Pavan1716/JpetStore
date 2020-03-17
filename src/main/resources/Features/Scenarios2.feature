Feature: TestCase
    Scenario: Remove
	Given User Launch browser with JpetStorePage
	When User Update Cart
	Then User close browser
	
	Scenario: Return to Main Menu 
	Given User Launch browser with JpetStorePage 
	When User click on Birds 
	And click on Return to Main Menu 
	Then Assert for Presence of Sign In and close browser
	
	
	Scenario: Remove
	Given User Launch browser with JpetStorePage
	When User Update Cart
	Then User close browser