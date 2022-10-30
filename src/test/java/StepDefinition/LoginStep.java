package StepDefinition;

import com.idbaliyah.pageObject.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

public class LoginStep {
    private WebDriver webDriver;
    LoginPage loginPage;
    public LoginStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Given("User on the login page")
    public void verifyLoginPage() {
        loginPage = new LoginPage(webDriver);
    }
    @When("User fill username with \"(.*)\"")
    public void inputUsername(String username) {
        loginPage.fillUsername(username);
    }
    @And("User fill password with \"(.*)\"")
    public void inputPassword(String password) {
        loginPage.fillPassword(password);
    }
    @And("User click login button")
    public void clickLoginButton() {
        loginPage.clickLoginButton();
    }
}
