import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './entities/bike';

@Injectable()
export class BicyclesService {
  constructor(
    @InjectRepository(Bike) private bikeRepository: Repository<Bike>,
  ) {}
  public async getAllBikes(): Promise<Bike[]> {
    return await this.bikeRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
}
