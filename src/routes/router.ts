import { Application, Router } from 'express';
import filesRouter from '../components/files/files.router';

export const init = (app: Application): void => {
  const router: Router = Router();

  router.use('/files', filesRouter);

  app.use('/api', router);
};
