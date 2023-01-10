# Personality Test

This personality test web application is based off the Myers-Briggs Type Indicator that includes 5 personality categories. You will be able to generate a unique personality description based on your agreement to personality statements. This test was taught to be in an Introduction to Psychology class, therefore the target audience here is Psychology enthusiasts but could also be anyone who wishes to perform a personality on themselves. It will be useful for both two see how answering these statements informs how strong they rate on each of the five personality descriptors. 

![Personality Test](https://github.com/luayidriss/personality-test/blob/b0bbef9929b7371cfc9066c42039120386d2c213/readme-images/main-image.png)

## Features 

The website has multiple features that allow you to perform the test and generate the personality description.
All pages are wrapped in the "card" which is a div in the center of the page below the header.
The website is only intended for desktops and smartphones.

### Existing Features

- __Start Page__

  - The start page shows the instructions to follow to perform the test accurately. 
  - It includes a start button that will switch from the initial page to the test page.

![Start Page](https://github.com/luayidriss/personality-test/blob/448e814cb99a698e63c04ae1f9964a233ed4b355/readme-images/start-page.png)

- __The Test Page__

  - The test page has multiple components to it: the prompt, the option-grid, the counter and the move buttons.
  - The prompt is automatically generated everytime to produce a new prompt that the user will agree or disagree to. There are 10 prompts organized following the order of the five categories of personality.
  - The option-grid has a scale that ranges from Strongly Disagree to Strongly Agree. Depending on the prompt, their value (score) changes. This is due to the fact that some prompts are written in a negative form, so responding Disagree to them would be that they score high on said category.
  - The counter allows for the user to know their progress in the test, how many statements they answered so far.
  - The move buttons allow you to go to next prompts but also to previous ones while seeing your previous response and being able to change it. Only at the last prompt will the user not be able to go to the next question but will only be shown the finish button. The finish button takes you to the results page.

![Test Page](https://github.com/luayidriss/personality-test/blob/448e814cb99a698e63c04ae1f9964a233ed4b355/readme-images/test-page.png)

- __Results Page__

  - The results page has a header and 5 paragraphs that represent each of the 5 personality categories. Each paragraph should include a personality description that relates to whether you scored high or low on that category.
  - The reset button below allows you to retake the test. It initializes all the previous data as to not have any interference with the new test data.

![Results Page](https://github.com/luayidriss/personality-test/blob/448e814cb99a698e63c04ae1f9964a233ed4b355/readme-images/result-page.png)

### Features Left to Implement

- Another feature idea is to offer the option of e-mailing the results to the user if asked for. This would need to include a input element to register their email, and then a function that would call for a window for "mailto:".
- The website needs to also be more responsive to different device dimensions, this will be implemented later.

## Testing 

The web application has been tested by myself, my mentor and multiple friends of mine. All of the intended functionalities for the buttons and different pages work as needed.
Multiple tests have also been conducted to make sure the correct scores are being saved and calculated correctly to generate the correct personality descriptor. This was done manually while following the way multiple people answered, the manual result was compared with the program's result and saw no difference.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator]([https://validator.w3.org/nu/?doc=https%3A%2F%2Fluayidriss.github.io%2Fpersonality-test%2F])
- CSS 
  -  No errors were found when passing through the official [(Jigsaw) validator]([https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fluayidriss.github.io%2Fpersonality-test%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en])
- Javascript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 10 functions in this file.
      - Function with the largest signature take 0 arguments, while the median is 0.
      - Largest function has 13 statements in it, while the median is 5.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

The most complex function has a cyclomatic complexity value of 4 while the median is 2.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [https://luayidriss.github.io/personality-test/]


## Credits 

I was insipired and worked roughly along the structures of both of these tutorials ([https://github.com/edubz99/Simple-Personality-Quiz]) ([https://www.youtube.com/watch?v=riDzcEQbX6k]).
I have my psychology class and professors to thank for inspiring me to pursue this web application.
My mentor at Code Insitute has been great help, without him I would not be as critical of my code.

### Content 

- All elements relating to the test was taken from an Introduction to Psychology TextBook Material (Kalat James W. 1996. Introduction to Psychology. 4th ed. Pacific Grove: Brooks/Cole Publ.)
- The Logo was taken off this website for free licensing (https://www.pngwing.com/en/free-png-khyvd)


