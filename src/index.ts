import * as database from './config/database/mongodb';
import server from './server';
import dotenv from 'dotenv';
dotenv.config();

database
  .dbConnect()
  .then(() => {
    server.listen(process.env.PORT || 3000, () => {
      console.log(`[App]: Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err: any) => {
    database.dbDisconnect();
    console.log(err);
  });
