import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CardsModule } from './cards/cards.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
  }),
  CardsModule,
  MongooseModule.forRoot('mongodb://localhost/graphql')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
