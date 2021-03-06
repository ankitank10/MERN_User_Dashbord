# MERN_User_Dashbord


### Getting Started

Prerequisites:
Node  - version > 5
Npm – version > 4


#### Steps to run the repo
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/ankitank10/MERN_User_Dashbord.git
> cd MERN_User_Dashbord
> npm install
> cd client
> npm install
> cd MERN_User_Dashbord
> npm run dev
```

This will open the project in http://localhost:3000 and the server will be served from http://localhost:9999

####Description/Overview:

The app is a MERN application using node, express, redux, react, react-router to create a user details dashboard to display user details.
The data is fetched from express api hosted on node server through axios and then displayed in component using actions and reducers.

App is basically build with a thought to display the react redux functionality using express. There is a complete segregation of client and server side code with configs being added to env.development files.



#####Structure

The app demonstrates complete extendible skeleton of MERN app having express routes and node server running on port 9999. 
On top of that client side is made using create-react-app with code in client folder

MERN_User_Dashbord is the root folder which includes server package.json and express routes. ‘concurrently’, ‘express’, ‘nodemon ‘ are the packages used on server side.
routes.js is the api routes dummy file which is responsible for all ajax calls made from my client .



Server is served on port 9999. 
"dev": "concurrently \"npm run server \" \"npm run client \" "
is used to run both client and server simulataneously.

App is deployed on heroku - https://serene-wildwood-48095.herokuapp.com and using the react build deployment

Client structure:
Public/index.html is the starting point of the application.
Packages used:
    "axios": "^0.17.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.0",
    "react-stripe-checkout": "^2.6.3",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0"

 #####Scaling and extension
 
 The app can be scaled to multiple components and implementing no SQl db and connecting through express api's

