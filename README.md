POKEGEMS

Project Description
The purpose of my application is to provide a precise and impartial catalog of average sold prices for each Pokemon card at the highest tier for collectors seeking price comparisons at the top quality margin. Many catalogs available on the internet do not provide reasonable prices and may be influenced by biased market manipulation. As a collector with 23 years of experience, my goal is to offer a fair and dependable resource for all Pokemon card enthusiasts, enabling them to make informed decisions when buying or selling High quality Pokemon cards.

User Stories

-As a user, I will see an index page that displays a comprehensive list of all the available Pokemon TCG sets to choose from for browsing.
-As a user, I will have the ability to view and select from a list of the best cards available within a specific Pokemon TCG set.
-As a user, upon selecting a card from the list of the best cards available within a specific Pokemon TCG set, I will be able to view the card's details and obtain a fair price range for near-mint to mint condition raw cards, as well as top grades from the two most reputable card grading companies in the industry, PSA and Beckett.

MVP Goals

-full-stack application built by the user using Node.js, Mongoose, Express, and EJS with adherence to the MVC file structure.
-The application must include at least one model with all 7 RESTful routes and full CRUD, stored in a separate git repository with daily GitHub commits
-includes a README.md file including explanations of the technologies used, user stories, wireframes, and a link to the hosted working app.


  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  cardImg: {
    type: String,
    required:true,
  },
  price: {
    type: String,
    required: false,
  },
  series: {
    type: String,
    required: true,
  },
});

pokegems
pokegems/controllers/pokegems.js 
pokegems/controllers/users.js
pokegems/models/pokegem.js
pokegems/models/users.js
pokegems/node_modules
pokegems/pokemon API
pokegems/views/users
pokegems/views/users/register.ejs
pokegems/views/users/signin.ejs
pokegems/views/edit.ejs
pokegems/views/index.ejs
pokegems/views/new.ejs
pokegems/views/show.ejs
pokegems/server.js


<img width="1060" alt="Screenshot 2023-03-18 at 7 28 47 AM" src="https://user-images.githubusercontent.com/72536656/226112253-40206e02-dc4f-475d-8142-0f643c627078.png">
<img width="497" alt="Screenshot 2023-03-18 at 7 29 45 AM" src="https://user-images.githubusercontent.com/72536656/226112305-d0a4dfe3-4f8e-4482-b694-b5975111576c.png">
<img width="370" alt="Screenshot 2023-03-18 at 7 30 09 AM" src="https://user-images.githubusercontent.com/72536656/226112326-a098303c-3604-46a2-8940-2079bae90bc8.png">
<img width="527" alt="Screenshot 2023-03-18 at 7 30 26 AM" src="https://user-images.githubusercontent.com/72536656/226112349-dc7d4bc9-b3ba-41e3-877d-d8b80240a666.png">


