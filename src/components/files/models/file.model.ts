import { Document, Model, model, Schema } from 'mongoose';
export interface FileDTO extends Document {
  UUID: string;
  VIM: string;
  make: string;
  file_model: string;
  mileage: number;
  price: string;
  zip_code: string;
}

const fileSchema: Schema = new Schema(
  {
    UUID: { type: String, required: true },
    VIM: { type: String, default: true },
    make: { type: String, required: true },
    file_model: { type: String, required: true },
    mileage: { type: Number, required: true },
    price: { type: Number, required: true },
    zip_code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const File: Model<FileDTO> = model('file', fileSchema);
