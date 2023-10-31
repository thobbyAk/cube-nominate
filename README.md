# Getting Started/ How to Setup Procject

## Prerequisites

1. [https://nodejs.org/](Node.js) version 10.16.0 installed on your computer.

2. Make sure you have git installed if you dont Download it here [https://git-scm.com/downloads](here)
3. [https://www.npmjs.com/](NPM) to package manager to run a remote script

Clone the repository into your system but running git clone https://github.com/thobbyAk/cube-nominate.git

cd in to the root folder usund cd "folder name"

install all dependencies using **npm install**

## Available Scripts

In the project directory, you can run:

### `npm install`

install all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Challenges`

#### `Prcocess Rating`

1. I had a challenge with fetching a users current process (image and value of the progress bar) based on current user nomination on edit. i created an array of all ratings available and the values attached to them. i created an helper function to search through the array for the existing rating value and return the rating object. use the rating object returned to populate the
2. I had a chellange with the scroll position staying on the same position as the previous page when you route to a new page. i created an helper component that adjust the scroll posiition to the top whenever the route/pathname changes .

### `Technologies Used technologies`

1. Redux- I used it for state management in the application because it provides me with a global state. it also provides middleware support, that allows me to add custom logic, such as API requests, or routing, to the dispatch process
2. Reduxjs/toolkit - I used reduxtjs/toolkit because it simplifies the process of defining reducers and actions. I am able write cleaner, more concise code for updating the application's state
3. Axios for making HTTP requests calls. I used axios because it provides interceptor support for when making http requests that require authorizations. it also simplifies handling asynchronous operations and allows me to use async/await syntax, resulting in cleaner and more readable code. it also allows me to handle error responses/requests from the http calls.
4. React-hot-toast - this provides userfeedback as a prompt on the top right corner when an api call is made

### `Extra Features`

Register screen - allows a cube employee to sign up
Login screen - allows a cube employee to login before nomination. the authentication token returned on login is used to authenticate the api call which require authentication

Reduxjs/toolkit

### `Future Impovement `

1. Pagination - A pagination component is needed to prevent overflow on the each users nominations page. this improves the user experience
2. search functionality - A search functionality to help search through old nominations. the search will be by moninee name.
