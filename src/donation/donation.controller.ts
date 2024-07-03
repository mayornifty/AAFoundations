import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto, UpdateDonationDto } from './dto';

@Controller('api/donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  getAllDonations() {
    return this.donationService.getAllDonations();
  }

  @Get(':id')
  getDonation(@Param('id') id: string) {
    return this.donationService.getDonation(id);
  }

  @Post()
  createDonation(@Body() dto: CreateDonationDto) {
    return this.donationService.createDonation(dto);
  }

  @Delete(':id')
  DeleteDonation(@Param('id') id: string) {
    return this.donationService.DeleteDonation(id);
  }

  @Put(':id')
  updateDonation(@Param('id') id: string, @Body() dto: UpdateDonationDto) {
    return this.donationService.updateDonation(id, dto);
  }
}
