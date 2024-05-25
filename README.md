# Capstone Project 

Overview: 
The goal of this app was to showcase my ability to build a full-stack application with my own custom node.js backend API and React frontend. The application is a photo gallery application which mirrors the eary version of instagram which only feature photographs. 

Features and Functionality: 
Main features of the application are to allow users to share photos with one another and interact with each other as well. The users will have to ability to: 

-comment on other users uploaded photos 
-follow other users accounts 
-optionality to upload or remove photos and comments 

User Flow: 
-Users will initially be asked to signed up or login to an existing account 
-Once logged in, the user will be guided to a greeting page. 
-Posts on the main feed will display the username, caption and image. 


Custom API: 
The API used for this application was created and designed by me. The API consists of standard CRUD functions and follows RESTful architecural guidelines.

API Overview: 
To see how the API works, please refer to my Backend repository to explore my models, routes, and schema. I've included extensive comments throughout my code to help viewers understand and have a clearer image of my thought process.

To see how the frontend links to and communicates with my backend API, refer to the API file in my frontend repository.

Technologies Used for application: 
-JavaScript 
-Node.js
-Express.JS
-React
PostgreSQL
-SQL
-CSS
-Bootstrap
-Unit Test 
-Surge 
-Heroku
-VS Code 

Database Schema: 

https://www.google.com/imgres?q=database%20schema%20instagram&imgurl=https%3A%2F%2Fwww.sensedeep.com%2Fimages%2Fblog%2Finstagram-erd.png&imgrefurl=https%3A%2F%2Fwww.sensedeep.com%2Fblog%2Fposts%2Fstories%2Fbuilding-instagram-with-dynamoDB-and-OneTable.html&docid=2NsOFrcoBrlmXM&tbnid=OddBplk7gvGiuM&vet=12ahUKEwj1j963-KiGAxXEgoQIHdT5CT4QM3oECGAQAA..i&w=1654&h=935&hcb=2&ved=2ahUKEwj1j963-KiGAxXEgoQIHdT5CT4QM3oECGAQAA


Features

-User Authentication: Secure login and registration system using JWT.

-Photo Upload: Users can upload their photos with ease.

-Photo Management: Organize photos into albums, add tags, and descriptions.

-Search Functionality: Easily search photos by tags, names, or descriptions.

-Favorite Photos: Mark your favorite photos for quick access.

-User Profiles: Personalized profiles for users to manage their photo collections.


Usage: 

1.Register or log in:

Create a new account or log in with your existing credentials.

2.Upload Photos:

Navigate to the upload section to add new photos to your gallery.

3.Manage Photos:

Organize your photos into albums, add tags and descriptions, and manage your collections.

4.Search and Favorite:

Use the search functionality to find specific photos and mark your favorites for quick access.



Installation

To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/WanlyL/photo-gallery-capstone.git
cd photo-gallery-capstone
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

plaintext
Copy code
REACT_APP_API_URL=http://localhost:5000
NODE_ENV=development
PORT=5000
JWT_SECRET=your_jwt_secret
Run the development server:

bash
Copy code
npm start
The application should now be running at http://localhost:3000.


Contributions are welcome! If you have suggestions for improving this project, please fork the repository and create a pull request with your changes. For major changes, please open an issue to discuss what you would like to contribute.

Fork the Project
Create your Feature Branch (git checkout -b feature/your-feature)
Commit your Changes (git commit -m 'Add some feature')
Push to the Branch (git push origin feature/your-feature)
Open a Pull Request













