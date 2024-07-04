// JavaScript to fetch donations data and populate the table
const apiUrl = 'https://samuel-nest-restapi.onrender.com/api';

// Function to fetch donations data
async function fetchDonations() {
    try {
        const response = await axios.get(`${apiUrl}/donations`);
        const donations = response.data;

        // Example: Update DOM with donations data
        const donationsTable = document.getElementById('donationsTable');
        donationsTable.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Donor Name</th>
                        <th>Amount</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    ${donations.map(donation => `
                            <tr>
                                <td>${new Date(donation.start_date).toLocaleDateString()}</td>
                                <td>${donation.designation}</td>
                                <td>${donation.amount}</td>
                                <td>${donation.comments}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error('Error fetching donations data:', error);
        }
    }
    