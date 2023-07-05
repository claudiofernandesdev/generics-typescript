abstract class Entity<Props> {
	constructor(protected props: Props) {}

	toJSON(): Props {
		return {...this.props};
	}
}

type CategoryProperties = { name: string; description: string };
class Category extends Entity<CategoryProperties> {}

const category1 = new Category({
	name: 'string',
	description: 'string',
});

console.log(category1.toJSON());

// *****************

type ProductProperties = { name: string; description: string; price: number };
class Product extends Entity<ProductProperties> {}

const product1 = new Product({
	name: 'string',
	description: 'string',
	price: 34.75,
});
console.log('------------------------------------')
console.log(product1.toJSON());
