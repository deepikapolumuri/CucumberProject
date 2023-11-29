 Feature: Test the login functionality of facebook
 Scenario: Test the valid login
 
 Given user is on loginpage
 When  user enters Email address or phonenumber and passward
 And click on login button
 Then user should land on home page 

 Scenario: Test the valid login1
 
 Given user is on loginpage
 When  user enters Email address or phonenumber and passward
 And click on login button
 Then user should land on home page 
 