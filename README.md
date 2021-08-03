# Freshly Fetched

Freshly Fetched was a Mod 3 group project in the Front End program at the [Turing School of Software and Design](https://turing.io/). The assignment was to build out a multi-page application using [React](https://reactjs.org/), [Router](https://reactrouter.com/), and an additional technology of our choosing that we would not be receiving instruction on. We chose [TypeScript](https://www.typescriptlang.org/)! All of our user acceptance criteria was tested using [Cypress](https://www.cypress.io/).

The project spec can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html).

Our project is deployed [here](https://freshly-fetched.netlify.app/).

## Install

1. Clone down this repository `git clone https://github.com/Meekb/freshest-app`
2. CD into your local clone `cd freshest-app`
3. Install project dependencies `npm install`
4. Run `npm start`
5. Open `http://localhost:3000/` in your preferred browser

## Features

![User flow visiting the site and searching for markets within 15 miles of 90210](https://user-images.githubusercontent.com/79113236/127939612-74709b8b-4dec-476c-98f4-23c73394f469.gif)
* User flow visiting the site and searching for markets within 15 miles of 90210

![User flow showing filter by day functionality, a user searches for markets on Tuesday](https://user-images.githubusercontent.com/79113236/127939722-d1f77eb6-e378-4a8e-af0a-df88af96ad7c.gif)
* User flow showing filter by day functionality, a user searches for markets on Tuesday

![User tries to input bad zip and gets error message](https://user-images.githubusercontent.com/79113236/127943682-b56b108e-54ec-48f9-b9b6-f24fad164228.gif)
* User tries to input bad zip and gets error message

![User clicking on a card and viewing details](https://user-images.githubusercontent.com/79113236/127943853-a3b85422-3266-4527-ad5c-f0f639bd5253.gif)
* User clicking on a card and viewing details

## Contributors

This application was built by [Ash O'Brien](https://github.com/AshleyOh-bit), [Beth Meeker](https://github.com/Meekb), [Claire Fields](https://github.com/clairefields15), and [Alex Kio](https://github.com/alexmkio/); Front End Engineering, Mod 3 students at the [Turing School of Software and Design](https://turing.io/).

## Technologies Used

This application was built using the [React](https://reactjs.org/) javascript framework with the [TypeScript](https://www.typescriptlang.org/) superset. [Router](https://reactrouter.com/) was used for multi-page functionality. [Cypress](https://www.cypress.io/) was used for testing. GitHub and Git were used for version control and collaboration. HTTP Request is being used to Get inside of an async await function.

## The Evolution of the Project

We started this project by creating a living ["DTR document"](https://docs.google.com/document/d/1D9hS2gDg9vJs3ZqQWIU51EeSJ721vItyTz-j72Za_mU/edit#heading=h.6r7y3guy9gso) in which we discussed each other's learning goals, preferred working style, personal schedules, communication preferences, etc. We moved on to digest the [project spec and rubric](https://frontend.turing.edu/projects/module-3/stretch.html), and started exploring APIs brainstorming about the potential problems we could solve with each. We settled on [this wretched Farmers' Market API](https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html) provided by the USDA. We then conducted research on similar applications and established our [wireframes](https://miro.com/app/board/o9J_l5OWQ6g=/). We created this GitHub repo and initialized it with a [PR template](https://github.com/Meekb/freshest-app/blob/main/pull_request_template.md) and a [project board](https://github.com/Meekb/freshest-app/projects/1). We used [Google Docs](https://docs.google.com/document/d/18v-D7t7S92gWoUL19NvGLPDcDYorl9NXbdTqHXONo4Q/edit#heading=h.gsvlk44bqe01) to outline our initial thoughts and project iterations and turned all of our user acceptance criteria into project issues. We spent the next two days independently studying [TypeScript](https://www.typescriptlang.org/) before reconvening to discuss our findings and begin issue assignment. We checked-in as a group daily as we chipped away at this project.

## Team Member Reflections

### Ash
Typescript took a full two and a half days to learn, and came with a caveat: to use Typescript in React, it is advised to also use hooks. Undaunted, we built out an initial architecture as a team, before revising it to accommodate Router and facilitate the data movement we needed.

When we had a solid architecture functioning, we realized the API had some quirks. One endpoint only returned 200s, and the data shared between endpoints was scant and difficult to manipulate. Overall, this API caused us a great deal of time with data cleaning and error handling.

Finishing this project, I have a working understanding of Typescript, and a deeper understanding of React, Router, and error handling on the whole.  In the future, I will be testing my API with more gusto, and planning the architecture of the app accordingly.

### Beth
This project exemplified issues that can be encountered when api structure doesn’t match expectations. We had to do a lot of cleaning of data, and had to jump through quite a few hoops to consolidate the data we needed at first fetch. Additionally learning a new language - TypeScript - in such a short period of time was heavy lifting in the first handful of days and continued to be a challenge throughout as we learned how to utilize TS within React.

### Claire
While it seemed like a slow start initially, spending 3 days up front to watch tutorials, play in sandboxes, and learn TypeScript (and Hooks!) really paid off in the end.  Once we started coding, I didn't feel that TS was a big lift compared to JS. I am proud that in the refactoring stage, I was able to move all the component's interfaces into a types file using imports/exports and see opportunities to improve my TS flow next time.  This was the largest group project we had been a part of up to this point and we wanted to try a rebase workflow for the first time, which was maybe not the best choice in hindsight. I am glad we got some exposure to a new workflow but it led to a lot of group zoom calls sorting through merge conflicts. As others will surely mention, our API was the biggest hurdle. We had never worked with an API that did not return 404 errors for failed fetches, nor had we worked with one where the data returned was so poorly formatted, with so much information missing in some cases. Our data cleaning and error handling became much more involved than we had expected. Now I have a much better idea of what to test before committing to using an API.

### Alex
I knew going into this project that, per the usual, we were going to encounter many unforeseen difficulties along the way, but knew that if we trusted in the process and habits that have been taught up to this point that success was likely. We prioritized each other’s learning goals and committed ourselves to organization and process, and spent two days learning and playing with TypeScript before even starting to code. From there, we tackled this project with fairly consistent communication and support for one another, and found ourselves learning a litany of new things along the way.