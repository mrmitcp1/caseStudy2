
import {TableManager} from "./TableManager";
import {Warehouse} from "./Warehouse";
import {Order} from "./order";
import {Table} from "./table";
let Table1 = new TableManager()
let bill = 0;
let listOder=[]
let managerTable=new TableManager()
function AddOder() {
    let idTable1 = +readlineSync.question("nhap ID ban:")
    console.log(`===========Menu==========
       1. bia=15000,
       2. ruou=30000,
       3. thitbo =50000,
       4. thitlon=40000,
       5. rau=30000,
       6. dau=20000,
    `)
    let oder= +readlineSync.question("nhap:");
    switch (oder) {
        case 1:addBill(15000,idTable1)
            break
        case 2: addBill(30000,idTable1)
            break
        case 3: addBill(50000,idTable1)
            break
        case 4: addBill(40000,idTable1)
            break
        case 5:addBill(30000,idTable1)
            break
        case 6: addBill(20000,idTable1)
            break

    }
}
function RemoveOder() {
    let idTable = +readlineSync.question("nhap ID ban:")
    console.log(`===========Menu==========
       1. bia=15000,
       2. ruou=30000,
       3. thitbo =50000,
       4. thitlon=40000,
       5. rau=30000,
       6. dau=20000,
    `)
    let oder= +readlineSync.question("nhap:");

    switch (oder) {
        case 1: removeBill(15000,idTable)
            break
        case 2: removeBill(30000,idTable)
            break
        case 3: removeBill(50000,idTable)
            break
        case 4: removeBill(40000,idTable)
            break
        case 5:removeBill(30000,idTable)
            break
        case 6:removeBill(20000,idTable)
            break


    }
}
function addBill(cost:number,idTable:number) {
    let table = Table1.listTable[idTable-1]
    if (table.totalCustomer>0){
        listOder.push(cost)
        bill+=cost
        table.eating=bill;

        console.table(Table1.listTable)
        }else {
            console.log(`khong co nguoi trong ban`)

        }
}
function removeBill(cost:number,idTable:number) {
    let str :string =''
    let table = Table1.listTable[idTable-1]
    for (let i = 0; i < listOder.length; i++) {
        if (cost===listOder[i]){
            bill-=cost
            table.eating=bill;
            console.table(Table1.listTable)
            str =''
            break

        }else {
            str=''
            str  = ' khong co mon trong ban'
        }
        console.log(str)
        }
    }




console.table(Table1.CreatTable(5))
let totalMoney=0
let readlineSync = require("readline-sync");
let status: boolean=true

console.log("listtable----",Table1.listTable)
while (status){
console.log(`
            ===========hello===========
         1. lam viec voi ban
         2. lam viec voi nguoi
         3. oder
         4. lam viec voi kho
`)
let init = +readlineSync.question("nhap:");
switch (init) {
    case 1:{
        console.log(`lam viec voi ban
                1.them ban
                2.xoa ban
      `)
        let managerTable = +readlineSync.question("nhap:");
        switch (managerTable){
            case 1: {
                let customers = +readlineSync.question("nhap so nguoi:");
                Table1.addTable(customers)
                    console.table(Table1.listTable)
                    break
                }
                case 2:{
                    let removeTable= +readlineSync.question("nhap ID ban muon xoa:");
                    Table1.removeTable(removeTable)
                    console.table(Table1.listTable)
                    break
                }
        }break
    }
    case 2:{
        console.log(` lam viec voi nguoi
                1. them nguoi
                2. xoa nguoi
        `)
        let managerCustomers = +readlineSync.question("nhap:");
        switch (managerCustomers) {
            case 1:{
                let tableId = +readlineSync.question("nhap ID ban:")
                Table1.addCustomer(tableId)
                console.table(Table1.listTable)
                break
            }
            case 2:{
                let tableId = +readlineSync.question("nhap ID ban:")
                Table1.removeCustomers(tableId)
                console.table(Table1.listTable)
                break
            }
        }
        break
    }
    case 3:{
        console.log(`oder
                1.them mon
                2.xoa mon
        `)
        let managerOder = +readlineSync.question("nhap:");
        switch (managerOder) {
            case 1:{
                AddOder()
                break
            }
            case 2:{
                RemoveOder()
                break
            }
        }
    }

}
}