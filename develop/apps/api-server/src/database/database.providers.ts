import * as mongoose from 'mongoose';
import { ConfigService } from '../common/services/config.service';

const configService = new ConfigService();

export const databaseProviders = [
  {
    provide: 'MongooseConnectionToken',
    useFactory: async (): Promise<typeof mongoose> => await mongoose.connect(configService.mongoConnectionUri, { useNewUrlParser: true }, (err) => {
      if(err){
        console.log(err);
        process.exit(1);
      }
    }),
  },
];
