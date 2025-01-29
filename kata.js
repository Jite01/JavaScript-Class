const detail = { 

name: "shiva",
age: 16,
sex: "cis real nigga",
complexion : "zesty ahh coloured",
stateOfOrigin: "delta",
country: "trapcounty"

}

const car = { make: 'Toyota', model: 'Camry', year: 2021 };



function listylist(obj) {
for (let x in obj) {console.log(`${x}: ${obj[x]}`)}
	}



listylist(car);
console.log(`
`)
listylist(detail);