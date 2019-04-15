Feature: navigate from menu screen to forms
 
    As a parent or tutor
    So that I can participate in tutoring
    I want to be able to navigate from the menu screen to the correct forms
    
Background: movies in database

  Given I am on the home page

Scenario: navigate to parent/student form
    When I press "Parent"
    Then I should be on the parent_student form page

Scenario: navigate to tutor form
    When I press "Tutor"
    Then I should be on the tutor form page

Scenario: navigate to teacher form
    When I press "Teacher"
    Then I should be on the teacher form page