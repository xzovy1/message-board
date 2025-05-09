# message-board
A simple message board where people can communicate.

## Goals
this is building on [express](https://expressjs.com/), following the MVC backend pattern.

## Layout
Use 2 routes , index ("/") and new ("/new").
These pages are built and styled using [EJS](https://ejs.co/)

#### "/"
- contains all the messages submitted by users.
    - this is shown using GET requests to the server.
- each message contains a button to display info about the message. (date, time, etc.).


#### "/new"
contains a form for users to create new messages. 
new Messages are created using POST requests containing the data. 

### db
no actual database is used. It is a mock database built with a js file. 