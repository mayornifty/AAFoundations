import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MedicalService } from './medical.service';
import { CreateMedicalDto, UpdateMedicalDto } from './dto';

@Controller('api/medical-records')
export class MedicalController {
  constructor(private readonly medicalService: MedicalService) {}

  @Get()
  getAllMedicals() {
    return this.medicalService.getAllMedicals();
  }

  @Get(':id')
  getMedical(@Param('id') id: string) {
    return this.medicalService.getMedical(id);
  }

  @Post()
  createMedical(@Body() dto: CreateMedicalDto) {
    return this.medicalService.createMedical(dto);
  }

  @Delete(':id')
  DeleteMedical(@Param('id') id: string) {
    return this.medicalService.DeleteMedical(id);
  }

  @Put(':id')
  updateMedical(@Param('id') id: string, @Body() dto: UpdateMedicalDto) {
    return this.medicalService.updateMedical(id, dto);
  }
}
