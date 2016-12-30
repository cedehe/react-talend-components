package com.talend.component;

import org.openqa.selenium.By;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Iterator;

/**
 * A List is used to easy access to WebElements of the react-talend-component's List component.
 *
 */
public class List extends Component {

    static final String NAME = "List";

    static final String LIST_SELECTOR = ".tc-list";

    List(WebDriver driver) {
        super(driver, NAME, LIST_SELECTOR);
    }

    public WebElement getAddButton() throws NotFoundException {
        return this.getElement().findElement(By.cssSelector(".btn-success"));
    }

    public java.util.List<WebElement> getItems() {
        return this.getElement().findElements(By.cssSelector(".tc-list-display-table div button"));
    }

    public WebElement getItemFromLabel(String label) {
        System.out.println(NAME + ".getItemFromLabel " + label);
        Iterator<WebElement> elements = this.getElement().findElements(By.cssSelector(".tc-list-display-table div button")).iterator();

        while (elements.hasNext()) {
            WebElement el = elements.next();
            System.out.println("while loop : " + el.getText());
            if (el.getText().equals(label)) {
                return el;
            }
        }
        throw new NotFoundException(label);
    }

    public WebElement getItemActionButton(String label, String listType, String action) {
        System.out.println(NAME + ".getItemActionButton " + label + " action " + action);
        String xpath = "//*[@class='tc-list']//button[text()='" + label + "']/../following-sibling::div[@class='tc-actions btn-group']/button[@id='" + listType + ":" + action + "']";
        return this.getElement().findElement(By.xpath(xpath));
    }
}
