# Nodejs Back end challenge Mateo Villa

This is a TS NodeJS API that allows users to upload **.csv** files and stores the data into an in-memory MongoDB database.

This is a component structure architecture that allows developers to add new components to a specific route without effect any other component. This project has only one component called **files**

## Project Structure

```sh
.
├── app.ts // setup express application
├── server.ts // creates HTTP server
├── app.ts // connects to the DB and uses app.ts and server.ts to run the application
├── package.json //
├── routes
│   ├── index.ts
├── shared // contains files that can be used by different controllers
├── config
│   ├── database.ts
        ├── mongodb.ts // connects to MongoDB and clean up the databases when disconnecting
└── components
    └── files
        ├── __mocks__ // files for unit testing
        ├── controllers // responsible to receive the req and return the response
        └── services // strong logic and DB interactions
        └── models // schemas and dtos used for the component
        └── files.router.ts // exports the specific routes for the controllers in the component
```


To run the project open a terminal and type 
```
npm run dev
```

To run the unit tests type 
```
npm run test:dev
```