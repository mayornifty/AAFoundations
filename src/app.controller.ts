import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index') // Render the 'index' template
  root() {
    return { message: 'Dashboard' }; // Pass data to the template
  }

  @Get('beneficiaries')
  @Render('beneficiaries') // Render the 'beneficiaries' template for the /beneficiaries route
  renderBeneficiaries() {
    return { message: 'Hello Beneficiaries!' }; // Pass data to the template
  }
  @Get('medicalben')
  @Render('medicalben') // Render the 'medical' template for /medical route
  renderMedical() {
    return { message: 'Hello Medical Records!' }; // Pass data to the template
  }

  @Get('payments')
  @Render('payments') // Render the 'payments' template for /payments route
  renderPayments() {
    return { message: 'Hello Payments!' }; // Pass data to the template
  }

  @Get('donations')
  @Render('donations') // Render the 'donations' template for /donations route
  renderDonations() {
    return { message: 'Hello Donations!' }; // Pass data to the template
  }

  
}
