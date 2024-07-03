import {
  IsDateString,
  IsDecimal,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateDonationDto {
  @IsNotEmpty()
  @IsMongoId()
  beneficiary_id: string;

  @IsNotEmpty()
  @IsDateString()
  start_date: Date;

  @IsNotEmpty()
  designation: string;

  @IsNotEmpty()
  account_no: string;

  @IsNotEmpty()
  @IsDecimal()
  amount: number;

  @IsNotEmpty()
  bank: string;

  @IsNotEmpty()
  comments: string;

  @IsOptional()
  extra: string;

  @IsOptional()
  phone_no: string;

  @IsOptional()
  contact_address: string;
}
