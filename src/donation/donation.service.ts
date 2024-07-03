import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donation } from './schemas/donation.schema';
import { CreateDonationDto, UpdateDonationDto } from './dto';

@Injectable()
export class DonationService {
  constructor(
    @InjectModel(Donation.name) private donationModel: Model<Donation>,
  ) {}

  async getAllDonations(): Promise<{ message: string; data: Donation[] }> {
    try {
      const data = await this.donationModel.find();
      return {
        message: 'Donations fetched successfully',
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  async getDonation(id: string): Promise<{ message: string; data: Donation }> {
    const data = await this.donationModel
      .findById(id)
      .populate({ path: 'beneficiary_id' });
    if (!data) {
      throw new NotFoundException('Donation not found');
    }
    return {
      message: 'Donations fetched successfully',
      data,
    };
  }

  async createDonation(
    dto: CreateDonationDto,
  ): Promise<{ message: string; data: Donation }> {
    try {
      const data = await this.donationModel.create(dto);
      return { message: 'Donation created successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async DeleteDonation(
    id: string,
  ): Promise<{ message: string; data: Donation }> {
    const data: any = await this.donationModel.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundException('Donation not found');
    }
    return { message: 'Donation deleted successfully', data };
  }

  async updateDonation(
    id: string,
    dto: UpdateDonationDto,
  ): Promise<{ message: string; data: Donation }> {
    try {
      if (Object.keys(dto).length <= 0) {
        throw new BadRequestException('At least one request body required');
      }
      const donation: any = await this.donationModel.findByIdAndUpdate(
        id,
        {
          ...dto,
        },
        { new: true },
      );
      if (!donation) {
        throw new NotFoundException('Donation not found');
      }
      return { message: 'Donation updated successfully', data: donation };
    } catch (error) {
      throw error;
    }
  }
}
