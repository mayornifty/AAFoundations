import { Module } from '@nestjs/common';
import { MedicalController } from './medical.controller';
import { MedicalService } from './medical.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Medical, MedicalSchema } from './schemas/medical.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Medical.name, schema: MedicalSchema }]),
  ],
  controllers: [MedicalController],
  providers: [MedicalService],
})
export class MedicalModule {}
