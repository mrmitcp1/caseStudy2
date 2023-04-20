export class Product {
    name : string;
    price:number;
    quantity:number
    constructor(name:string, quantity:number, price: number) {
        this.name=name;
        this.price=price;
        this.quantity=quantity
    }
}