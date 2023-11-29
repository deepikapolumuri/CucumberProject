$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginFeature2.feature");
formatter.feature({
  "name": "Test the login functionality of facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email address or phonenumber and passward",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.user_enters_email_address_or_phonenumber_and_passward()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the valid login1",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email address or phonenumber and passward",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.user_enters_email_address_or_phonenumber_and_passward()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefination.Loginstepdefination.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
});