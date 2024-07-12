document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "/api";

    // Function to fetch data and handle errors
    async function fetchData(endpoint) {
        try {
            const response = await fetch(apiUrl + endpoint);
            const result = await response.json();
            return result.data;
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error);
            return null;
        }
    }

    // Fetch and display the total counts
    function displayTotalCounts() {
        fetchData("/beneficiaries").then(data => {
            if (Array.isArray(data)) {
                document.getElementById("totalBeneficiaries").textContent = `Total Beneficiaries: ${data.length}`;
            }
        });

        fetchData("/payments").then(data => {
            if (Array.isArray(data)) {
                document.getElementById("totalPayments").textContent = `Total Payments: ${data.length}`;
            }
        });

        fetchData("/medical-records").then(data => {
            if (Array.isArray(data)) {
                document.getElementById("totalMedicals").textContent = `Total Medical Beneficiaries: ${data.length}`;
            }
        });

        fetchData("/donations").then(data => {
            if (Array.isArray(data)) {
                document.getElementById("totalDonations").textContent = `Total Donations: ${data.length}`;
            }
        });
    }

    // Add New Beneficiary button
    document.getElementById("addBeneficiaryBtn").addEventListener("click", function () {
        window.location.href = "/beneficiaries"; // Redirect to the add beneficiary page
    });

    // Initialize DataTable
    const beneficiariesTable = $('#beneficiariesTable').DataTable({
        columns: [
            { data: 'name' },
            { data: 'phone_no' },
            { data: 'contact_address' },
            { data: 'email_address' }
        ]
    });

    // Function to render DataTable with fetched beneficiaries
    function renderBeneficiariesTable(data) {
        beneficiariesTable.clear().rows.add(data).draw();
        displayTotalCounts(); // Update counts after table refresh
    }

    // Fetch data and render DataTable
    fetchData("/beneficiaries").then(data => {
        if (Array.isArray(data)) {
            renderBeneficiariesTable(data);
        }
    });

    // Responsive Chart for Payments (example provided)
    const paymentsCtx = document.getElementById("paymentsChart").getContext("2d");
    fetchData("/payments").then(data => {
        if (Array.isArray(data)) {
            const institutions = {};
            data.forEach(payment => {
                institutions[payment.institution_name] = (institutions[payment.institution_name] || 0) + 1;
            });
            const labels = Object.keys(institutions);
            const values = Object.values(institutions);

            new Chart(paymentsCtx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Payments by Institution",
                        data: values,
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    });
});
