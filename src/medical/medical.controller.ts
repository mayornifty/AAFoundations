import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api/medical-records')
export class MedicalController {
  @Get()
  getAllMedicals() {}

  @Get(':id')
  getMedical() {}

  @Post()
  createMedical() {}

  @Delete(':id')
  DeleteMedical() {}

  @Put()
  updateMedical() {}
}
