import { IsOptional } from 'class-validator';

export class UpdateMedicalDto {
  @IsOptional()
  beneficiary_id: string;

  @IsOptional()
  start_date: Date;

  @IsOptional()
  names: string;

  @IsOptional()
  hosp_no: string;

  @IsOptional()
  lab_cost: number;

  @IsOptional()
  drugs_cost: number;

  @IsOptional()
  consultation: number;

  @IsOptional()
  utility_cost: number;

  @IsOptional()
  prof_fee: number;

  @IsOptional()
  bed: number;

  @IsOptional()
  line_total: number;

  @IsOptional()
  extra: string;
}
