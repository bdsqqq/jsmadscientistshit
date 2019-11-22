//Dados fornecidos por https://data.giss.nasa.gov/gistemp/

chartIt();


async function chartIt(){
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Média de Temperatura Global em C°',
                data: data.ys,
                fill: false,
                pointRadius: 1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return value + '°';
                        }
                    }
                }]
            }
        }
    });
}

async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    const xs = [];
    const ys = [];
    console.log(data);

    const table = data.split(/\n/).slice(1);
    table.forEach(row => {
        const comlumns = row.split(',');
        const year = comlumns[0];
        xs.push(year);
        const temp = comlumns[1];
        ys.push(parseFloat(temp)+14);
        console.log(year, temp)
    });
    return {xs, ys}

/*Outra solução
const columns = [];
for(let row of rows){
    const column = row.split(',');
    columns.push(column)
}
console.log(columns);*/
}
