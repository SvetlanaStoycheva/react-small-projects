19. Stock photos

- gitting images from unsplash Api: https://unsplash.com/documentation;
- working with an access key  
  Cra env vars: https://create-react-app.dev/docs/adding-custom-environment-variables/
  1. create .env file in the root (side by side with package.json)
  2. in the .env file: REACT_APP_ACCESS_KEY=
  3. use it in useFetch or wherever is needed like this:  
     {process.env.REACT_APP_ACCESS_KEY}
  4. add .env file to gitignore
  5. restart the dev server (ctr C and npm start)
- infinite scroll, input search form, link to the photo creater
