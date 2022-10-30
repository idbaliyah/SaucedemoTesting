@Purchase
  Feature: Purchase

    Scenario: User will short item by Name (Z to A) and checkout
      Given User open the web page
      When User fill username with "standard_user"
      And User fill password with "secret_sauce"
      And User click login button
      Then User sort product list by "Name (Z to A)"
      And User add product
      Then User see add 1 product
      Then User remove product
      And User checkout the item
      Then User fill "ahmad" as firstname, "fathoni" as lastname and "65145" as postal code
      And User click continue
      Then User will see expected Item total "Item total: $7.99"
      And expected Tax "Tax: $0.64"
      And expected Total "Total: $8.63"
      Then User click finish button
      Then User see "THANK YOU FOR YOUR ORDER"