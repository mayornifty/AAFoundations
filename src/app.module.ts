import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { DonationModule } from './donation/donation.module';
import { MedicalModule } from './medical/medical.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    HealthModule,
    BeneficiaryModule,
    DonationModule,
    MedicalModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
