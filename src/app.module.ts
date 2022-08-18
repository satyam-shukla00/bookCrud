import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BoolModule } from './bool/bool.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal:true,
        envFilePath:[".local.env"]
    }),
    MongooseModule.forRootAsync({
        imports:[ConfigModule],
        useFactory:(ConfigService:ConfigService)=>({uri:ConfigService.get("MONGODB_URL")}),
        inject:[ConfigService]
    }),
    BoolModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
