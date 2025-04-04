import {ProductMemoryService} from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
	title: "Producto1",
	price: 100,
	description : "bla bla bla",
	categoryId: 12,
	images : []
});

const products =productService.getAll();
const productId = products[0].id;

let rta = productService.findOne(productId);
console.log(rta);

productService.updateProduct(productId, {
	title: "Cambiar nombre"
})

rta = productService.findOne(productId);
console.log(rta);
