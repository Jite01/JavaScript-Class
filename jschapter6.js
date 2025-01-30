//6.5
function displaySortedNumbers(num1, num2, num3) {

let largest = 0;
let middle = 0;
let minimum = 0;
if (num1 > num2 && num1 > num3 ) {
	largest = num1
	while(num2 != num3 ){
	minimum = Math.min(num2, num3)
	middle =  Math.max(num2, num3)
		}
	middle = num2
	minimum = num3
	}

if (num2 > num1 && num2 > num3 ) {
	largest = num2
	while(num1 != num3 ){
	minimum = Math.min(num1, num3)
	middle =  Math.max(num1, num3)
		}
	middle = num1
	minimum = num3
	   }

if (num3 > num1 && num3 > num2) { 
	largest = num3
	while(num2 != num1 ){
	minimum = Math.min(num2, num1)
	middle =  Math.max(num2, num1)
			}
	middle = num2
	minimum = num1
		}

console.log(largest, middle, minimum)
}

// displaySortedNumbers(8,0,0)

//6.6
function displayPattern(n) {

for (let x = 1; x <= n; x++){
	for(let y = 1; y <= x; y++) {
console.log(y)
		}
console.log(``)
	}
}
displayPattern(5)
