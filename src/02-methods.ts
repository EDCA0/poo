export class MyDate {
	year : number;
	month : number;
	day: number;

	constructor(year: number, month: number, day: number){
		if(day <1 || month > 12 || month < 0) { //> Se valida que la instancia se declare con fechas logicas, en caso de que no tira un error
			if(month > 11) {
				throw new Error("Los meses deben ser de 0(Enero) a 11(Diciembre");
			} else {
				throw new Error("Fecha invalida, intente otra vez")
			}
		}
		this.year = year;
		this.month = month;
		this.day = day;
	}

	PrintFormat () : string{
		return `${this.day}/${this.month}/${this.year}`
	}

	Add (amount: number, type: "days" | "months" | "years")  {
		if(type === "days") {
			this.day += amount
			if(this.day > 30){

					while (this.day > 30) { //> Si la fecha actual es mayor a 30, se reduciran 30 dias de la fecha actual, aumentando un mes
						this.day -= 30;
						this.month += 1;
					}

					while (this.month > 11) { //> Si el mes es mayor a 11(diciembre) descontara 11 meses para volver a 0(enero) aumentando un año
						this.month -= 11;
						this.year += 1;
					}
			}
		}
		if(type === "months"){
			this.month += amount;
			while (this.month > 11) { //> Si el mes es mayor a 11(diciembre) descontara 11 meses para volver a 0(enero) aumentando un año
				this.month -= 11;
				this.year += 1;
			}
		}
		if(type === "years"){
			this.year += amount;
		}
	}
}

const myDate = new MyDate(1993, 7, 9);
	// console.log(myDate.PrintFormat());
	myDate.Add(3, "days");
	// console.log(myDate.PrintFormat());
	myDate.Add(1, "months");
	// console.log(myDate.PrintFormat());

const secondDate = new MyDate(2020, 10, 29);
	secondDate.Add(1, "days");
	console.log(secondDate.PrintFormat());
	secondDate.Add(1, "days");
	console.log(secondDate.PrintFormat());
	secondDate.Add(1, "days");
	console.log(secondDate.PrintFormat());
	secondDate.Add(100, "days");
	console.log(secondDate.PrintFormat());
	secondDate.Add(11, "months");
	console.log(secondDate.PrintFormat());
	secondDate.Add(30, "days");
	console.log(secondDate.PrintFormat());

// const errorDate = new MyDate(2020, -1, 40);
// console.log(errorDate);
