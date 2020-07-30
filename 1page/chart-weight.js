var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['10月', '11月', '12月', '1月', '2月', '3月'],
        datasets: [
            {
                type: 'bar',
                label: '体重',
                data: [58, 63, 65.5, 69, 68, 67],
                
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});