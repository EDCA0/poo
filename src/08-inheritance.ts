export class Animal {
	constructor (
		public name : string,
	) {}

	move () : void {
		console.log("Moving along!");
	}

	greeting () : string {
		return `Hello, my name ${this.name}`
	}
}


export class Perro extends Animal {
	constructor (
		public owner: string,
		name : string,
	) {
		super(name);
	}
	woof(times : number) : void {
		for(let i = 1; i <=times; i++) {
			console.log("Woof");
		}
	}
	Nombrar () {
		console.log(`${this.name} , ${this.owner}`)
	}
}

const fifi = new Animal ("Fifi");
fifi.move();
console.log (fifi.greeting());


const cheis = new Perro ("Nico" ,"cheis");
cheis.move();
console.log (cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
cheis.Nombrar();
