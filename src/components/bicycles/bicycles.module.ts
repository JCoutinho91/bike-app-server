import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BicyclesResolver } from './bicycles.resolver';
import { BicyclesService } from './bicycles.service';
import { Bike } from './entities/bike';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  providers: [BicyclesService, BicyclesResolver],
  exports: [BicyclesService],
})
export class BicycleModule {}
