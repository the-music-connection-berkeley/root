Feature: Submit form

  As a tutor
  So that I can provide free music lessons
  I want to submit the application form

Scenario: Successfully submit form
  Given I am on the tutor form
  When I fill in all required fields
  And I press "Submit"
  Then I should see success page

Scenario: Missing fields
  Given I am on the tutor form
  When I fill in "Name" with "TMC"
  And I press "Submit"
  Then I am on tutor form
