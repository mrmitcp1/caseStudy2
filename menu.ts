export class Menu {
    private _name:string;
    private _cost:number

    constructor(name: string, cost: number) {
        this._name = name;
        this._cost = cost;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get cost(): number {
        return this._cost;
    }

    set cost(value: number) {
        this._cost = value;
    }
}