# MERN Ecommerce

* features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components
  * Redux to manage application's state
  * Redux Thunk middleware to handle asynchronous redux actions

## Demo

This application is deployed on Heroku. Please check it out :smile: [here](https://ooooooooooooooooooooooooooooo.herokuapp.com/).

## Install

Some basic Git commands are:

```
$ git clone https://github.com/Amitabh-K/mern-ecommerce.git
$ cd project
$ npm install

```

## Setup

```
> .env file must be added to run the application
> .env file must include: 
  * PORT & MONGO_URI
  * SECRET_OR_KEY => secret key for JWT
  * MAILCHIMP_KEY & MAILCHIMP_LIST_KEY => Mailchimp configuration
  * MAILGUN_KEY & MAILGUN_DOMAIN & MAILGUN_EMAIL_SENDER => Mailgun configuration

```

## Heroku Deployment

```
> Procfile should be added with the following command **web: npm run start:production**
> Make sure all modules are listed under dependencies and no devDependencies

```

## Run the application for development

```
$ npm start

```

## Run the application for production

```
$ npm run start:production

```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [Webpack](https://webpack.js.org/)

- [React](https://reactjs.org/)

