package com.talend.component;

import org.openqa.selenium.WebDriver;

/**
 * Application is the root the API to use web components
 */
public class Application {

    public WebDriver driver;

    public SidePanel SidePanel;

    public AppHeaderBar AppHeaderBar;

    public List List;

    public Application(WebDriver driver) {
        this.driver = driver;
        this.SidePanel = new SidePanel(driver);
        this.AppHeaderBar = new AppHeaderBar(driver);
        this.List = new List(driver);
    }

    public List getList() {
        return this.List;
    }
}
