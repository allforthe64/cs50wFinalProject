# cs50wFinalProject

Course’s Link:
	See here:

Requirements:
In this project, you are asked to build a web application of your own. The nature of the application is up to you, subject to a few requirements:
Your web application must be sufficiently distinct from the other projects in this course (and, in addition, may not be based on the old CS50W Pizza project), and more complex than those.
A project that appears to be a social network is a priori deemed by the staff to be indistinct from Project 4, and should not be submitted; it will be rejected.
A project that appears to be an e-commerce site is strongly suspected to be indistinct from Project 2, and your README.md file should be very clear as to why it’s not. Failing that, it should not be submitted; it will be rejected.
Your web application must utilize Django (including at least one model) on the back-end and JavaScript on the front-end.
Your web application must be mobile-responsive.
Final Project:
My final project is a video game review website. Users can go to the website and view a variety of content, including videos, articles, and photos. Users can also use an interactive map view to follow a gameplay sequence, as well as find information about assets in the game using the site’s mini encyclopedia.
 
Installation
Install project dependencies by running pip install -r requirements.txt. The main library required is Django.
Make and apply migrations by running python manage.py makemigrations and python manage.py migrate.
Go to the website and explore!
 
Files and directories
TSW2 - main application directory
Static/TSW2 - Contains all static content for the application
Styles.css - Contains all of the styling code for the application
Entry.Js - contains Javascript for creating a new compendium entry (e.g. calling the API using fetch)
Showcase.Js - Javascript for manipulating the icons on the interactive map in the gameplay showcase page
Spotlight.Js - Javascript for swapping out the location articles on the location spotlights page
Compendium.js - Code for displaying already existing entries on the compendium page
Templates/TSW2
Layout.html - Holds the basic html that gets extended to the other webpages. Also contains bootstrap JS and CSS imports.
Index.html - Contains the HTML code for the homepage of the website
Comparison.html - HTML code for the gameplay vs reality comparison page 
Spotlights.html - Holds the HTML code for the location spotlights page. Uses the Spotlight.Js file
Compendium.html - Contains the code for the website’s mini encyclopedia/compendium. Uses Entry.Js and Compendium.Js
Showcase.html - Holds the HTML code for the gameplay showcase page. Uses Showcase.Js  
Admin.py - Registration with Django admin for the three models I used with my website
Models.py - Contains the three models I used with the site: Loco, Passenger, and Freight 
Urls.py - All of the routes associated with the site 
Views.py - Contains all of the functions associated with the website routes. Also holds the API that is used with the compendium
finalProject - Project directory

Implementation
Below is an explanation of how the code works for the web pages with noteworthy features.

Location spotlights page 
For the Location Spotlights page on the website, I started out by building a container in the center of the screen to hold the articles. I then added a mini navbar to the top of the container, and gave each of the buttons an event listener. When one of the buttons is clicked, the event listener is triggered, which hides the article currently displayed and displays the location article that corresponds with the selected button. This is done by wrapping each article in a div and then turning the div’s display setting on or off using Javascript.
Facts compendium page
For the facts compendium page, I first started out by splitting all of the entries into three possible categories: Locomotives, freight cars, and passenger cars. These categories correspond with the three models that exist for the website: Loco, Freight, and Passenger. I then built another mini navbar and had an event listener wait for the buttons to be pressed. When a button is pressed, the Js file Compendium.Js queries the database for all entries that match the button that was clicked. It then takes that list of entries as a JSON object and generates a new compendium entry for each item in the JSON list. That entry displays facts about the locomotive, freight car, or passenger car, all pulled from the database. All html elements for the entries are generated dynamically using Js.
To add a new entry, a user can fill out a form at the bottom of the window. When the form is submitted, the site’s API is queried by Entry.Js and a new entry is added to the database. An alert is displayed to the user that a new entry is created and the user can click on the category they added the entry to to see the data displayed on the site.
Gameplay spotlight page
The gameplay spotlight page features an interactive map and an image carousel. The map matches the real life route taken by trains in the game being reviewed, and the image carousel contains video clips of trains passing through locations featured on the map. To build the image carousel, I used the bootstrap image carousel template and styled it using custom CSS. I then replaced the images within the carousel with Iframe tags to hold YouTube video clips. 
I built the map using a scaled down Google Maps image and Javascript. Positioned over locations on the map are points that change color depending on what video clip is displayed on the image carousel. In Showcase.js, I set up an index variable that changes based on what video clip is being displayed. I then query the page for the dot whose id matches the index variable and set its background color to red. Finally, all the other dots are set to grey.

Distinctiveness and Complexity:

My project is an example of a website that could very likely be produced in the real world. During the course, we mostly focused on building applications with robust backend code, and with my review website I got to show what I am capable of producing on the front end side of things. While the backend is not very complex (just a simple API and web routes), the front end features some more complicated visuals and Javascript compared to what was focused on during the course. 

My website also features some advanced HTML and CSS, demonstrating my grasp of both of those fields. Additionally, I developed some robust Javascript features that help give my website interesting features and visual appeal. Finally, much of my website features media. When developing my website, I built it as though it would eventually be deployed to a production server. Because of this, I had to figure out a way to remotely link all of the media featured on the webpage. In my case, I hosted static images on a free WordPress website and my videos on my YouTube channel. For these reasons, I believe my project satisfies the distinctiveness and complexity requirements.
