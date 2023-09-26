# Lets Chat Application
It is a real-time chat application built using Angular, Node.js, and Socket.io. It allows users to chat with other users in real-time. Users can join several rooms and would be able to chat with multiple users at the same time.

# Table of Contents

# Features
1. Real-time chat with multiple users.
2. Multiple room concept.
3. User joining and leaving notifications.
4. Message history and persistence.

# Prerequisites
1. Node.js: You should have Node.js installed on your machine. Node js can downloaded from `https://nodejs.org/`.
2. Angular CLI: To work with the Angular frontend, you need Angular CLI. You can install it globally using npm: `npm install -g @angular/cli`
   
# Getting Started
1. Clone the repository:
                       `git clone https://github.com/SriRakshaSArun/lets-chat.git`
2. Change to the project directory:
                      `cd lets-chat`
3. Install server dependencies:
                       `npm install`
4. Install client dependencies:
                       `cd lets-chat-ui`
                       `npm install`

# Running the application
1. Start the Node.js server using npm run serve. This will run the nodemon and server will listen to the port 3000 and application can be accessed at `http://localhost:3000`. Nodemon monitors for changes in application files and automatically restarts the application when changes are detected.
2. Angular frontend can be started using npm start by navigating to the UI project folder. Application can be accessed at `http://localhost:4200`.
3. Multiple end users can access the application using the above link in several browsers or instances of the browser.
4. Users can join the multiple rooms and chat with other users within the same room using Join button.
5. Leave button will remove the user from the room and other users in the room will be notified.
