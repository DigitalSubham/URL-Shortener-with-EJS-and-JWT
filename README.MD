# URL Shortener Backend with EJS and JWT Authentication

This is a URL shortener backend project that uses EJS for rendering the frontend and JWT for user authentication. Users can create shortened URLs after signing up or logging in and view a list of all shortened URLs on the home page.

## Features

- **User Authentication:**

  - Users can sign up for an account.
  - Users can log in with their credentials using JWT for authentication.

- **URL Shortening:**

  - Authenticated users can shorten URLs.
  - Shortened URLs are unique to each user.

- **Home Page:**
  - Authenticated users can view a list of all their shortened URLs.

## Technologies Used

- **Node.js:** The server-side JavaScript runtime environment.
- **Express.js:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database for storing user data and shortened URLs.
- **EJS:** A templating engine for rendering dynamic HTML pages.
- **JWT (JSON Web Tokens):** Used for secure user authentication.

## Installation

### Install Dependencies

`npm install`

### Configure MongoDB

- Establish a MongoDB database and acquire the connection URL; subsequently, incorporate this URL into the index.js file.

### Configure JWT

- Generate a JWT authentication secret key and then update the auth.js file in the service folder with the newly generated key.

### Running the Application

```
npm start
```
