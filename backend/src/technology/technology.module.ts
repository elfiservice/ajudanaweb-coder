import { Module } from '@nestjs/common';
import { TechnologyController } from './technology.controller';

@Module({
  controllers: [TechnologyController]
})
export class TechnologyModule {}
