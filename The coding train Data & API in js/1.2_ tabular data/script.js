//Dados fornecidos por https://data.giss.nasa.gov/gistemp/


getData();

async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    console.log(data);

    const table = data.split(/\n/).slice(1);
    table.forEach(row => {
        const comlumns = row.split(',');
        const year = comlumns[0];
        const temp = comlumns[1];
        console.log(year, temp)
    })

/*Meu codigo
const columns = [];
for(let row of rows){
    const column = row.split(',');
    columns.push(column)
}
console.log(columns);
FIm meu codigo*/
}
