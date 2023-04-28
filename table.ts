enum menu {
    bia=15000,
    ruou=30000,
    thitbo =50000,
    thitlon=40000,
    rau=30000,
    dau=20000,
    none=0

}
export class Table {
    id : number;
    status: boolean;
    totalCustomer: number
    capacity: number = 6
    eating : menu = menu.none
    constructor(id, totalCustomer , eating:menu) {
        this.status = false
        this.id = id;
        this.totalCustomer = totalCustomer
        // this.eating=eating
    }
}