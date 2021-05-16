import { Request, Response } from 'express';
import * as fileService from '../services/files.service';

export const saveFileController = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send(req.body);
};
