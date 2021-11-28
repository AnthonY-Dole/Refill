import { Module } from '@nestjs/common';
import { CardsResolver } from './cards.resolver';
import { CardSchema } from './card.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsService } from './cards.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }])],
    providers: [CardsResolver, CardsService],
})
export class CardsModule {}
