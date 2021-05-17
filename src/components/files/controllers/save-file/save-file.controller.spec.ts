import * as controller from './save-file.controller';
import httpMocks from 'node-mocks-http';

import { sheet } from './../../__mocks__/files.mock';
import { dbConnect, dbDisconnect } from './../../../../config/database/mongodb';
import { File } from '../../models/file.model';

describe('Save File Controller', () => {
  const req = httpMocks.createRequest();
  const res = httpMocks.createResponse();

  beforeEach(async () => {
    jest.useFakeTimers();
  });

  beforeAll(async () => {
    await dbConnect();
  });
  afterAll(async () => {
    await dbDisconnect();
  });

  it('Must store the files objects into the db with the propper schema', async () => {
    const data = [...sheet];
    const fileOne = data[0];
    req.body.sheet = data;

    await controller.saveFileController(req, res);

    const filesInserted = await File.find();

    expect(filesInserted.length).toBe(data.length);
    expect(
      filesInserted.find((file) => file.UUID === fileOne.UUID)
    ).toBeDefined();
  });
});
