import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medical } from './schemas/medical.schema';
import { CreateMedicalDto, UpdateMedicalDto } from './dto';

@Injectable()
export class MedicalService {
  constructor(
    @InjectModel(Medical.name) private medicalModel: Model<Medical>,
  ) {}

  async getAllMedicals(): Promise<{ message: string; data: Medical[] }> {
    try {
      const data = await this.medicalModel.find();
      return { message: 'medical records fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async getMedical(id: string) {
    try {
      const data = await this.medicalModel
        .findById(id)
        .populate({ path: 'beneficiary_id' });
      if (!data) {
        throw new NotFoundException('Medical record not found');
      }
      return { message: 'medical records fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async createMedical(dto: CreateMedicalDto) {
    try {
      const data = await this.medicalModel.create(dto);
      return { message: 'medical records fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async DeleteMedical(id: string) {
    try {
      const data = await this.medicalModel.findByIdAndDelete(id);
      if (!data) {
        throw new NotFoundException('Medical record not found');
      }
      return { message: 'medical records fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }

  async updateMedical(id: string, dto: UpdateMedicalDto) {
    try {
      if (Object.keys(dto).length <= 0) {
        throw new BadRequestException('At least one request body required');
      }
      const data = await this.medicalModel.findByIdAndUpdate(
        id,
        { ...dto },
        { new: true },
      );
      if (!data) {
        throw new NotFoundException('Medical record not found');
      }
      return { message: 'medical records fetched successfully', data };
    } catch (error) {
      throw error;
    }
  }
}
