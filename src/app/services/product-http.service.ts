import { ur } from "@faker-js/faker/.";
import { UpdateProductDto, CreateProductDto } from "../dtos/produc.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";
import { P } from "@faker-js/faker/dist/airline-CBNP41sR";

export class ProductHttpService implements ProductService{

	private url = "https://api.escuelajs.co/api/v1/products"

	async getAll(): Product[] {
		const data : Product[] = await fetch(url)
		return data
	}
	update(id: Product["id"], changes: UpdateProductDto): Product {
		throw new Error("Method not implemented.");
	}
	create(dto: CreateProductDto): Product {
		throw new Error("Method not implemented.");
	}
	findOne(id: Product["id"]): Product | undefined {
		throw new Error("Method not implemented.");
	}

}
