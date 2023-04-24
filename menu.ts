export class Menu {
    private _menuItemId: string;
    private _title: string;

    private _price : number;

    constructor(menuItemId: string, title: string, price: number) {
        this._menuItemId = menuItemId;
        this._title = title;
        this._price = price;
    }

    get menuItemId(): string {
        return this._menuItemId;
    }

    set menuItemId(value: string) {
        this._menuItemId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
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
let menu = new Menu('GS1','duoi bo',40000)