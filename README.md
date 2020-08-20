# Welcome to Doodle Click!

Doodle Click is a memory game created with React. On your homework assignment, you received a C! But no worry! You are given the opportunity to redeem your grade by earning extra credit points with this game. In order to earn extra credit, you will need to click on a doodle to earn points. But the catch is, if you click on a doodle twice, you lose all your extra credit points and your C, and end up with an F! The choice is yours! Do you trust your memory to get you an A?

The main goal of the assignment was to utilize react to break the application's UI into components, manage state, and respond to user events.

![Screen Shot 2020-08-19 at 6 20 05 PM](https://user-images.githubusercontent.com/61812035/90705791-9d221280-e248-11ea-85ed-4c3e4e13b8f0.png)

### See the game in action!

*Doodle Click* is deployed to Github Pages, click [here](https://ypangilinan.github.io/clicky-game/) to start playing or refer to the GIF below.

This GIF displays when your memory fails you and you receive an F!

![Untitled_ Aug 19, 2020 6_21 PM](https://user-images.githubusercontent.com/61812035/90706014-1588d380-e249-11ea-86f8-1a85e711f932.gif)


### How was this app created?
The technologies used to create this app are:
- HTML
- JavaScript
- React
- [Tally Marks](https://www.npmjs.com/package/tally-marks)
- [Create-React-App](https://github.com/facebook/create-react-app)
- React-DOM
- [GH-Pages](https://www.npmjs.com/package/gh-pages)
- [React Animations](https://www.npmjs.com/package/react-animations)

### Featured Feature!
One feature that I was most excited about implementing was the tally marks used for keeping the points. This was created using the tally-marks NPM package listed above. 

![Screen Shot 2020-08-19 at 6 22 17 PM](https://user-images.githubusercontent.com/61812035/90705938-eb371600-e248-11ea-9d73-b3d7ad048dce.png)

## Want to run it locally?
To install the application follow the instructions below:

	git clone git@github.com:ypangilinan/news-scrape
	cd clicky-game
	npm install
This should install the necessary packages from the Package.JSON needed for this application. 

In the terminal,run the Node.js application with the command below.

	npm start
  
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.  

## Assignment Requirements
### Create a new React application using Create React App:
- [x] The application should render different images (of your choice) to the screen.
  - [x] Each image should listen for click events.
- [x] The application should keep track of the user's score. 
  - [x] The user's score should be incremented when clicking an image for the first time. 
  - [x] The user's score should be reset to 0 if they click the same image more than once.
- [x] Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
- [x] Once the user's score is reset after an incorrect guess, the game should restart.
- [x] When complete, the application should be deployed to Github Pages. 
  - [x] See the README generated with Create React App for instructions on deploying the application to Github Pages.

  
