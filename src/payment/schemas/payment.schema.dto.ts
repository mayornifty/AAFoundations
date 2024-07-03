import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, HydratedDocument } from 'mongoose';
import { Beneficiary } from 'src/beneficiary/schemas/beneficiary.schema';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true, collection: 'payment' })
export class Payment {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Beneficiary' })
  beneficiary_id: Beneficiary;

  @Prop({ type: SchemaTypes.Date, required: true })
  date: Date;

  @Prop({ type: SchemaTypes.String, required: true })
  institution_name: string;

  @Prop({ type: SchemaTypes.String, required: true })
  programme_of_study: string;

  @Prop({ type: SchemaTypes.String, required: true })
  level: string;

  @Prop({ type: SchemaTypes.Date, required: true })
  start_date: Date;

  @Prop({ type: SchemaTypes.Date, required: true })
  end_date: Date;

  @Prop({ type: SchemaTypes.String, required: true })
  phone_no: string;

  @Prop({ type: SchemaTypes.String, required: true })
  contact_address: string;

  @Prop({ type: SchemaTypes.String, required: true })
  email_address: string;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  school_fees: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  accommodation: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  books_handouts: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  institution_dues: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  computer: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  allowance: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  others: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  total_amount: number;

  @Prop({ type: SchemaTypes.String, required: true })
  account_no: string;

  @Prop({ type: SchemaTypes.String, required: true })
  bank: string;

  @Prop({ type: SchemaTypes.String, required: true })
  comments: string;

  @Prop({ type: SchemaTypes.String, required: false })
  extra: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
