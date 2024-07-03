import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './schemas/payment.schema.dto';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) readonly paymentModel: Model<Payment>,
  ) {}

  async getAllPayments(): Promise<{ message: string; data: Payment[] }> {
    try {
      const data = await this.paymentModel.find();
      return { message: 'Payments fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async getPayment(id: string): Promise<{ message: string; data: Payment }> {
    try {
      const data = await this.paymentModel
        .findById(id)
        .populate({ path: 'beneficiary_id' });
      if (!data) throw new NotFoundException('Payment not found');
      return { message: 'Payments fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async createPayment(
    dto: CreatePaymentDto,
  ): Promise<{ message: string; data: Payment }> {
    try {
      const data = await this.paymentModel.create(dto);
      return { message: 'Payment created successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async deletePayment(id: string): Promise<{ message: string; data: Payment }> {
    try {
      const data = await this.paymentModel.findByIdAndDelete(id);
      if (!data) throw new NotFoundException('Payment not found');
      return { message: 'Payments fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async updatePayment(
    id: string,
    dto: UpdatePaymentDto,
  ): Promise<{ message: string; data: Payment }> {
    try {
      if (Object.keys(dto).length <= 0) {
        throw new BadRequestException('At least one request body required');
      }
      const data = await this.paymentModel.findByIdAndUpdate(id, { ...dto });
      if (!data) throw new NotFoundException('Payment not found');
      return { message: 'Payments fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }
}
