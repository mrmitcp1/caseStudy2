export class Product {
    name : string;
    price:number;
    quantity:number
    day : Date
    constructor(name:string, quantity:number, price: number, day: Date) {
        this.name=name;
        this.price=price;
        this.quantity=quantity
        this.day = day
    }
}