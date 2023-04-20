export class Table {
    id : number;
    status: boolean;
    totalCustomer: number
    capacity: number = 6

    constructor(id, totalCustomer) {
        this.status = false
        this.id = id;
        this.totalCustomer = totalCustomer
    }
}