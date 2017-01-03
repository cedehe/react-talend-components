package com.talend.component;

import org.openqa.selenium.By;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Parent class for API react-talend-component components.
 *
 */
public class Component {

    WebDriver driver;

    String selector;

    String name;

    /**
     * Component constructor
     *
     * @param driver Selenium WebDriver
     * @param name Component name
     * @param selector Component CSS selector
     */
    Component(WebDriver driver, String name, String selector) {
        Application.LOGGER.debug("Component " + name + " " + selector);
        this.driver = driver;
        this.name = name;
        this.selector = selector;
    }

    /**
     * Get components from component selector
     *
     * @return List of WebElement
     */
    public List<WebElement> getElements() {
        Application.LOGGER.debug(this.name + ".getElements " + this.selector);
        return this.driver.findElements(By.cssSelector(this.selector));
    }

    /**
     * Get component from its selector
     *
     * @return WebElement found with selector
     * @throws NotFoundException if no elements are found or if more than one element are found
     */
    public WebElement getElement() throws NotFoundException {
        Application.LOGGER.debug(this.name + ".getElement " + this.selector);
        List<WebElement> elements = this.getElements();
        if (elements.size() == 0) {
            Application.LOGGER.debug("currentUrl: " + this.driver.getCurrentUrl());
            throw new NotFoundException(this.name);
        }
        if (elements.size() > 1) {
            Application.LOGGER.debug("currentUrl: " + this.driver.getCurrentUrl());
            throw new NotFoundException("Too many WebElements found for " + this.name);
        }
        return elements.get(0);
    }
}
