import {Product} from "./Product";

export class Warehouse {
    private products: Map<string, Product> = new Map()

    constructor() {
    }

    addProduct(name: string, quantity: number, price: number, day: Date) {
        if (this.products.has(name)) {
            this.products.get(name).quantity += quantity
        } else {
            this.products.set(name, new Product(name, quantity, price, day))
        }
    }

    getProducts() {
        return this.products.values()
    }

    findName(name: string) {
        for (let product of this.products.values()) {
            if (product.name === name) {
                return product;
            }
        }
        return (`no ${name} in ware house`)
    }

    deleteProducts(name: string) {
        let product = this.products.get(name)
        if (!product) {
            console.log(`no ${name} in ware house`)
        } else return this.products.delete(name)
    }

    updateProducts(name: string, quantity: number, price: number, day: Date) {
        let exitingProduct = this.findName(name);
        if (exitingProduct instanceof Product) {
            exitingProduct.price = price;
            exitingProduct.day = day;
            exitingProduct.quantity = quantity
        } else {
            console.log(`no ${name} in ware house`)
        }
    }
    getTotalImportPrice(){
        let total = 0;
        for (let product of this.products.values()){
            total+=product.quantity*product.price
        }
        return total
    }
}
