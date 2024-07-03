import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('api/payments')
export class PaymentController {
  @Get()
  getAllPayments() {
    return 'Hello world!';
  }

  @Get(':id')
  getPayment() {}

  @Post()
  createPayment() {}

  @Delete(':id')
  DeletePayment() {}

  @Put()
  updatePayment() {}
}
