import { Module } from '@nestjs/common';
import { BicycleModule } from './bicycles/bicycles.module';

@Module({
  imports: [BicycleModule],
})
export class ComponentsModule {}
