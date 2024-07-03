import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api/donations')
export class DonationController {
  @Get()
  getAllDonations() {}

  @Get(':id')
  getDonation() {}

  @Post()
  createDonation() {}

  @Delete(':id')
  DeleteDonation() {}

  @Put()
  updateDonation() {}
}
