### Next.js with TypeScript, MongoDB, HttpReact, TailwindCSS and DaisyUI

A Next.js app with a serverless backend using MongoDB. A template that can be uses to quickly bootstrap new Next.js project. It also has Tailwind configured with Postcss and DaisyUI

Clone/(Download as zip) this repo, then:

`npm install`

or

`yarn install`

When starting the dev server, pass an env. variable with the URI for the MongoDB connection.

`MONGO_URI="my-mongodb-uri" npm run dev`

You can also place that variable inside a `.ENV` file (don't forget to add it to your `.gitignore` file)

Since serverless doesn't save variables after an api call, you need to create the connection inside each request if it's not created yet, you can do this by calling the function `connectToDatabase` that is inside utils.

And you are ready to go:)

(It has an example using Typescript with Mongoose models in the api handlers).

---

I created three of the libraries used in this project:

[`http-react`](https://http-react.netlify.app/): React hooks for Data fetching
[`react-kuh`](https://www.npmjs.com/package/react-kuh): TypeScript-ready React (kinda) useful hooks
[`next-api-validation`](https://www.npmjs.com/package/next-api-validation): Validate HTTP requests inside Next.js API endpoints


[Live preview](https://nextjs-typescript-and-mongodb-psi.vercel.app)