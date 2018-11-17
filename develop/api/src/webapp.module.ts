import { Module } from '@nestjs/common';
import { WebAppController } from 'webapp.controller';
import { WebAppHealthCheckService } from 'webAppHealthCheck.service';

import { EventsModule } from './events/events.module';
import { UsersModule } from 'users/users.module';
import { CatsModule } from 'cats/cats.module';


@Module({
  imports: [
    EventsModule,
    CatsModule,
    UsersModule,
  ],
  controllers: [WebAppController],
  providers: [WebAppHealthCheckService],
})
export class WebAppModule { }
