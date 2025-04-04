import { Perro } from "./08-inheritance";

// function getValue(value : number | string) {
// 	return value;
// }

// function getValue(value : unknown) {
// 	return value;
// }

function getValue<myType>(value : myType) {
	const array : myType[] = [value];
	return value;
}


getValue<number>(12).toFixed();
getValue("12").toLowerCase();
getValue([2, "as"]).forEach;
const fifi = new Perro("Nico", "fifi");
getValue<Perro>(fifi).greeting()

// Promise<boolean>
