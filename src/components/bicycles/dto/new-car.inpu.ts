import { Field, InputType, Int } from '@nestjs/graphql';
import { type } from 'os';

@InputType()
export class NewBikeInput {
  @Field()
  name: string;

  @Field((type) => Int)
  dailyPrice: number;

  @Field((type) => Int)
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
