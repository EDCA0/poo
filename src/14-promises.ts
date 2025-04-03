import axios from "axios"; //> Ya no es necesario debido a que ya se puede utilizar fetch con node


(async () => {

	function delay (time : number) {
		const promise = new Promise<boolean> ((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, time);
		});
		return promise;
	}

	async function getProducts () {
		const promise = await fetch("https://api.escuelajs.co/api/v1/products");
		return promise.json();
	}


	console.log("---".repeat(10));
	const rta = await delay(1000);
	console.log(rta);
	console.log("---".repeat(10));
	const products = await getProducts();
	console.log(products);

})();
