$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "Login to page saucedemo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 24476166600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Success logged in as normal user",
  "description": "",
  "id": "login;success-logged-in-as-normal-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User fill username with \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User fill password with \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User directed to inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.verifyLoginPage()"
});
formatter.result({
  "duration": 1682301300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 25
    }
  ],
  "location": "LoginStep.inputUsername(String)"
});
formatter.result({
  "duration": 901417300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 25
    }
  ],
  "location": "LoginStep.inputPassword(String)"
});
formatter.result({
  "duration": 186051300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "duration": 1353655600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 6268068300,
  "status": "passed"
});
formatter.uri("features/Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Purchase",
  "description": "",
  "id": "purchase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Purchase"
    }
  ]
});
formatter.before({
  "duration": 6954832300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User will short item by Name (Z to A) and checkout",
  "description": "",
  "id": "purchase;user-will-short-item-by-name-(z-to-a)-and-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User fill username with \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fill password with \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User add product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User see add 1 product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User remove product",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User checkout the item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User fill \"ahmad\" as firstname, \"fathoni\" as lastname and \"65145\" as postal code",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click continue",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User will see expected Item total \"Item total: $7.99\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "expected Tax \"Tax: $0.64\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "expected Total \"Total: $8.63\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click finish button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User see \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 25
    }
  ],
  "location": "LoginStep.inputUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 25
    }
  ],
  "location": "LoginStep.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "PurchaseStep.selectProductCart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.userAddProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.shoppingChart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.userRemoveProduct1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ahmad",
      "offset": 11
    },
    {
      "val": "fathoni",
      "offset": 33
    },
    {
      "val": "65145",
      "offset": 59
    }
  ],
  "location": "PurchaseStep.inputCredential(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.continueCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Item total: $7.99",
      "offset": 35
    }
  ],
  "location": "PurchaseStep.expectedItemTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax: $0.64",
      "offset": 14
    }
  ],
  "location": "PurchaseStep.ExpectedTAX(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total: $8.63",
      "offset": 16
    }
  ],
  "location": "PurchaseStep.ExpectedTotal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseStep.userFinishBuy()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 10
    }
  ],
  "location": "PurchaseStep.checkoutFinish(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5877546400,
  "status": "passed"
});
});