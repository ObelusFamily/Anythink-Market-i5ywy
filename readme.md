# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Install Docker as described [here](https://docs.docker.com/get-docker/)
2. Check the installation of Docker by running `docker -v` and `docker-compose -v` in your terminal
3. Run `docker-compose up` in the project's root directory
4. Verify that everything started correctly by opening [http://localhost:3000/api/ping](http://localhost:3000/api/ping) in your browser
5. Finally create a new user by opening [http://localhost:3001/register](http://localhost:3001/register) and filling out the form
