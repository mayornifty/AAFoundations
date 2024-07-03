import { IsDateString, IsMongoId, IsOptional } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsMongoId()
  beneficiary_id: string;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsOptional()
  institution_name: string;

  @IsOptional()
  programme_of_study: string;

  @IsOptional()
  level: string;

  @IsOptional()
  @IsDateString()
  start_date: Date;

  @IsOptional()
  @IsDateString()
  end_date: Date;

  @IsOptional()
  phone_no: string;

  @IsOptional()
  contact_address: string;

  @IsOptional()
  email_address: string;

  @IsOptional()
  school_fees: number;

  @IsOptional()
  accommodation: number;

  @IsOptional()
  books_handouts: number;

  @IsOptional()
  institution_dues: number;

  @IsOptional()
  computer: number;

  @IsOptional()
  allowance: number;

  @IsOptional()
  others: number;

  @IsOptional()
  total_amount: number;

  @IsOptional()
  account_no: string;

  @IsOptional()
  bank: string;

  @IsOptional()
  comments: string;

  @IsOptional()
  extra: string;
}
