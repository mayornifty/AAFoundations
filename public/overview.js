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

        // Add code for charts using charting library like Chart.js or similar
    } catch (error) {
        console.error('Error fetching overview data:', error);
    }
}

fetchOverview();
