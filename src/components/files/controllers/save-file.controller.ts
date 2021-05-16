import { FileDTO } from './../models/file.model';
import { Request, Response } from 'express';
import * as fileService from '../services/files.service';
import { startSession } from 'mongoose';

export const saveFileController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await insertFiles(req.body.sheet);
    res.status(201).send({ messaje: 'File uploaded' });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const insertFiles = async (files: FileDTO[]): Promise<void> => {
  const session = await startSession();
  await session.withTransaction(async (): Promise<void> => {
    for (const file of files) {
      await fileService
        .saveFile(file)
        .then((created) => console.log('created', created._id));
    }
  });
  session.endSession();
};
