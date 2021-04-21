# Project Pollen Backend

This is the backend of our App for project pollen It was built using Mongoose, Node.js and Express.

View the website [here](https://projectpollen.netlify.app/)

Find the hosted back end [here](https://project-pollen-backend.herokuapp.com/api/)

See our front end repository [here](https://github.com/CharlyMannion/project-pollen-frontend)

Check out the presentation slides [here](placeholder.com)

## Contributors
* [Alex Hill](https://github.com/alexxmadeleine)
* [Edwin Simpson](https://github.com/0cedwins)
* [Madhura Bhujbal](https://github.com/madhurabhujbal)
* [Charly Mannion](https://github.com/CharlyMannion)

## Goals

### Overarching Product Goal
We defined our overarching goal for this product as: 
"To increase donations to Manchester's homeless community and to raise awareness surrounding the causes of homelessness."

### Sprint Goal
Our goal for this sprint was to create an app that would allow users to scan a QR code. This would then open a web app that would allow them to read the stories of homeless people. We would also set up 'fake door' donation buttons, to test if people would want to use our app to donate to homeless charities before we built this functioality. 

### Learning Goals 
* We wanted to have fully working backend and frontend code
* We wanted to build our backend with MongoDB and the frontend with React
* We wanted to have an excellent UX design, and learn how to use Figma

## Product Vision
* To get people to think more about homelessness and donate more. Not just homelessness generally, but how people become homeless
* To raise awareness and challenge stigma around homelessness, including invisible homelessness
* To eventually have people downloading the 'Pollen' App
* To engender a culture of giving regular donations (which would be the focus of the app in the future, not the website itself)

## User Stories
### MVP
```
As a commuter, 
so I can pass the time on my commute, 
I want to read some interesting story content

As an interested user, 
so that I can learn more about the cause, 
I want there to be an option to view more stories

As a landing page visitor, 
so I can move to the stories section from the landing page, 
I want to see a link to this section of the website

As an interested user, 
so I can find out more about why the art is there and read the story of the person on the poster, 
I want to be able to scan a QR code

As a donator, 
so that I can understand where my donations are going, 
I want to read more about the benefiting charity

As a donator, 
so that I can donate quickly and easily, 
I want to be able to donate directly from the story page

As a busy commuter/donator, 
so that I can donate quickly and easily, 
I want to see 'quick donation' options (such as Paypal or Apple Pay)

As a donator, 
so I can easily select a donation amount, 
I want to be able to click donation buttons for specific amounts

As an interested user, 
so that I can view the project as a whole and understand what Pollen is, 
I want to be able to access the landing page via URL
```

### Nice To Have User Stories
```
As a donator, 
so that I can build a habit of donating, 
I want to receive reminder notifications

As an interested user, 
so that I can find out more about the artist, 
I want to be able to click a link that takes me to the artists' website

As a landing page user, 
so that I can see where there is more artwork around the city, 
I want there to be a map

As a donator, 
so that I can see where my money is going and make a decision on how much to donate, 
I want to see what each amount will get the charity
```

Check out our trello board [here](https://trello.com/invite/b/spCisYKz/e01fd4436839d69c60583a025ae1bd2d/homelessness-project)

## Technologies Used
* React
* Javascript
* Node.js
* MongoDB
* Jest
* Heroku
* Netlify

## Running the App locally
* Clone the repo [here](https://github.com/CharlyMannion/project_pollen): 
```
git clone https://github.com/CharlyMannion/project_pollen
```
* Go into the project directory:
```
cd project_pollen
```
* Open the app in your favourite text editor to view the code (We like VSCode):
```
code .
```
* To install all dependencies, in your terminal type:
```
npm i
```

## Running Tests
```
npm test
```

## User Stories

## Diagrams

### Component Tree Diagram

![Screenshot 2021-04-20 at 13 19 50](https://user-images.githubusercontent.com/28218869/115394837-1fe5dd80-a1db-11eb-99c5-71cabfb8fa0b.png)

## Our Story

### Day 1: Tuesday 20th April 2021

Today was our first day dedicated to our build week project. We started with sprint planning, which we timeboxed to 2 hours.

Edwin and Madhura got the backend up and running. They used MongoDBto query the database. Then they hosted the backend on Heroku.

Charly created the front end app with React, and built out some basic components including the Header, StoryList, Footer, NavBar, ErrorDisplay and Loader, etc. 

Alex designed the wireframes for the app using Figma.

### Day 2: Wednesday 21st April 2021

Madhura, Edwin and Charly spent the first part of the morning mob programming a few bugs in our backend code. 

After Edwin fixed the final few things in the backend, and got it pushed to Heroku we all decided to move on to building out our React components.

Charly worked on maxing requests to our backend API using axios, in order to get the stories directly from our database.

Edwin worked on the Hero feature.

Madhura worked on the sliding bar for our Donation Component.

After finishing up her beautiful designs for our landing page, Alex moved on to designing the story page.

## Challenges

## Successes

## What we would do differently next time



