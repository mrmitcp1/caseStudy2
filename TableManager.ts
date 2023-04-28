import {Table} from "./table";
let index = 0
export class TableManager {
    listTable : Table[] = []
    constructor( ) {

    }
    addTable (totalCustomers:number) {
        index++
        let table=new Table(index,totalCustomers,0)
        this.listTable.push(table)
        if (table.totalCustomer > 0) {
            table.status = true

        }
    }
    removeTable(id:number){
    let index = this.listTable.findIndex(item=>item.id===id)
        this.listTable.splice(index,1)
        return this.listTable
    }
    CreatTable(numberOfTable:number){
        for (let i = 1; i < numberOfTable ; i++) {
            index ++
            // let table=new Table(i,0,0)
            this.listTable.push(new Table(i,0,0))
            // console.log(this.listTable)
        }
        console.log(this.listTable);
        return this.listTable
    }
    getTable(id:number){
        return this.listTable
    }
    getTableById(id:number){
        let table = this.listTable.find((item)=>item.id===id)
        return table ? table : 'khong co ban nay'
    }

    addCustomer(tableId:number ) {
      let checkCus = true
        if(this.listTable[tableId-1].totalCustomer === this.listTable[tableId -1].capacity){
            checkCus = false
        }
        if(checkCus){
            this.listTable[tableId-1].totalCustomer ++
            this.listTable[tableId-1].status = true
        }
        else {
            this.listTable[tableId-1].status = false
            console.log('Ban day, moi anh/chi qua ban khac')
        }
    }

    removeCustomers(tableId:number) {
        if (this.listTable[tableId-1].totalCustomer > 0) {
            this.listTable[tableId-1].totalCustomer--;
            if (this.listTable[tableId-1].totalCustomer=== 0) {
                this.listTable[tableId-1].status = false
            }
        }
    }


}
let tableManager = new TableManager()
// tableManager.addTable(1,2)
// tableManager.addTable(2,2)
// tableManager.addTable(3,4)
// tableManager.removeTable(1)
// console.log(tableManager.removeTable(1))
// // tableManager.removeCustomers(table2)
// tableManager.addCustomer(table)
// tableManager.addCustomer(table)
// console.log(tableManager.getTableById(1))
// console.log(tableManager.getTableById(3))
//
