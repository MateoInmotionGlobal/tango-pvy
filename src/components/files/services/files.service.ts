import { FileDTO, File } from '../models/file.model';

const saveFile = async (file: FileDTO): Promise<FileDTO> => {
  return File.create(file);
};

export { saveFile };
