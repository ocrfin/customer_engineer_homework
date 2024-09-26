# Holistiplan Homework

Welcome to holistiplan's example rewards take home project!

## Basic Commands

### Running the site

This app integrates with a Vue frontend located in `vue_frontend`.

##### With Docker

The Vite dev server will automatically run in docker when started with the local.yml configuration.

```sh
docker-compose -f local.yml up --build -d
```

Once the docker containers are up, you can visit the site at http://localhost:3000

### Setting Up Your Users

A default user has already been created with the following credentials:

- _Email_: `someone@holistiplan.com`
- _Password_: `bfx!wkp3zve3WUX*guq`

To create another **normal user account** (if you need to), just go to Sign Up and fill out the form. Once you submit it,
you'll see a "Verify Your E-mail Address" page. Go to your docker desktop holistiplan/django container log output
to see a simulated email verification message. Copy the link into your browser. Now the user's email should be
verified and ready to go.


