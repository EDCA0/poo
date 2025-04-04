export class MyService {

	static instance : MyService | null = null;

	private constructor (
		private name : string,
	) {

	}

	static create(name : string) {
		if(MyService.instance === null) {
			MyService.instance = new MyService (name);
			console.log("Deberia entrar una vez");
		}
		return MyService.instance;
	}

	getName () {
		return this.name;
	}
}

const myService1 = MyService.create("Service1")
console.log(myService1.getName());

const myService2 = MyService.create("Service2");
console.log(myService2.getName());

const myService3 = MyService.create("Service3");
console.log(myService3.getName());


console.log(myService1 === myService2);

console.log(myService1.getName());
console.log(myService2.getName());
console.log(myService3.getName());
