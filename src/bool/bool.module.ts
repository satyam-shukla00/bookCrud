import { Module } from '@nestjs/common';
import { BoolService } from './bool.service';
import { BoolController } from './bool.controller';
import { Book, BookSchema } from './schema/bool';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forFeature([{name:Book.name,schema:BookSchema}])],        
    controllers: [BoolController],
    providers: [BoolService]
})
export class BoolModule {}
