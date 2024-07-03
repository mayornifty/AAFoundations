import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateBeneficiaryDto {
  @IsNotEmpty()
  'name': string;

  @IsNotEmpty()
  @IsPhoneNumber('NG')
  'phone_no': string;

  @IsNotEmpty()
  'contact_address': string;

  @IsNotEmpty()
  @IsEmail()
  'email_address': string;
}
