[![Next.js](https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png)](https://nextjs.org)

<h1 align="center"> Blog App ❤️(Next.js + MongoDB)</h1></h1>


<h3 align="start">Environmental variables</h3>

Environmental variables in this project include:

- `MONGODB_URI` The MongoDB Connection String (with credentials and database name)
- `WEB_URI` The _URL_ of your web app.
- `CLOUDINARY_URL` (optional, Cloudinary **only**) Cloudinary environment variable for configuration. See [this](https://cloudinary.com/documentation/node_integration#configuration).
- `NODEMAILER_CONFIG` (optional, if using nodemailer **only**) JSON stringified nodemailer config. eg. `{"service":"Gmail","auth":{"user":"sooraj@gmail.com","pass":"sgbxGJjklmYunbbcGHJaSDROpLKg"}}`

<h3 align="start">Development</h3>

Start the development server by running `yarn dev` or `npm run dev`. Getting started by create a `.env.local` file with the above variables. See [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables).

<h2 align="start">Deployment</h2>

This project can be deployed [anywhere Next.js can be deployed](https://nextjs.org/docs/deployment). Make sure to set the environment variables using the options provided by your cloud/hosting providers.

After building using `npm run build`, simply start the server using `npm run start`.

You can also deploy this with serverless providers given the correct setup.

<h2 align="start">Contributing</h2>

<div align="start">
  
Please see my [contributing.md](CONTRIBUTING.md).

</div>

<h2 align="start">
  License
</h2>

<div align="start">
  
  [MIT](LICENSE)
  
</div>
