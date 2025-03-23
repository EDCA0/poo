export class MyDate {
	// public year : number;
	// public month : number;
	// private day: number;

	constructor(
		private year: number = 1993,
		private month: number = 7,
		private _day: number = 9
	){
		if(_day <1 || _day >30 || month > 12 || month < 0) { //> Se valida que la instancia se declare con fechas logicas, en caso de que no tira un error
			if(month > 11) {
				throw new Error("Los meses deben ser de 0(Enero) a 11(Diciembre");
			} else {
				throw new Error("Fecha invalida, intente otra vez")
			}
		}
		this.year = year;
		this.month = month;
		this._day = _day;
	}

	public PrintFormat () : string{
		const day = this.AddPdding(this._day);
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
			this._day += amount
			if(this._day > 30){

					while (this._day > 30) { //> Si la fecha actual es mayor a 30, se reduciran 30 dias de la fecha actual, aumentando un mes
						this._day -= 30;
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

	public get Day ( ){
		return this._day
	}

	get isLeapYear () : boolean {
		if(this.year % 400 === 0) return true;
		if(this.year % 100 === 0) return false;
		return this.year % 4 === 0
	}
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.PrintFormat());
// console.log(myDate.getDay())

console.log(myDate.Day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log("2000", myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log("2001", myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log("2004", myDate4.isLeapYear);
