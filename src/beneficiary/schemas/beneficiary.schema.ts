import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type BeneficiaryDocument = HydratedDocument<Beneficiary>;

@Schema({ timestamps: true, collection: 'beneficiary' })
export class Beneficiary {
  @Prop({ type: SchemaTypes.String, required: true })
  name: string;

  @Prop({ type: SchemaTypes.String, required: false })
  phone_no: string;

  @Prop({ type: SchemaTypes.String, required: false })
  contact_address: string;

  @Prop({ type: SchemaTypes.String, required: false, unique: true })
  email_address: string;
}

export const BeneficiarySchema = SchemaFactory.createForClass(Beneficiary);
