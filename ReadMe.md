[![Build Status](https://travis-ci.org/cwizard2011/mealsDB.svg?branch=master)](https://travis-ci.org/cwizard2011/mealsDB)

# Meals API
An API that fetches list of meals from `TheMealDb.com` and returns a meal that requires the least number of ingredient.

# Development
The server side (API/backend) is developed using Express and NodeJs


## Local Installation
1. Ensure [**Node JS**](https://nodejs.org/en/) is installed.
2. Clone the [**repository here**](https://github.com/cwizard2011/mealsDB.git)
4. Navigate to the project directory `cd  mealsDB`
5. Run `npm install` on the terminal to install dependecies
6. Run `npm run dev` to start the app

## Running with Docker

- Ensure [**Docker**](https://www.docker.com/) is installed and running on your system
- Run `docker build -t <your username>/<your preferred image name> .` to create a new image of the app
- Run `docker run --name <your container name of choice> -p <Port of Choice>:3000 -d <your username>/<your preferred image name>`
- Get the meal with least number of ingredients by visiting `localhost:<port of choice>/api/v1/food`

Endpoints:
----------

### Get Meal with least number of ingredients

`GET /api/v1/food`

The endpoint can be accessed [**here**](https://mealsdbapp.herokuapp.com/api/v1/food)

## Running test

- Run the command `npm test`

