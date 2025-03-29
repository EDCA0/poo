export class Animal {
	constructor (
		protected name : string,
	) {}

	move () : void {
		console.log("Moving along!");
	}

	greeting () : string {
		return `Hello, my name ${this.name}`
	}

	protected doSomething() {
		console.log("Dooo");
	}
}


export class Perro extends Animal {
	constructor (
		public owner: string,
		name : string,
	) {
		super(name);
	}
	woof(times : number = 1) : void {
		for(let i = 1; i <=times; i++) {
			console.log("Woof", this.name);
		}
		this.doSomething();
	}

	move () {
		super.move();
		console.log("Moving as a dog");
	}

	Nombrar () {
		console.log(`${this.name} , ${this.owner}`)
	}
}

const cheis = new Perro ("Nico" ,"cheis");
// cheis.name = "Otro nombre" No se podra usar debido al metodo protected
cheis.woof();
// cheis.doSomething() No se puede usar el metodo por que solo deja usarlo dentro de su clases o extensores
cheis.move();
