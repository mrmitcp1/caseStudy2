export class MangerMenu {
    private _menuItemId: string;
    private _quantity: number;
    items:MangerMenu[]=[];
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
    addMenuItem(menuItem:MangerMenu){
        this.items.push(menuItem)
    }
    removeMenuItem(menuIem:MangerMenu){
        let index = this.items.indexOf(menuIem)
        if (index!==-1){
            this.items.splice(index,1)
        }
    }
}
