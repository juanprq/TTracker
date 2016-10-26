TTracker
===

This is a small project that allows users to track their working time with logs, the main purpose is to learn multiple javascript technologies and get better with them.

Technologies
---

This projects uses the next list of technologies:

 * Babel: supporting ES-2015.
 * React: as the client ui library.
 * Redux: To manage the state in the client.
 * Express: to implement the backend.
 * Jest: Testing library for the simple logic in redux.

Installation
---

This project assumes that you have installed node at least version 6.6 and the node package manager at least in version 3.10.3.

To begin the installation first clone this repository and the execute in the main folder `npm install` to get all the required dependencies.

To run the main server execute `npm run dev`, this command automatically recognize changes in the code in case that want to develop new features and serve the files from the `public` folder.

To access the web application enter in your browser and use [`http://localhost:3000`](http://localhost:3000) as url.

Tests
---

The tests for the client implementation are in the `__test__` folder, to run the test suit one, execute the command `npm test`, if you are implementing new tests, you can watch file changes to tun the tests automatically, to do that run the command `npm run test:watch`.
