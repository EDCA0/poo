export interface Driver {
	dataBase : string;
	password : string;
	port : number;

	connect () : void;
	disconnect () : void;
	isConnected (name:string) : boolean;
}

// const driver : Driver = {
// 	dataBase : "",
// 	password : "",
// 	port : 233,
// }

class PostgresDriver implements Driver {
	constructor (
		public dataBase : string,
		public password : string,
		public port : number
	) {}

	connect(): void {
		throw new Error("Method not implemented.");
	}

	disconnect(): void {
		throw new Error("Method not implemented.");

	}

	isConnected(name: string): boolean {
		throw new Error("Method not implemented.");

	}
}


class OracleDriver implements Driver {
	constructor (
		public dataBase : string,
		public password : string,
		public port : number
	) {}

	connect(): void {
		throw new Error("Method not implemented.");
	}

	disconnect(): void {
		throw new Error("Method not implemented.");
	}

	isConnected(name: string): boolean {
		throw new Error("Method not implemented.");
	}
}
