package StepDefinition;

import com.idbaliyah.pageObject.InventoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseStep {
    private WebDriver webDriver;

    InventoryPage inventoryPage;

    public PurchaseStep() {
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Then("User sort product list by \"(.*)\"")
    public void selectProductCart(String sortProduct) throws InterruptedException {
        Thread.sleep(3000);
        inventoryPage.sortProduct(sortProduct);
    }
    @And("User add product")
    public void userAddProduct(){
        inventoryPage.addProduct1();
        inventoryPage.addProduct2();
    }
    @Then("User see add 1 product")
    public void shoppingChart(){
        inventoryPage.shopChart();
    }
    @Then("User remove product")
    public void userRemoveProduct1(){
        inventoryPage.removeProduct1();
    }
    @And("User checkout the item")
    public void checkout(){
        inventoryPage.checkout();
    }
    @Then("User fill \"(.*)\" as firstname, \"(.*)\" as lastname and \"(.*)\" as postal code")
    public void inputCredential(String firstName, String lastName, String postalCode){
        inventoryPage.firstnameField(firstName);
        inventoryPage.lastnameField(lastName);
        inventoryPage.postalcodeField(postalCode);
    }
    @And("User click continue")
    public void continueCheckout(){
        inventoryPage.continueShop();
    }
    @Then("User will see expected Item total \"(.*)\"")
    public void expectedItemTotal(String expectedItemTotal){
        inventoryPage.productTotal();
        Assert.assertEquals(expectedItemTotal, InventoryPage.productTotal());
    }

    @And("expected Tax \"(.*)\"")
    public void ExpectedTAX(String expectedTax){
        inventoryPage.Tax();
        Assert.assertEquals(expectedTax, inventoryPage.Tax());
    }
    @And("expected Total \"(.*)\"")
    public void ExpectedTotal(String expectedTotal){
        inventoryPage.Total();
        Assert.assertEquals(expectedTotal, InventoryPage.Total());
    }
    @Then("User click finish button")
    public void userFinishBuy(){
        inventoryPage.Finish();
    }
    @Then("User see \"(.*)\"")
    public void checkoutFinish(String succes){
        inventoryPage.Succes();
        Assert.assertEquals(succes, inventoryPage.Succes());
    }
}