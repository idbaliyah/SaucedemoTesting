@Login
  Feature: Login
    Login to page saucedemo

    Scenario: Success logged in as normal user
      Given User on the login page
      When User fill username with "standard_user"
      And User fill password with "secret_sauce"
      And User click login button
      Then User directed to inventory page
