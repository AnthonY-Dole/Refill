import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardType } from './dto/create-cards.dto';
import { Card } from './interfaces/card.interface';
import { CardInput } from './input-cards.input';

@Injectable()
export class CardsService {
  constructor(@InjectModel('Card') private cardModel: Model<Card>) {}

  async create(createCardDto: CardInput): Promise<CardType> {
    const createdCard = new this.cardModel(createCardDto);
    return await createdCard.save() as any;
  }

  async findAll(): Promise<CardType[]> {
    return await this.cardModel.find().exec();
  }

  async findOne(id: string): Promise<CardType> {
    return await this.cardModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<CardType> {
    return await this.cardModel.findByIdAndRemove(id);
  }

  async deleteAll(): Promise<CardType> {
    return await this.cardModel.remove();
  }

  async update(id: string, Card: Card): Promise<CardType> {
    return await this.cardModel.findByIdAndUpdate(id, Card, { new: true });
  }
}
