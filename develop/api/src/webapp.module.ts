import { Module } from '@nestjs/common';
import { WebAppController } from 'webapp.controller';
import { WebAppHealthCheckService } from 'webAppHealthCheck.service';

import { AuthModule } from 'auth/auth.module';
import { UsersModule } from 'users/users.module';
import { CatsModule } from 'cats/cats.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CatsModule,
  ],
  controllers: [WebAppController],
  providers: [WebAppHealthCheckService],
})
export class WebAppModule { }
