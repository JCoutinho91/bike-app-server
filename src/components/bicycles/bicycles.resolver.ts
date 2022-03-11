import { Query, Resolver } from '@nestjs/graphql';
import { BicyclesService } from './bicycles.service';
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
}
