// JavaScript to fetch medical records data and populate the table
const apiUrl = 'https://samuel-nest-restapi.onrender.com/api';

// Function to fetch medical records data
async function fetchMedicalRecords() {
    try {
        const response = await axios.get(`${apiUrl}/medical-records`);
        const medicalRecords = response.data;

        // Example: Update DOM with medical records data
        const medicalRecordsTable = document.getElementById('medicalRecordsTable');
        medicalRecordsTable.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Patient Name</th>
                        <th>Hospital Number</th>
                        <th>Total Cost</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    ${medicalRecords.map(record => `
                        <tr>
                            <td>${new Date(record.date).toLocaleDateString()}</td>
                            <td>${record.names}</td>
                            <td>${record.hosp_no}</td>
                            <td>${record.line_total}</td>
                            <td>${record.extra}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    } catch (error) {
        console.error('Error fetching medical records data:', error);
    }
}
