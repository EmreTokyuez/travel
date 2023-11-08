This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) hosted on Cloudflare Pages [here](https://travelapp.emrebox.work).

## Getting Started locally

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Showcase
See the website for yourself [here](https://travelapp.emrebox.work)
### Idea
The idea for this project came after I got a bike and wanted to some tours with nice views. I had discovered the service [komoot](https://komoot.com) where users have uploaded routes with attached pictures and statistics. I really liked the idea of using routes that other users have taken, reviewed and maybe even warned about dangerous spots. 
When I wanted to plan some holidays, which I rarely do, I noticed a lack of a similar service for travels. Travel routes with different cities or countries to visit and things to see. No long research needed, just find a good tour or combine several of them to fit your needs and budget and just worry about finding local hotels in the cities.
![Komoot](https://github.com/EmreTokyuez/travel/blob/main/images/komoot.png)

### Database
For the database [Supabase](https://supabase.com) was used as it provides a generous free tier for a PostgreSQL database with built-in authentication, storage and serverless functions. It is also open-source and self-hostable and I want to use products that offer me that flexibility.
The auth integration also sets up email-verification, email-password-reset and magic-links. One can also set up OAuth with providers such as Google, Github, Facebook and much more.
![Database Schema](https://github.com/EmreTokyuez/travel/blob/main/images/supabase.png)

### Frameworks, Tools
For building the application, the full-stack framework [NextJS](https://nextjs.org/) to provide server-side-rendering and enable efficient caching. For deployments, a connection between my Github Repository and [Cloudflare Pages](https://pages.cloudflare.com/) was created so that when a commit in "main" happens, a new deployment starts with the newest version. Branching was used to reduce the chances of ruining the live version of the application. Merges were checked using [Github Actions](https://docs.github.com/en/actions) and running workflows that were found in the Github Actions marketplace.
For the frontend, [TailwindCSS](https://tailwindcss.com/) was used in combination with [React](https://react.dev/).
### Tests
- **Login verification:** Email and password gets checked and an error response appears if the credentials don't match.
- **Email Verification:**
Sending of verification email works, the link in the email leads to localhost in the production instance. 
- **Email Password-reset:** Email arrives, same issue es before.
- **Google Sign-Up:** Doesn't work, redirect URL is wrong (fixed but takes a while to be live).
 ![Google](https://github.com/EmreTokyuez/travel/blob/main/images/google.png)

### Result
- Startpage:
![Startpage](https://github.com/EmreTokyuez/travel/blob/main/images/startpage.png)

- Users can login (though the website doesn't register that info):
![Login](https://github.com/EmreTokyuez/travel/blob/main/images/signin.png)

- Users can register:
![SignUp](https://github.com/EmreTokyuez/travel/blob/main/images/signup.png)

![SignUp2](https://github.com/EmreTokyuez/travel/blob/main/images/email.png)
  
- Error if login info is wrong:
  
![False Credentials](https://github.com/EmreTokyuez/travel/blob/main/images/invalid.png)

- User can reset password:
![Reset](https://github.com/EmreTokyuez/travel/blob/main/images/reset.png)

![Reset](https://github.com/EmreTokyuez/travel/blob/main/images/reset2.png)

- Layout exists for the travel view:
![Travel View](https://github.com/EmreTokyuez/travel/blob/main/images/travels.png)

### Reflections
This was an interesting journey where a lot of new tools were introduced into my workflow. These tools seem to offer amazing functionality and could potentially enhance the developer experience but every tool needs a lot of time to master. By introducing so many tools at once and trying to build a functioning, simple application, I was easily overwhelmed and found it hard to find a good tutorial as apparently everything javascript related becomes outdated every 6 months.
I will continue using these tools and will try to master one by one to create a functioning web application in the next quarter.
The experience was interesting and quite different from what I was used to (CLI Java and COBOL).