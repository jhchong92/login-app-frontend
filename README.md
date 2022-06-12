# Login App

A project built with Quasar

### Features
* User Registration
* Form validation with [Vuelidate](https://vuelidate.js.org)
* Login/Logout
* Vue Store with [Pinia](https://pinia.vuejs.org)
* Session-based routing

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
# or
yarn start
```

### Build the app for production
```bash
quasar build
```

## Heroku Deployment
### First time Setup
Login Heroku CLI and create App repository:-
```
heroku login
heroku create <app-name>
```

Add Heroku Buildpacks:-
```
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
```

### Existing Deployment
Add Heroku remote repository:-
```
heroku git:remote -a <app-name>
```

### Set Heroku Environment
```
heroku config:set API_APP_NAME=<backend-app-name>
```
### Deploy
```
git push heroku master
```
