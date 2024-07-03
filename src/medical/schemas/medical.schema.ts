import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Beneficiary } from 'src/beneficiary/schemas/beneficiary.schema';

export type MedicalDocument = HydratedDocument<Medical>;

@Schema({ timestamps: true, collection: 'medical' })
export class Medical {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Beneficiary' })
  beneficiary_id: Beneficiary;

  @Prop({ type: SchemaTypes.Date, required: true })
  date: Date;

  @Prop({ type: SchemaTypes.String, required: true })
  names: string;

  @Prop({ type: SchemaTypes.String, required: true })
  hosp_no: string;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  lab_cost: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  drugs_cost: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  consultation: number;

  @Prop({ type: SchemaTypes.Decimal128, required: false })
  utility_cost: number;

  @Prop({ type: SchemaTypes.Decimal128, required: false })
  prof_fee: number;

  @Prop({ type: SchemaTypes.Decimal128, required: false })
  bed: number;

  @Prop({ type: SchemaTypes.Decimal128, required: true })
  line_total: number;

  @Prop({ type: SchemaTypes.String, required: false })
  extra: string;
}

export const MedicalSchema = SchemaFactory.createForClass(Medical);
