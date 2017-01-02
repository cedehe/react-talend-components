package com.talend.component;

import org.openqa.selenium.WebDriver;

/**
 * AppHeaderBar is used to easy access to WebElements of the react-talend-component's AppHeaderBar component.
 *
 */
public class AppHeaderBar extends Component {

    static final String NAME = "AppHeaderBar";

    static final String SELECTOR = ".tc-app-header-bar";

    /**
     * AppHeaderBar's constructor
     *
     * @param driver Selenium WebDriver
     */
    AppHeaderBar(WebDriver driver) {
        super(driver, NAME, SELECTOR);
    }
}
