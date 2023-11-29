package com.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Loginstepdefination {
WebDriver driver;
@Given("user is on loginpage")
public void user_is_on_loginpage() {
 System.out.println("Step1:user is on loginpage");
 WebDriverManager.chromedriver().setup();
 driver = new ChromeDriver();
 driver.manage().window().maximize();
 driver.get("https://www.facebook.com/login/");
 
}

@When("user enters Email address or phonenumber and passward")
public void user_enters_email_address_or_phonenumber_and_passward() {
  System.out.println("Step2:user enters Email address or phonenumber and passward");
	
  driver.findElement(By.id("email")).sendKeys("deepikapolumuri@gmail.com");
  driver.findElement(By.id("pass")).sendKeys("Varadhi@2022");
}


@And("click on login button")
public void click_on_login_button() {
System.out.println("Step3:click on login button");
driver.findElement(By.name("login")).click();
}

@Then("user should land on home page")
public void user_should_land_on_home_page() {
 System.out.println("Step4:user should land on home page") ;  
 driver.close();
}



}











