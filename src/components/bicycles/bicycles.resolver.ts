import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BicyclesService } from './bicycles.service';
import { NewBikeInput } from './dto/new-car.inpu';
import { Bike } from './entities/bike';

@Resolver()
export class BicyclesResolver {
  constructor(private bicyclesService: BicyclesService) {}

  @Query((returns) => [Bike])
  public async bikes(): Promise<Bike[]> {
    return await this.bicyclesService.getAllBikes().catch((err) => {
      throw err;
    });
  }
  @Mutation((returns) => Bike)
  public async addNewBike(
    @Args('newBikeData') newBikeData: NewBikeInput,
  ): Promise<Bike> {
    return await this.bicyclesService.addBike(newBikeData).catch((err) => {
      throw err;
    });
  }
}
