import {Table} from "./table";

export class TableManager {
    listTable : Table[] = []
    constructor( ) {

    }
    addTable(table :Table){
      this.listTable.push(table)
        if(table.totalCustomer > 0){
            table.status = true
        }
    }
    getTable(id:number){
        return this.listTable
    }
    getTableById(id:number){
        let table = this.listTable.find((item)=>item.id===id)
        return table ? table : 'khong co ban nay'
    }

    addCustomer(table: Table) {
      let checkCus = true
        if(table.totalCustomer === table.capacity){
            checkCus = false
        }
        if(checkCus){
            table.totalCustomer ++
            table.status = true
        }
        else {
            table.status = false
            console.log('Ban day, moi anh/chi qua ban khac')
        }
    }

    removeCustomers(table : Table) {
        if (table.totalCustomer > 0) {
            table.totalCustomer--;
            if (table.totalCustomer=== 0) {
                table.status = false
            }
        }
    }

}
let tableManager = new TableManager()
let table = new Table(1,2)
let table1 = new Table(2,0)
let table2 = new Table(3,1)
tableManager.addTable(table1)
tableManager.addTable(table)
tableManager.addTable(table2)
tableManager.removeCustomers(table2)
tableManager.addCustomer(table)
tableManager.addCustomer(table)
console.log(tableManager.getTableById(1))
console.log(tableManager.getTableById(3))

