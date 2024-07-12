// JavaScript to fetch beneficiaries data and populate the table
const apiUrl = '/api';

// Function to fetch beneficiaries data
async function fetchBeneficiaries() {
    try {
        const response = await axios.get(`${apiUrl}/beneficiaries`);
        const beneficiaries = response.data;

        // Example: Update DOM with beneficiaries data
        const beneficiariesTable = document.getElementById('beneficiariesTable');
        beneficiariesTable.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Contact Address</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    ${beneficiaries.map(beneficiary => `
                        <tr>
                            <td>${beneficiary.name}</td>
                            <td>${beneficiary.phone_no}</td>
                            <td>${beneficiary.contact_address}</td>
                            <td>${beneficiary.email_address}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    } catch (error) {
        console.error('Error fetching beneficiaries data:', error);
    }
}
