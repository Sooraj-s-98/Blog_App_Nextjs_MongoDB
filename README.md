

<h1 align="center"> Blog App ❤️(Next.js + MongoDB)</h1></h1>


<div align="center">

:rocket: [Check out the demo](https://m-dev-tau.vercel.app/) :rocket:
  
  </div>
<h3 align="start">Add MongoDB Atlas Search</h3>

Add MongoDB atlas index search  See [this](https://docs.atlas.mongodb.com/atlas-search/).
![mongosea](https://user-images.githubusercontent.com/52352285/153125339-46e3238f-5c19-4feb-8f64-4d6af850443e.png)



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


<h2 align="start">Guide</h2>

<h3 align="start">:lock: Authentication and Account</h3>

<div align="start">

- [x] Session-based authentication ([Passport.js](https://github.com/jaredhanson/passport))
- [x] Sign up/Log in/Sign out API
- [x] Authentication via email/password
- [ ] Authentication via OAuth (Google, Facebook, etc.)
- [x] Email verification
- [x] Password change
- [x] Password reset via email

</div>

<h3 align="start">:woman::man: Profile</h3>

<div align="start">

- [x] Profile picture, username, name, bio, email
- [x] Update user profile

</div>

<h3 align="start">:eyes: Social</h3>

<div align="start">

- [x] View others' profiles
- [x] Posts and comments
- [x] Search posts

</div>



