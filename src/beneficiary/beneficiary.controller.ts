import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { CreateBeneficiaryDto, UpdateBeneficiaryDto } from './dto';

@Controller('api/beneficiaries')
export class BeneficiaryController {
  constructor(private readonly beneficiaryService: BeneficiaryService) {}

  @Get()
  getAllBeneficiaries() {
    return this.beneficiaryService.getBeneficiaries();
  }

  @Get(':id')
  getBeneficiary(@Param('id') id: string) {
    return this.beneficiaryService.getBeneficiary(id);
  }

  @Post()
  createBeneficiary(@Body() dto: CreateBeneficiaryDto) {
    return this.beneficiaryService.createBeneficiary(dto);
  }

  @Put(':id')
  updateBeneficiary(
    @Param('id') id: string,
    @Body() dto: UpdateBeneficiaryDto,
  ) {
    return this.beneficiaryService.updateBeneficiary(id, dto);
  }

  @Delete(':id')
  deleteBeneficiary(@Param('id') id: string) {
    return this.beneficiaryService.deleteBeneficiary(id);
  }
}
