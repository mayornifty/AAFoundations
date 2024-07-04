async function fetchOverview() {
    const apiUrl = 'https://samuel-nest-restapi.onrender.com/api';

    try {
        const [beneficiariesRes, paymentsRes, medicalsRes, donationsRes] = await Promise.all([
            axios.get(`${apiUrl}/beneficiaries`),
            axios.get(`${apiUrl}/payments`),
            axios.get(`${apiUrl}/medical-records`),
            axios.get(`${apiUrl}/donations`)
        ]);

        const beneficiaries = beneficiariesRes.data;
        const payments = paymentsRes.data;
        const medicals = medicalsRes.data;
        const donations = donationsRes.data;

        document.getElementById('totalBeneficiaries').textContent = beneficiaries.length;
        document.getElementById('totalPayments').textContent = payments.length;
        document.getElementById('totalMedicalRecords').textContent = medicals.length;
        document.getElementById('totalDonations').textContent = donations.length;

        // Prepare data for charts
        const paymentsByInstitution = payments.reduce((acc, payment) => {
            acc[payment.institution_name] = (acc[payment.institution_name] || 0) + payment.total_amount;
            return acc;
        }, {});

        const medicalCostsByCategory = medicals.reduce((acc, record) => {
            acc['Lab Costs'] = (acc['Lab Costs'] || 0) + record.lab_cost;
            acc['Drugs Cost'] = (acc['Drugs Cost'] || 0) + record.drugs_cost;
            acc['Consultation'] = (acc['Consultation'] || 0) + record.consultation;
            return acc;
        }, {});

        // Create payments chart
        new Chart(document.getElementById('paymentsChart'), {
            type: 'bar',
            data: {
                labels: Object.keys(paymentsByInstitution),
                datasets: [{
                    label: 'Total Payments by Institution',
                    data: Object.values(paymentsByInstitution),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Create medical costs chart
        new Chart(document.getElementById('medicalCostsChart'), {
            type: 'pie',
            data: {
                labels: Object.keys(medicalCostsByCategory),
                datasets: [{
                    label: 'Medical Costs by Category',
                    data: Object.values(medicalCostsByCategory),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });

    } catch (error) {
        console.error('Error fetching overview data:', error);
    }
}

fetchOverview();
