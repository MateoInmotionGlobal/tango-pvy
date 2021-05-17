import { Application, Request, Response, Router } from 'express';
import filesRouter from '../components/files/files.router';

export const init = (app: Application): void => {
  const router: Router = Router();

  router.use('/files', filesRouter);

  router.use((req: Request, res: Response) => {
    res.status(404).send('Route not found');
  });

  app.use('/api', router);
};
