package com.idbaliyah.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public static WebDriver driver;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    public static void fillUsername(String username) {
        String fieldUsername = "//input[@id='user-name']";
        driver.findElement(By.xpath(fieldUsername)).sendKeys(username);
    }
    public static void fillPassword(String password) {
        String fieldPassword = "//input[@id='password']";
        driver.findElement(By.xpath(fieldPassword)).sendKeys(password);
    }
    public static void clickLoginButton() {
        String loginButton = "//input[@id='login-button']";
        driver.findElement(By.xpath(loginButton)).click();
    }

}
