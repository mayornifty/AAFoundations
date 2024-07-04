// JavaScript to fetch data and populate summary cards and charts
const apiUrl = 'https://samuel-nest-restapi.onrender.com/api';

// Function to fetch summary data
async function fetchSummaryData() {
    try {
        const response = await axios.get(`${apiUrl}/summary`);
        const summaryData = response.data;

        // Example: Update DOM with summary data
        document.getElementById('summaryCards').innerHTML = `
            <div>Total Beneficiaries: ${summaryData.totalBeneficiaries}</div>
            <div>Total Payments: ${summaryData.totalPayments}</div>
            <div>Total Medical Records: ${summaryData.totalMedicalRecords}</div>
            <div>Total Donations: ${summaryData.totalDonations}</div>
        `;
        
        // Example: Render charts using summaryData
        // Implement your charting library or custom code here
        renderCharts(summaryData);
    } catch (error) {
        console.error('Error fetching summary data:', error);
    }
}

// Function to render charts (example)
function renderCharts(data) {
    // Implement chart rendering logic here
}
