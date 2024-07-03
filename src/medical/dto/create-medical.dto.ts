import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateMedicalDto {
  @IsNotEmpty()
  @IsMongoId()
  beneficiary_id: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  names: string;

  @IsNotEmpty()
  hosp_no: string;

  @IsNotEmpty()
  lab_cost: number;

  @IsNotEmpty()
  drugs_cost: number;

  @IsNotEmpty()
  consultation: number;

  @IsOptional()
  utility_cost: number;

  @IsOptional()
  prof_fee: number;

  @IsOptional()
  bed: number;

  @IsNotEmpty()
  line_total: number;

  @IsOptional()
  extra: string;
}
