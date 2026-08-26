// 1. Initial function to fetch the CSV
function loadData() {
    const fileName = "data.csv";

    // Try using fetch first, then fall back to Papa.parse
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(csv => {
            Papa.parse(csv, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    console.log("Data successfully parsed:", results.data);
                    updateDashboard(results.data);
                },
                error: function(err) {
                    console.error("Error parsing CSV:", err);
                    document.getElementById('riskStatus').innerText = "Parse Error";
                }
            });
        })
        .catch(err => {
            console.error("Error loading CSV file:", err);
            // Fallback: try PapaParse download method
            Papa.parse(fileName, {
                download: true,
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    console.log("Data successfully parsed via download:", results.data);
                    updateDashboard(results.data);
                },
                error: function(err) {
                    console.error("Error loading CSV with fallback:", err);
                    document.getElementById('riskStatus').innerText = "File Error";
                }
            });
        });
}

// 2. Function to calculate statistics
function updateDashboard(rows) {
    const total = rows.length;

    // Matching the exact CSV headers including the hidden space
    const threats = rows.filter(r => {
        const val = r['Have you ever encountered any cyber threat? '];
        return val && val.trim() === 'Yes';
    }).length;

    const tfa = rows.filter(r => {
        const val = r['Do you use two-factor authentication (2FA)?'];
        return val && val.trim() === 'Yes';
    }).length;

    const threatRate = total > 0 ? Math.round((threats / total) * 100) : 0;
    const tfaRate = total > 0 ? Math.round((tfa / total) * 100) : 0;

    // Inject data into HTML
    document.getElementById('counter').innerText = total;
    document.getElementById('threatRate').innerText = threatRate + "%";
    document.getElementById('twoFactorRate').innerText = tfaRate + "%";
    
    const riskStatus = document.getElementById('riskStatus');
    if (threatRate > 50) {
        riskStatus.innerText = "High";
        riskStatus.style.color = "#fb7185"; // Modern Red
    } else {
        riskStatus.innerText = "Medium";
        riskStatus.style.color = "#facc15"; // Yellow
    }

    renderCharts(threatRate, tfaRate);
}

// 3. Function to draw the Polished Professional Charts
function renderCharts(threatPercent, tfaPercent) {
    // IMPORTANT: Clear old charts to prevent overlapping when the page reloads
    ['barChart', 'pieChart'].forEach(id => {
        let chartStatus = Chart.getChart(id);
        if (chartStatus !== undefined) chartStatus.destroy();
    });

    // Global styling for Chart.js
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    // Modern Doughnut Chart
    new Chart(document.getElementById('pieChart'), {
        type: 'doughnut',
        data: {
            labels: ['At Risk', 'Safe'],
            datasets: [{
                data: [threatPercent, 100 - threatPercent],
                backgroundColor: ['#fb7185', '#34d399'],
                hoverOffset: 15,
                borderWidth: 0
            }]
        },
        options: {
            cutout: '75%', // Creates the professional ring look
            plugins: {
                legend: { position: 'bottom', labels: { padding: 20 } }
            }
        }
    });

    // Modern Bar Chart
    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['Threats Encountered', '2FA Usage'],
            datasets: [{
                label: 'Population %',
                data: [threatPercent, tfaPercent],
                backgroundColor: ['rgba(251, 113, 133, 0.8)', 'rgba(56, 189, 248, 0.8)'],
                borderRadius: 10,
                barThickness: 50
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { 
                    beginAtZero: true, 
                    max: 100, 
                    grid: { color: 'rgba(255, 255, 255, 0.05)' } 
                },
                x: { grid: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// 4. Run the loader immediately
loadData();