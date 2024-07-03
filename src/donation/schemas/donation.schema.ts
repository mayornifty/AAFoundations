import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, HydratedDocument } from 'mongoose';
import { Beneficiary } from 'src/beneficiary/schemas/beneficiary.schema';

export type DonationDocument = HydratedDocument<Donation>;

@Schema({ timestamps: true, collection: 'donation' })
export class Donation {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Beneficiary' })
  beneficiary_id: Beneficiary;

  @Prop({ type: SchemaTypes.Date, required: true })
  start_date: Date;

  @Prop({ type: SchemaTypes.String, required: true })
  designation: string;

  @Prop({ type: SchemaTypes.String, required: true })
  account_no: string;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  amount: number;

  @Prop({ type: SchemaTypes.String, required: true })
  bank: string;

  @Prop({ type: SchemaTypes.String, required: true })
  comments: string;

  @Prop({ type: SchemaTypes.String, required: false })
  extra: string;

  @Prop({ type: SchemaTypes.String, required: false })
  contact_address: string;

  @Prop({ type: SchemaTypes.String, required: false })
  phone_no: string;
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
