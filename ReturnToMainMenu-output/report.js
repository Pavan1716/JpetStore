$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/ReturnToMainMenu.feature");
formatter.feature({
  "name": "TestCase",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Return to Main Menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Birds",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Birds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Return to Main Menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.click_on_Return_to_Main_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for Presence of Sign In and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_for_Presence_of_Sign_In_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
});