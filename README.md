## NextJS setup with TS and MongoDB

**And tailwind:)**

This is something I built as I am new to NextJS, a NextJS app with its serverless backend with MongoDB. Kind of a template I can use for quickly bootstrap new NextJS projects. It also has Tailwind configured with Postcss:)

Clone/(Download as zip) this repo, then:

`npm install`

or

`yarn install`

When starting the dev server, pass an env. variable with the URI for the MongoDB connection.

`MONGO_URI="my-mongodb-uri" npm run dev`

Since serverless doesn't save variables after an api call, you need to create the connection inside each request, calling the function `connectToDatabase` that is inside utils.

And you are ready to go:)

(It has an example using Typescript with Mongoose models and in the api handlers)