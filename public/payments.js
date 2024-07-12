// JavaScript to fetch payments data and populate the table
const apiUrl = '/api';

// Function to fetch payments data
async function fetchPayments() {
    try {
        const response = await axios.get(`${apiUrl}/payments`);
        const payments = response.data;

        // Example: Update DOM with payments data
        const paymentsTable = document.getElementById('paymentsTable');
        paymentsTable.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Institution</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    ${payments.map(payment => `
                        <tr>
                            <td>${new Date(payment.date).toLocaleDateString()}</td>
                            <td>${payment.total_amount}</td>
                            <td>${payment.institution_name}</td>
                            <td>${payment.comments}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    } catch (error) {
        console.error('Error fetching payments data:', error);
    }
}
