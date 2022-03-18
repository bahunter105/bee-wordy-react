**Bee Wordy (React Version) - Copy of NYT's Spelling Bee Game**

**My goal for this project:** *Get a better grip of React to create a fluid front-end experience, while connecting to a backend custom API.*

I’ve created a copy of the New York Time's Spelling Bee game. The original game gives users a set of 7 letters to create words. Words must be >3 letters and must include the letter placed in the center hexagon. Players are ranked based on the number of words found.

***Building the Backend API with Ruby & Sinatra:***
The functionality for creating the 7 letters is the same as the original Bee-Wordy Rails app. But to keep the program light, I used the Sinatra to generate the JSON output. It is currently hosted on Heroku.

***Animating the Frontend with React:***
<!-- After building the html framework, I added Stimulus JS to bring the UI functionality to life.  The most challenging aspect was implementing a letter shuffler that randomizes letters upon the click of a button. For this, I utilized the GON gem to send the list of letters to a JS controller that randomizes the order and then re-inputs the letters back into the html. With Stimulus JS, I also added a progress bar that updates and word cards that are revealed when their corresponding words are found. -->

***Additional improvements for the next iteration:***
- TBD

Note: This makes use of the list of english words by dwyl: https://github.com/dwyl/english-words and also the Merriam-Webster Dictionary API to check the list and provide definitions.
