Feature: A million more page test

Background:
        Given I'm on the car safety page
    Scenario: Title check
       Then  I expect the title to match

    Scenario: Check Learn more about car safety link
       Then  Learn more about car safety link is displayed
        When  I click on the link
        Then  I expect the page title to be changed after loading car safety page

    Scenario: Check decades of innovation learn more button functionality
        Then  Learn more button is displayed
        When  I click on the button learn more about innovation button
        Then  I expect the title to be changed after loading innovation page

    Scenario: Check car models list pagination
        Then  I expect previous button to be disabled
        And   I expect next button to be enabled
        When  I click on next button
        Then  I expect previous button to be enabled      

    Scenario: Check the International Volvo page
         When I click on International Volvo image link
         Then I expect the International title to match

   Scenario: Check the other site navigation button         
         When Build your own element is not visible
         When I click on site navigation button
         Then Build your own element is visible       

   Scenario: watch the story
         When I click on watch the story button
         Then  I expect the title to match




