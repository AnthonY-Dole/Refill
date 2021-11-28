import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CardsService } from './cards.service';
import { CardType } from './dto/create-cards.dto';
import { CardInput } from './input-cards.input';
import { Card } from './interfaces/card.interface'

@Resolver(of => CardType)
export class CardsResolver {
  constructor(private readonly cardsService: CardsService) {}

  @Query(returns  => [CardType])
  async cards(): Promise<CardType[]> {
    return this.cardsService.findAll();
  }

  @Mutation(returns => CardType)
  async createCard(@Args('input') input: CardInput): Promise<CardType> {
    return this.cardsService.create(input);
  }

  @Mutation(returns => CardType)
  async updateCard(
    @Args('id') id: string,
    @Args('input') input: CardInput,
  ) {
    return this.cardsService.update(id, input as Card);
  }

  @Mutation(returns  => CardType)
  async deleteCard(@Args('id') id: string) {
    return this.cardsService.delete(id);
  }

  @Query(returns => String)
  async hello() {
    return 'RefillAPP';
  }
}
