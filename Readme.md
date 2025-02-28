## playwright
<!-- https://rahulshettyacademy.com/loginpagePractise/ -->
## session 8
- fixtures
- context: nothing but new instance


## session 9

- playwright.config.js

## session 10

- adding the validations
    - getting title
    - assertions (.toHaveTitle)
    - cross browser testing
    - adding headless to true in config 
    
## session 11

-  locator
-  CSS selectors:Rules
     - If Id is presnt
            CSS-> tagname#id  (or) #id
            eg: await page.locator("#login_field").fill("udaysp05@gmail.com")
     - If class attribute is present
            CSS-> tagname.class (or) .class
     - Write any CSS based on any Attribute
            CSS-> [attribute='value']
            eg: await page.locator("#login_field").fill("udaysp05@gmail.com")
     - Write CSS with Traversing from Parent
            CSS-> parenttagname >> childtagname
     - If needs to write the locator based on text
            text=""
- make use of selector hub extention or chropath
-  toContainText() assertions

## session 12

- type/fill : used to enter the vakues in th i/p field
- to erase the data / to re-enter the correct data make the fill with empty string