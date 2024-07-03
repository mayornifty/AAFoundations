import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type BeneficiaryDocument = HydratedDocument<Beneficiary>;

@Schema({ timestamps: true, collection: 'beneficiary' })
export class Beneficiary {
  @Prop({ type: SchemaTypes.String, required: true })
  name: string;

  @Prop({ type: SchemaTypes.String, required: true })
  phone_no: string;

  @Prop({ type: SchemaTypes.String, required: true })
  contact_address: string;

  @Prop({ type: SchemaTypes.String, required: true, unique: true })
  email_address: string;
}

export const BeneficiarySchema = SchemaFactory.createForClass(Beneficiary);
