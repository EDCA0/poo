import axios from "axios"; //> Ya no es necesario debido a que ya se puede utilizar fetch con node
import {Product} from "./models/product.model"

// let anyVar : any = 12;
// let boolVar : boolean = anyVar;

(async () => {

	async function getProducts () : Promise<Product[]> {
		const promise = await fetch ("https://api.escuelajs.co/api/v1/products");
		// const data : Product[] = await promise.json();
		const data : Product[] = await promise.json();

		return data;
	}

	const products = await getProducts();
	console.log(products.map(item => `${item.id} - ${item.title}`));

})();
