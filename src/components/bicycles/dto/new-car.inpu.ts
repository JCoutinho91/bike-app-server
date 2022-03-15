import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewBikeInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(100)
  @Min(1)
  dailyPrice: number;

  @Field((type) => Int)
  @Max(1000)
  @Min(10)
  monthlyPrice: number;

  @Field()
  fabrication: string;

  @Field()
  size: string;

  @Field()
  year: number;

  @Field()
  thumbnailSrc: string;
}
