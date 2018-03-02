
//EFEITO  DO JQUERY NO MENU DAS LI 
$('nav.desktop a').hover(function(){
	$('nav li').removeClass('select');
	$(this).parent().addClass('select');
});

// GRAFICO
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "abril", "Maio", "Junho","julho"],
        datasets: [{
            label: '2017',
            data: [150, 100, 200, 300, 170, 140, 85],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(160, 160, 160, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(160, 160, 160, 5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// MOBILE

$('nav.mobile h3').click(function(){
    $('ul.nav-desktop').slideToggle();
})    