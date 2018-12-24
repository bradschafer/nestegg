import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CommonModule } from '../common/common.module';
import { catsProviders } from './cats.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CommonModule],
  controllers: [CatsController],
  providers: [CatsService, ...catsProviders],
})
export class CatsModule {}
