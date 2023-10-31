# Getting Started/ How to Setup Project

## Prerequisites

1. [Node.js](https://nodejs.org/) version 10.16.0 installed on your computer.

2. Make sure you have git installed if you dont Download it here [here](https://git-scm.com/downloads)
3. [NPM](https://www.npmjs.com/) to package manager to run a remote script

Clone the repository into your system but running git clone https://github.com/thobbyAk/cube-nominate.git

cd into the root folder using cd "folder name"

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

1. I had a challenge with fetching a user's current process (image and value of the progress bar) based on the current user nomination on edit. I created an array of all ratings available and the values attached to them. i created a helper function to search through the array for the existing rating value and return the rating object. use the rating object returned to populate the
2. I had a challenge with the scroll position staying in the same position as the previous page when you route to a new page. I created a helper component that adjusts the scroll position to the top whenever the route/pathname changes.

### `Technologies Used technologies`

1. Redux- I used it for state management in the application because it provides me with a global state. it also provides middleware support, that allows me to add custom logic, such as API requests, or routing, to the dispatch process
2. Reduxjs/toolkit - I used reduxtjs/toolkit because it simplifies the process of defining reducers and actions. I can write cleaner, more concise code for updating the application's state
3. Axios for making HTTP request calls. I used Axios because it provides interceptor support when making HTTP requests that require authorizations. it also simplifies handling asynchronous operations and allows me to use async/await syntax, resulting in cleaner and more readable code. it also allows me to handle error responses/requests from the HTTP calls.
4. React-hot-toast - this provides feedback as a prompt on the top right corner when an API call is made

### `Extra Features`

Register screen - allows a cube employee to sign up
Login screen - allows a cube employee to log in before nomination. the authentication token returned on login is used to authenticate the API call which requires authentication

Reduxjs/toolkit

### `Future Improvement `

1. Pagination - A pagination component is needed to prevent overflow on each user's nominations page. this improves the user experience
2. search functionality - A search functionality to help search through old nominations. the search will be by nominee name.
