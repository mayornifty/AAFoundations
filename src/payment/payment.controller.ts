import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentService } from './payment.service';

@Controller('api/payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  getAllPayments() {
    return this.paymentService.getAllPayments();
  }

  @Get(':id')
  getPayment(@Param('id') id: string) {
    return this.paymentService.getPayment(id);
  }

  @Post()
  createPayment(@Body() dto: CreatePaymentDto) {
    return this.paymentService.createPayment(dto);
  }

  @Delete(':id')
  DeletePayment(@Param('id') id: string) {
    return this.paymentService.deletePayment(id);
  }

  @Put(':id')
  updatePayment(@Param('id') id: string, @Body() dto: UpdatePaymentDto) {
    return this.paymentService.updatePayment(id, dto);
  }
}
