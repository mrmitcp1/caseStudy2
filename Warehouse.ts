import {Product} from "./Product";

export class Warehouse {
    private products:Map<string,Product>=new Map()
    constructor() {
    }
    addProduct(product:Product){
       if (this.products.has(product.name)){
           this.products.get(product.name).quantity+=product.quantity
       }else {
           this.products.set(product.name, new Product(product.name,product.quantity,product.price,product.day))
       }
    }
    getProducts(){
        return this.products.values()
    }
    findName(name:string){
        for (let product of this.products.values()){
            if (product.name===name){
                return product;
            }
        }return (`no ${name} in ware house`)
    }
}
let product = new Product('beer',100,10000,  new Date('2023-02-23'))
let product1 = new Product('beer',100,10000, new Date('2023-01-12'))
let product3 = new Product('beer',100,10000, new Date('2023-02-12'))
let product4 = new Product('ken',10,10000, new Date('2023-03-03'))
let product5 = new Product('ken',10,10000,new Date('2023-03-11'))
let wareHouse = new Warehouse()
wareHouse.addProduct(product)
wareHouse.addProduct(product1)
wareHouse.addProduct(product3)
wareHouse.addProduct(product4)
wareHouse.addProduct(product5)
console.log(wareHouse.findName('u'))