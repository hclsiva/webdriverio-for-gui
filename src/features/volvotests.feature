Feature: A million more page test

Background:
        Given I'm on the car safety page
    Scenario: Title check
       Then  I expect the title to match
    Scenario: Check Learn more about car safety link
       Then  Learn more about car safety link is displayed
        When  I click on the Learn more about car safety link
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
   Scenario: Check the Heading link of SUV XC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
         When I click on SUV XC90 Header Link
         Then Check the SUV XC90 Target URL is correct
   Scenario: Check the Learn link of SUV XC90 
         When I click on SUV XC90 Learn Link
         Then Check the SUV XC90 Target Learn URL is correct
   Scenario:Check the Shop link of SUV XC90 
         When I click on SUV XC90 Shop Link
         Then Check the SUV XC90 Target Shop URL is correct
   Scenario: Check the Heading link of SUV XC60 
         When I click on SUV XC60 Header Link
         Then Check the SUV XC60 Target URL is correct
   Scenario: Check the Learn link of SUV XC60 
         When I click on SUV XC60 Learn Link
         Then Check the SUV XC60 Target Learn URL is correct
   Scenario:Check the Shop link of SUV XC60 
         When I click on SUV XC60 Shop Link
         Then Check the SUV XC60 Target Shop URL is correct              
   Scenario: Check the Heading link of SUV XC40
         When I click on SUV XC40 Header Link
         Then Check the SUV XC40 Target URL is correct
   Scenario: Check the Learn link of SUV XC40 
         When I click on SUV XC40 Learn Link
         Then Check the SUV XC40 Target Learn URL is correct
   Scenario:Check the Shop link of SUV XC40 
         When I click on SUV XC40 Shop Link
         Then Check the SUV XC40 Target Shop URL is correct
   Scenario: Check the Heading link of SUV XC40 Electric
         When I click on SUV XC40Electric Header Link
         Then Check the SUV XC40Electric Target URL is correct
   Scenario: Check the Learn link of SUV XC40 Electric
         When I click on SUV XC40Electric Learn Link
         Then Check the SUV XC40Electric Target Learn URL is correct
   Scenario:Check the Shop link of SUV XC40 Electric
         When I click on SUV XC40Electric Shop Link
         Then Check the SUV XC40Electric Target Shop URL is correct                       
    




