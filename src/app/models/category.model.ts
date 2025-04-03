import { NumberModule } from "@faker-js/faker/.";

export interface Category {
	id:         number | NumberModule;
	name:       string;
	image:      string;
}
