package com.idbaliyah.pageObject;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class InventoryPage {
    public WebDriver driver;
    public InventoryPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    @FindBy(xpath = "//select[@class='product_sort_container']" )
    private WebElement sortProductButton;
    @FindBy(id = "add-to-cart-test.allthethings()-t-shirt-(red)")
    private WebElement product1Button;
    @FindBy(id = "add-to-cart-sauce-labs-onesie")
    private WebElement product2Button;
    @FindBy(xpath = "//div[@id='shopping_cart_container']/a[1]")
    private WebElement shoppingChartButton;
    @FindBy(id = "remove-test.allthethings()-t-shirt-(red)")
    private WebElement deleteProduct1;
    @FindBy(id = "checkout")
    private WebElement checkoutButton;
    @FindBy(id = "first-name")
    private WebElement fillFirstname;
    @FindBy(xpath = "//input[@id='last-name']")
    private WebElement fillLastname;
    @FindBy(name = "postalCode")
    private WebElement fillPostalcode;
    @FindBy(id = "continue")
    private WebElement continueShopButton;
    @FindBy(xpath = "//div[@class='summary_subtotal_label']")
    private static WebElement itemtotal;
    @FindBy(xpath = "//div[@class='summary_tax_label']")
    private WebElement tax;
    @FindBy(xpath = "//div[@class='summary_total_label']")
    private static WebElement total;
    @FindBy(xpath = "//button[@id='finish']")
    private WebElement finishButton;
    @FindBy(xpath = "//h2[@class='complete-header']")
    private WebElement succes;

    public void sortProduct (String sortProduct){
        sortProductButton.click();
        Select a = new Select(sortProductButton);
        a.selectByVisibleText(sortProduct);
    }
    public void addProduct1() { product1Button.click(); }
    public void addProduct2() { product2Button.click(); }
    public void shopChart() { shoppingChartButton.click(); }
    public void removeProduct1() { deleteProduct1.click(); }
    public void checkout() { checkoutButton.click(); }
    public void firstnameField(String firstname){
        fillFirstname.sendKeys(firstname);
    }
    public void lastnameField(String lastname) {fillLastname.sendKeys(lastname);
    }
    public void postalcodeField(String postalCode){
        fillPostalcode.sendKeys(postalCode);
    }
    public void continueShop() { continueShopButton.click(); }
    public static String productTotal() { return itemtotal.getText(); }
    public String Tax (){
        return tax.getText();
    }
    public static String Total(){ return total.getText();
    }
    public void Finish() { finishButton.click(); }
    public String Succes (){
        return succes.getText();
    }

}