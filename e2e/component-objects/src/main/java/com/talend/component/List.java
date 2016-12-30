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

    static final String ADD_BTN_SELECTOR = ".btn-success";

    static final String LIST_ITEMS_SELECTOR = ".tc-list-display-table div button";

    static final String ACTION_BTN_ITEM_XPATH = "//*[@class='tc-list']//button[text()='{label}']/../following-sibling::div[@class='tc-actions btn-group']/button[@id='{listType}:{action}']";


    List(WebDriver driver) {
        super(driver, NAME, LIST_SELECTOR);
    }

    public WebElement getAddButton() throws NotFoundException {
        return this.getElement().findElement(By.cssSelector(ADD_BTN_SELECTOR));
    }

    public java.util.List<WebElement> getItems() {
        return this.getElement().findElements(By.cssSelector(LIST_ITEMS_SELECTOR));
    }

    public WebElement getItemFromLabel(String label) {
        Application.LOGGER.debug(NAME + ".getItemFromLabel " + label);
        Iterator<WebElement> elements = this.getElement().findElements(By.cssSelector(LIST_ITEMS_SELECTOR)).iterator();

        while (elements.hasNext()) {
            WebElement el = elements.next();
            Application.LOGGER.debug("while loop : " + el.getText());
            if (el.getText().equals(label)) {
                return el;
            }
        }
        throw new NotFoundException(label);
    }

    public WebElement getItemActionButton(String label, String listType, String action) {
        Application.LOGGER.debug(NAME + ".getItemActionButton " + label + " action " + action);

        String xpath = ACTION_BTN_ITEM_XPATH.replace("{label}", label);
        xpath = xpath.replace("{listType}", listType);
        xpath = xpath.replace("{action}", action);
        return this.getElement().findElement(By.xpath(xpath));
    }
}
