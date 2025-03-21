export class MyDate {
	// public year : number;
	// public month : number;
	// private day: number;

	constructor(
		public year: number = 1993,
		public month: number = 7,
		public day: number = 9
	){
		if(day <1 || day >30 || month > 12 || month < 0) { //> Se valida que la instancia se declare con fechas logicas, en caso de que no tira un error
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

	public PrintFormat () : string{
		const day = this.AddPdding(this.day);
		const month = this.AddPdding(this.month);

		return `${day}/${month}/${this.year}`
	}

	private AddPdding (value : number) : string {
		if(value < 10) {
			return `0${value}`;
		}
		return `${value}`;
	}

	public Add (amount: number, type: "days" | "months" | "years") : void {
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
				this.month -= 12;
				this.year += 1;
			}
		}
		if(type === "years"){
			this.year += amount;
		}
	}

	getDay ( ){
		return this.day
	}
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.PrintFormat());
console.log(myDate.getDay())

const myDate2 = new MyDate();
console.log("() => ", myDate2.PrintFormat());

const myDate3 = new MyDate(2022);
console.log("(2022) => ", myDate3.PrintFormat());

const myDate4 = new MyDate(2022, 3);
console.log("(2022, 3) => ", myDate4.PrintFormat());
