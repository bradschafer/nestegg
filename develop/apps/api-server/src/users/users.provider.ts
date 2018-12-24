import { UserSchema } from './schemas/user.schema';

export const usersProviders = [
  {
    provide: 'UserModelToken',
    useFactory: mongoose => mongoose.connection.model('User', UserSchema),
    inject: ['MongooseConnectionToken'],
  },
];