# ImageGen

simple software to produce an image by color and display it using React and Node js.

# Run the Server

cd into the api folder
run the command: node server.js

# Run the ui

cd into the ui folder
run the command : npm start

# Apis

- GET /api/image : The image should always be avaiable and sent to this url resource whenever the app being refreshed or loaded
- POST /api/generateImage : A post api to generate an image, it sends the the length and widith of the image which to be generted by colour
- GET /api/GetImage : to get an url for one image, the application supports only image
