import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Beneficiary } from './schemas/beneficiary.schema';
import { Model } from 'mongoose';
import { CreateBeneficiaryDto } from './dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@Injectable()
export class BeneficiaryService {
  constructor(
    @InjectModel(Beneficiary.name) private beneficiaryModel: Model<Beneficiary>,
  ) {}

  async getBeneficiaries(): Promise<{ message: string; data: Beneficiary[] }> {
    try {
      const data = await this.beneficiaryModel.find().exec();
      return {
        message: 'Beneficiaries fetched successfully',
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  async getBeneficiary(
    id: string,
  ): Promise<{ message: string; data: Beneficiary }> {
    try {
      const beneficiary = await this.beneficiaryModel.findById(id);
      return { message: 'Beneficiary fetched successfully', data: beneficiary };
    } catch (error) {
      throw error;
    }
  }

  async createBeneficiary(
    dto: CreateBeneficiaryDto,
  ): Promise<{ message: string; data: Beneficiary }> {
    try {
      let beneficiary: any = await this.beneficiaryModel.findOne({
        email_address: dto.email_address.toLowerCase(),
      });
      if (beneficiary) {
        throw new BadRequestException('Email address taken');
      }
      beneficiary = await this.beneficiaryModel.create({
        ...dto,
        email_address: dto.email_address.toLowerCase(),
      });
      return { message: 'Beneficiary created successfully', data: beneficiary };
    } catch (error) {
      throw error;
    }
  }

  async updateBeneficiary(
    id: string,
    dto: UpdateBeneficiaryDto,
  ): Promise<{ message: string; data: Beneficiary }> {
    try {
      console.log({ id, dto, dtoLength: Object.keys(dto).length });
      if (Object.keys(dto).length <= 0) {
        throw new BadRequestException(`At least one request body expected`);
      }
      let beneficiary: any = await this.beneficiaryModel.findById(id);
      console.log(beneficiary);
      if (!beneficiary) {
        throw new NotFoundException('Beneficiary not found');
      }
      beneficiary = await this.beneficiaryModel.findOneAndUpdate(
        { _id: id },
        { ...dto },
        { new: true },
      );
      return { message: 'Beneficiary updated successfully', data: beneficiary };
    } catch (error) {
      throw error;
    }
  }

  async deleteBeneficiary(
    id: string,
  ): Promise<{ message: string; data: Beneficiary }> {
    try {
      let beneficiary: any = await this.beneficiaryModel.findById(id);
      console.log(beneficiary);
      if (!beneficiary) {
        throw new NotFoundException('Beneficiary not found');
      }
      beneficiary = await this.beneficiaryModel.findByIdAndDelete(id);
      return { message: 'Beneficiary updated successfully', data: beneficiary };
    } catch (error) {
      throw error;
    }
  }
}
