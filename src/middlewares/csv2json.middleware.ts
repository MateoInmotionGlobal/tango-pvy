import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import xlsx from 'node-xlsx';
import { WorkSheets } from '../shared/Sheet.model';

export const csv2jsonM = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.files);
    
    if (!req.files) {
      res.status(400).send({ message: 'Bad request: You must add a csv file' });
    }
    const sheet = sheetDataToJsonArray(req);
    req.body.sheet = sheet;
    return next();
  } catch (err) {
    res.status(400).send({ message: 'Bad request' });
  }
};

const sheetDataToJsonArray = (req: Request): any[] => {
  const file = req.files?.file as UploadedFile;
  const rows: any[] = parseFileToObject(file).data;
  const columns = rows[0];
  return rows.slice(1).map((row) => mapSheetToJson(columns, row));
};

const parseFileToObject = (file: UploadedFile): WorkSheets => {
  const sheet = xlsx.parse(file.data)[0];
  sheet.data = sheet.data.filter((sheet) => !!sheet.length);
  return sheet;
};

const mapSheetToJson = (columns: string[], row: any[]): any => {
  const res: any = {};
  columns.forEach((column: string, i: number) => {
    res[column] = row[i];
  });
  return res;
};
