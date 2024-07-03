import { IsOptional } from 'class-validator';

export class UpdateBeneficiaryDto {
  @IsOptional()
  'name': string;

  @IsOptional()
  'phone_no': string;

  @IsOptional()
  'contact_address': string;

  @IsOptional()
  'email_address': string;
}
