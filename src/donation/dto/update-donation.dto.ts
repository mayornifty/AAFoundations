import { IsOptional } from 'class-validator';

export class UpdateDonationDto {
  @IsOptional()
  beneficiary_id: string;

  @IsOptional()
  start_date: Date;

  @IsOptional()
  designation: string;

  @IsOptional()
  account_no: string;

  @IsOptional()
  amount: number;

  @IsOptional()
  bank: string;

  @IsOptional()
  comments: string;

  @IsOptional()
  extra: string;

  @IsOptional()
  contact_address: string;

  @IsOptional()
  phone_no: string;
}
