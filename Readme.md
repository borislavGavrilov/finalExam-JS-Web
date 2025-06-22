# SoftUni JS Back-End Exam Preparation Cheat Sheet

1. Initialize Project
 - [x] Init npm project `npm init --yes`
 - [x] Change module system
 - [x] Add start file `/src/index.js`
 - [x] Add Dev Script
 - [x] Config Debugging
2. Express
 - [x] Install express `npm i express`
 - [x] Init express server
 - [x] Add public resources
 - [x] Setup static middleware
 - [x] Add body parser middleware `app.use(express.urlencoded());`
 - [x] Add home controller
 - [x] Setup routes file
 - [x] Add error page
3. Handlebars
 - [x] Install handlebars `npm i express-handlebars`
 - [x] Config handlebars as view enging
 - [x] Config views file extensions
 - [x] Change views directory
 - [x] Add resources to views folder
 - [x] Add home view
 - [x] Add layout
 - [x] Add partials dir
 - [x] Config handlebars to read mongoose documents
4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Setup db connection
 - [x] Setup db connection error handling
 - [x] Add basic user model
5. Register
 - [x] Install bcrypt `npm i bcrypt`
 - [x] Fix navigation links
 - [x] Add register view
 - [x] Add user controller
 - [x] Add register page
 - [x] Modify register form
 - [x] Create post register action
 - [x] Add user service with register
 - [x] Hash password
 - [x] Check rePassword
 - [x] Check if user exists
 - [x] Register user
6. Login
 - [x] Add jsonwebtoken `npm i jsonwebtoken`
 - [x] Add cookie parser `npm i cookie-parser`
 - [x] Use cookie parser middleware
 - [x] Add login view
 - [x] Add login page
 - [x] Fix login form 
 - [x] Add login post action
 - [x] Add login method to user service
 - [x] Validate user on login
 - [x] Validate password on login
 - [x] Add JWT_SECRET to global config file
 - [x] Generate jwt token
 - [x] Attach token to cookie
 - [x] Login User
 - [x] Auto login on register
7. Logout
 - [x] Add logout action
8. Authentication
 - [x] Auth middleware
 - [x] Use auth middleware
 - [x] Check if guest
 - [x] Verify token
 - [x] Handle invalid token
 - [x] Attach user to request
 - [x] Attach user data to handlebars context
9. Authorization
 - [x] Create isAuth middleware
 - [x] Create isGuest middleware
 - [x] Add route guards
10. Dynamic content
 - [x] Dynamic navigation
 - [x] Dynamic titles
11. Error Handling
 - [x] Add notification
 - [x] Error message in notification
 - [x] Add error message util
 - [x] Add error handling for register
 - [x] Persist form data in register form
 - [x] Add error handling for login
 - [x] Persist form data in login form
