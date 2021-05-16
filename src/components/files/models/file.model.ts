import { Schema, Model, model } from 'mongoose';
import { Document } from 'mongoose';
export interface FileDTO extends Document {
  name: string;
  active: boolean;
}

const fileSchema: Schema = new Schema(
  {
    UUID: { type: String, required: true },
    VIM: { type: String, default: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    mileage: { type: Number, required: true },
    price: { type: Number, required: true },
    zip_code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const file: Model<FileDTO> = model('file', fileSchema);
