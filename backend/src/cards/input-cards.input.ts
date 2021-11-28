import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CardInput {
  @Field()
  readonly name: string;

  @Field()
  readonly date: string;

  @Field(() => Int)
  readonly activationCode: number;

  @Field()
  readonly color: string;

  @Field()
  readonly credit: string;
}
