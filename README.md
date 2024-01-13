### A Next.js template

A Next.js app that uses Shadcn, Prisma ORM, MongoDB and Next auth

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdanybeltran%2Fnextjs-typescript-and-mongodb)

### Updating deps

To update deps to their latest versions, run:

```
./scripts/update-deps.sh
```

---

You need to pass an env. variable with the URI for the MongoDB connection, as well as `next-auth` env. variables:

```
MONGO_URI=
NEXTAUTH_SECRET=
GOOGLE_APP_CLIENT_ID=
GOOGLE_APP_CLIENT_SECRET=
NEXTAUTH_URL=
```

To create the `NEXTAUTH_SECRET` hash, run this in your terminal:

```
openssl rand -base64 32
```

It will generate a 44-character random string

You can also place those variables inside a `.ENV` file (don't forget to add it to your `.gitignore` file)

Related documentation:

- [`nextjs`](https://nextjs.org/docs)

- [`next-auth`](https://next-auth.js.org/getting-started/introduction)

- [`http-react`](https://http-react.netlify.app/docs)




[Live preview](https://nextjs-typescript-and-mongodb-psi.vercel.app)