import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBoolDto } from './dto/create-bool.dto';
import { UpdateBoolDto } from './dto/update-bool.dto';
import { Book, BookDocument } from './schema/bool';

@Injectable()
export class BoolService {
    constructor(@InjectModel(Book.name) private bookModel:Model<BookDocument>){}


    create(createBoolDto: CreateBoolDto):Promise<Book> {
        const model = new this.bookModel();
        model.title = createBoolDto.title;
        model.author = createBoolDto.author;
        model.published = createBoolDto.published;
        return model.save();
    }

    findAll():Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    findOne(id: string):Promise<Book>{
        return this.bookModel.findById(id).exec();
    }

    update(id: string, updateBoolDto: UpdateBoolDto) {
        return this.bookModel.updateOne({_id:id},{
            title:updateBoolDto.title,
            author:updateBoolDto.author,
            published:updateBoolDto.published
        }).exec();
    }

    remove(id: string) {
        return this.bookModel.deleteOne({_id:id}).exec()
    }
}
