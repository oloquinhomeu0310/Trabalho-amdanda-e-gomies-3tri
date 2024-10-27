// Gráfico de Engajamento
const engajamentoCtx = document.getElementById('engajamentoChart').getContext('2d');
const engajamentoChart = new Chart(engajamentoCtx, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Engajamento (em mil)',
            data: [12, 19, 10, 5],
            backgroundColor: [
                'rgba(0, 188, 212, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(0, 188, 212, 0.6)',
                'rgba(255, 152, 0, 0.6)'
            ],
            borderColor: [
                'rgba(0, 188, 212, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(0, 188, 212, 1)',
                'rgba(255, 152, 0, 1)'
            ],
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

// Gráfico de Alcance
const alcanceCtx = document.getElementById('alcanceChart').getContext('2d');
const alcanceChart = new Chart(alcanceCtx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Alcance (em mil)',
            data: [15, 25, 30, 20, 40, 50],
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            borderColor: 'rgba(0, 188, 212, 1)',
            borderWidth: 2,
            fill: true
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
