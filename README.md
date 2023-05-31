# LAB - 11

## Project: CAPS

### Author: Kenya Womack

### Problem Domain

Today, we begin the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

The following user/developer stories detail th

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/KenyaWomack/caps/actions/new)

-[Deployed Site](https://caps-566w.onrender.com/)

### Collaborators

Coriana Williams
Kao Saelor

### Setup

#### `.env` requirements (where applicable)

Using only PORT which can be found on `.env.sample`
Please refer to our package json for the required dependecies to develop this application.

#### How to initialize/run your application (where applicable)

Clone repo, `npm i`, then run `nodemon` in the terminal

#### Routes

  CRUD FEATURES

- GET : `/` - specific route to hit
- PUT : `/` - update
- POST : `/`-  to add
- Delete: `/`- delete

#### Tests

To run tests, after running `npm i`, run the command `npm test`.

#### UML

![UML image](UMLlab11.png)
