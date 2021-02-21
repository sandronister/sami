import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sami'),
    BeneficiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
