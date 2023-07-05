interface RepositoryInterface<T, U = boolean> {
	findById(id: string): T;
	findAll(): T[];
	destroy(id: string): U;
}

const object1: RepositoryInterface<string, object> = {
	findById: function (id: string): string {
		throw new Error('Function not implemented');
	},
	findAll: function (): string[] {
		throw new Error('Function not implemented');
	},
	destroy: function (id: string): object {
		throw new Error('Function not implemented');
	},
};

class Product {}
interface ProductRepositoryInterface extends RepositoryInterface<Product, Product> {}

class ProductRepository implements ProductRepositoryInterface {
    findById(id: string): Product {
        return new Product;
    }
    findAll(): Product[] {
        return [new Product];
    }
    destroy(id: string): Product {
        return new Product;
    }
    
}

class User {}
interface UserRepositoryInterface extends RepositoryInterface<User, boolean> {}

class UserRepository implements UserRepositoryInterface {
	findById(id: string): User {
		return new User();
	}
	findAll(): User[] {
		return [new User()];
	}
	destroy(id: string): boolean {
		return true;
	}
}

export {};
