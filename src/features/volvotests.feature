Feature: A million more page test

Background:
        Given I'm on the car safety page
    Scenario: Title check
       Then  Verify and accept all cookies
       Then  I expect the title to match

    Scenario: Check Learn more about car safety link
       Then  Learn more about car safety link is displayed
        When  I click on the Learn more about car safety link
        Then  I expect the page title to be changed after loading car safety page

    Scenario: Check decades of innovation learn more button functionality
        Then  Learn more button is displayed
        When  I click on the button learn more about innovation button
        Then  I expect the title to be changed after loading innovation page

    Scenario: Check the Learn link of SUV XC60 
         When I click on SUV XC60 Learn Link
         Then Check the SUV XC60 Target Learn URL is correct