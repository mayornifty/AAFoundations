import { IsEmail, IsNotEmpty,IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateBeneficiaryDto {
  @IsNotEmpty()
  'name': string;

  @IsOptional()
  @IsPhoneNumber('NG')
  'phone_no': string;

  @IsOptional()
  'contact_address': string;

  @IsOptional()
  @IsEmail()
  'email_address': string;
}
