# **Space-Age Calculator**

#### Kelsey Guerra

## Description

An independent project focused on building a space age calculator and testing each variable with Karma and Jasmine.

These variables include:

* Take a person’s age in years and convert it into seconds.
* Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)
* Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
* Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
* Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
* Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

**BDD Breakdown**

Behavior | Input | Ouput
------------ | ------------- | -------------
Calculator Will Convert User's Years To Seconds | 1 | | | 3.154e+7 |
Calculator Will Convert Two Different Dates From Years To Seconds |4/9/1992, 4/20/2018| | |3.154e+7|
Calculator Will Convert User's Age in Earth Years To Mercury Years |26| | |(.24)|
Calculator Will Convert User's Age in Earth Years To Venus Years |26| | |(.62)|
Calculator Will Convert User's Age in Earth Years To Mars Years |26| | |(1.88)|
Calculator Will Convert User's Age in Earth Years To Jupiter Years |26| | |(11.86)|
Calculator Will Return User's Life Expectancy On Each Planet | Mercury, Venus, Mars, Jupiter| |Average Life Expectancy |
Calculator Will Return The Number Of Years Live Passed If Already Surpassing Average Life Expectancy | Planets: | | Number of Years |


## Setup/Installation Requirements

* Download Node.js
* [View/Clone repo]
* [View demo]

## Technologies Used

* HTML
* CSS _(Bootstrap 4)_
* JavaScript _(jQuery 3.3.1)_
* Karma
* Jasmine


## Link



## License

MIT License

Copyright (c) 2018 Kelsey Guerra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
