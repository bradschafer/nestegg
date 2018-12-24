import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly roles?: string[];
  readonly teams?: string[];
  password: string;
}
