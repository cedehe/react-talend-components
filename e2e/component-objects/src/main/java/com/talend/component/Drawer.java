package com.talend.component;

import org.openqa.selenium.WebDriver;

/**
 * Drawer is used to easily access to WebElements of the react-talend-component's Drawer component.
 *
 */
public class Drawer extends Component {

    static final String NAME = "Drawer";

    static final String SELECTOR = ".tc-drawer";

    /**
     * Drawer's constructor
     *
     * @param driver Selenium WebDriver
     */
    Drawer(WebDriver driver) {
        super(driver, NAME, SELECTOR);
    }



}
