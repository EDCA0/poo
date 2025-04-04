console.log(Math.PI);
console.log("Math.PI", Math.max(1,2,2,8,1,0));

class MyMath {
	static readonly PI = 3.14

	static max (...numbers : number[]) {
		console.log(numbers);
		return numbers.reduce((max, currentNumber) => {
			if(max < currentNumber) {
				max = currentNumber
			}
			return max;
		}, numbers.reduce((min, currentNumber) => {
			if(min > currentNumber) {
				min = currentNumber
			}
			return min
		}));
	}
}

// const math = new MyMath();
// math.PI
// MyMath.PI = 21313

console.log("MyMath", MyMath.PI);
// const numbers = [1,23,34,4,3,234,2432,423,423,42,]
// console.log(MyMath.max(...numbers));


console.log(MyMath.max(-1, -9, -8));
