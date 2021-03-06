package com.talend.component;

import org.openqa.selenium.WebDriver;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Application is the root the API to use web components
 */
public class Application {

    private static final Logger LOGGER = LogManager.getLogger(Application.class);

    public WebDriver driver;

    public SidePanel SidePanel;

    public AppHeaderBar AppHeaderBar;

    public List List;

    /**
     * Application constructor
     *
     * @param driver Selenium WebDriver
     */
    public Application(WebDriver driver) {
        this.driver = driver;
        this.SidePanel = new SidePanel(driver);
        this.AppHeaderBar = new AppHeaderBar(driver);
        this.List = new List(driver);
    }
}
