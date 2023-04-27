export class Menu {
    private _menuItemId: string;
    private _quantity: number;

    private _price : number;

    constructor(menuItemId: string, quantity: number, price: number) {
        this._menuItemId = menuItemId;
        this._quantity = quantity;
        this._price = price;
    }

    get menuItemId(): string {
        return this._menuItemId;
    }

    set menuItemId(value: string) {
        this._menuItemId = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }


    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
    upDatePrice(newPrice){
        this._price=newPrice
    }
}
let menu = new Menu('GS1', 1, 40000)
console.log(menu.menuItemId)