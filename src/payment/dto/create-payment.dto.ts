import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsMongoId()
  beneficiary_id: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  institution_name: string;

  @IsNotEmpty()
  programme_of_study: string;

  @IsNotEmpty()
  level: string;

  @IsNotEmpty()
  @IsDateString()
  start_date: Date;

  @IsNotEmpty()
  @IsDateString()
  end_date: Date;

  @IsNotEmpty()
  phone_no: string;

  @IsNotEmpty()
  contact_address: string;

  @IsNotEmpty()
  email_address: string;

  @IsNotEmpty()
  school_fees: number;

  @IsNotEmpty()
  accommodation: number;

  @IsNotEmpty()
  books_handouts: number;

  @IsNotEmpty()
  institution_dues: number;

  @IsNotEmpty()
  computer: number;

  @IsNotEmpty()
  allowance: number;

  @IsNotEmpty()
  others: number;

  @IsNotEmpty()
  total_amount: number;

  @IsNotEmpty()
  account_no: string;

  @IsNotEmpty()
  bank: string;

  @IsNotEmpty()
  comments: string;

  @IsOptional()
  extra: string;
}
