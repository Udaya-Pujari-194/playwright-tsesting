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


## session 13 : How to wprk with locators which extract multiple web-elements in page.
- selecting the card-body  and a tag inside card
- when we have all the card elements with same classname: we make use first() ot nth(number) fro selecting perticular card 

## session 14 : Understanding how wait mechanism works if list of elements are returned.
-  check out auto wait in the documentation
-  it waits until a DOM elements is attached to it.
-  Practice: https://rahulshettyacademy.com/client/
- username:dummy194194@gmail.com   password:Dummy194194@

## session 15: Techniques to wait dynamically for new pages in service based application
-  solving the assignment
- wait untill all the network calls are made ,then test by making use of  eg: await page.waitForLoadState('networkidle')
- or eg: await page.locator(".card-body b").first().waitFor()

## session 16: Home work code

## session 17: Handling static Select dropdown options with playwright
-  selecting dropdown
- selecting  radio button
- page.pause()