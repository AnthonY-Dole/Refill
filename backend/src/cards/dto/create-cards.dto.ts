import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class CardType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly date: string;

  @Field(() => Int)
  @IsNumber()
  readonly activationCode: number;

  @Field()
  @IsString()
  readonly color: string;

  @Field()
  @IsString()
  readonly credit: string;
}
