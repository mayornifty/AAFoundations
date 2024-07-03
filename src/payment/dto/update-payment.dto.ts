import { IsOptional } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  beneficiary_id: string;
}
