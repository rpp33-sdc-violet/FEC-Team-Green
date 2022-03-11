# FEC-Team-Green
  In Project Atelier, we revamp a client-facing retail website. We provide it with its own server and a React based, single page app that is interactive and responsive.

  ## Table of Contents
  1. <a href='#description'> Description</a>

  2. <a href='#installation'> Installation</a>

  3. <a href='#usage'> Usage</a>

  4. <a href='#project-widgets'> Project Widgets</a>

  5. <a href='#team-members'> Team Members</a>


---
 ## Description
  We have a cohesive, visualy appealing, and user-friendly website using industry standard practices. Our project includes four main areas of interest in the following order:

  - <a href='#product-overview'> Product Overview</a> -created by Chloe Meinshausen.
  - <a href='#questions-and-answers'> Questions and Answers</a>  -created by Joann Whang
  - <a href='#ratings-and-reviews'> Ratings and Reviews</a> -created by Wen Dai

---
  ## Installation
  To run our project:
  1. clone the project
  2. run  `npm install` to install all dependencies
  3. please generate a Github API key and place it in `/server/.env` as
```
GITHUB_API_KEY=<your key>
```
  *EXAMPLE:*
```
GITHUB_API_KEY=123Jkldsufihflka32484r703utirjk
```
  *If you are using AWS, please place pertinent information in the .env file as well.*

  4. make sure that your .gitignore file contains:
```
## ENVIRONMENT KEYS ##
.env
```
  5. run  `npm run build-dev` to compile our source files in development mode | run  `npm run build-prod` to compile our source files in production mode
  6. run  `npm start`  to start our server and serve our client facing app.

  *  please review our **package-lock.json** file for the most updated list of dependencies

---
  ## Usage
  This is our Front End Capstone project designed to demonstrate our front end skills and knowledge as software engineers.

---
 ## Project Widgets
---
  ### Product Overview
* TBD
---
  ### Questions and Answers
* This feature displays any questions associated with this product along with any anwsers associated with each question. The user is able to load more questions (2 at a time) using the "More Answered Questions" button which will disappear if there are no more questions. They are also able to load the rest of the answers by clicking the "Load More Answers" text and only show 2 answers by clicking the "Collapse Answers" text. 
* The search bar allows the user to filter the questions according to their search query of three or more characters. 
* The user is able indicate if a question or answer is helpful once. They are also able report an answer once.
* A modal window appears when the "Add a Question +" button is clicked. The user is able to add a question about the product.
* A modal window appears when the "Add Answer" link is clicked. The user is able to add an answer for a particular question with the option to include photos.

---
  ### Ratings and  Reviews
* TBD

---
  ## Team Members

  * Christian Ortiz
  * Wen Dai
  * Joann Whang
  * Chloe Meinshausen
