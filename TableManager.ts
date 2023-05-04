import {Table} from "./table";
let index = 0
export class TableManager {
    listTable : Table[] = []
    constructor( ) {

    }
    addTable (totalCustomers:number) {
        index++
        if (totalCustomers > 6){
            console.log(`max 6 people`)
        }else{
            let table= new Table(index,totalCustomers,0)
            this.listTable.push(table)
            table.status=true
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
            this.listTable.push(new Table(i,0,0))
        }
        return this.listTable
    }
    getTable(id:number){
        return this.listTable
    }
    getTableById(id:number){
        let table = this.listTable.find((item)=>item.id===id)
        return table ? table : 'table is not available'
    }

    addCustomer(tableId:number ) {
        let checkCus = true
        let table = this.getTableById(tableId)
        if(table instanceof Table){
            if(table.totalCustomer === table.capacity){
                checkCus = false
            }
            if(checkCus){
                table.totalCustomer ++
                table.status = true
            }
            else {
                table.status = false
                console.log('The table is full, please move to another table')
            }
        }
    }

    removeCustomers(tableId:number) {
        let table = this.getTableById(tableId)
        if(table instanceof Table){
        if (table.totalCustomer > 0) {
            table.totalCustomer--;
            if (table.totalCustomer=== 0) {
                table.status = false
            }
        }
    }
    }
resetTable(tableId:number){
        let table = this.getTableById(tableId)
    if (table instanceof Table){
        table.status=false
        table.eating=0;
        table.totalCustomer=0
    }
}

}
