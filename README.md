# CarbonHub Emission Tracker
## What is CarbonHub?
CarbonHub is a responsive full-stack web application that enables teams and organisations to record and analyse their travel related carbon emissions. 

New features are actively being developed and introduced to the application, but a demo version with initial functionality can be accessed at this URL: https://damp-cove-97875.herokuapp.com/ *The site can take a few seconds to spin up as Heroku redirects resources on low traffic sites.*

Demo Account:

Email: demouser@demoemail.com *(Please do not email)*

Password: Demouser123!

## Technology Stack
The app is built with the **MERN** stack, utilising **React** on the front-end, **Redux** for state management, **Express.js** and **Node.js** for the server and **MongoDB** for the database. 

The app is hosted on **Heroku** and setup for deployment using **Git** and the **Heroku CLI**. 

The app makes use of **Reactstrap** components (in addition to custom components), **Chart.js** for interactive charts and graphs, **JSON Web Tokens** for user authentication and **bcrypt.js** for password hashing.

## Current Functionality
- User registration and authentication with protected API routes
- Team emission dashboard with a chart displaying monthly group emissions
- Emission activity log with pagination
- Add emission activity modal with validation
- Delete emission activity modal

## Planned Features / Code Enhancements
- Addition of unit / end-to-end tests
- Personal emission dashboard
- Additional charts / graphs for further data visualisation and analysis e.g. distance, transport types
- The app is currently running as a demo for a single organisation instance (multi-instance architecture). I would like to redesign the app to make use of multi-tenant architecture, so that multiple organisations can login using the same URL and portal.

## Bugs / Issues
- The emission table pagination requires a maximum page limit adding, if the activity log data becomes very large the pagination pages will continue to increase

## Accessibility
To help identify Web Content Accessibility Guideline (WCAG) errors and ensure the app is compliant with modern accessibility standards, the WAVE Web Accessibility Evaluation Tool was used on each page as well as the modals. An example of this is shown below for the emission dashboard.

![WAVE analysis](https://user-images.githubusercontent.com/55451298/110325917-dddc5000-800f-11eb-8937-b92c84314c69.png)

## Screenshots
![CarbonHub Login](https://user-images.githubusercontent.com/55451298/110214037-a13b1800-7e9a-11eb-8863-81bed689fc8a.png)
![CarbonHub Dashboard 1](https://user-images.githubusercontent.com/55451298/110214036-a0a28180-7e9a-11eb-99d6-13812d2aa181.png)
![CarbonHub Dashboard 2](https://user-images.githubusercontent.com/55451298/110214034-a009eb00-7e9a-11eb-8477-3d3447024533.png)
![CarbonHub Dashboard Mobile](https://user-images.githubusercontent.com/55451298/110214031-9e402780-7e9a-11eb-8a06-cc559ff9bb64.png)
