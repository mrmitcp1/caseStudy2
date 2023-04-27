import {Menu} from "./menu";
import {TableManager} from "./TableManager";
import {Warehouse} from "./Warehouse";
import {Order} from "./order";
import {Table} from "./table";
let table = new TableManager()
console.table(table.CreatTable(9))
let totalMoney=0
let readlineSync = require("readline-sync");
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
                table.addTable(customers)
                    console.table(table.listTable)
                    break
                }
                case 2:{
                    let removeTable= +readlineSync.question("nhap ID ban muon xoa:");
                    table.removeTable(removeTable)
                    console.table(table.listTable)
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
                table.addCustomer(tableId)
                console.table(table.listTable)
                break
            }
            case 2:{
                let tableId = +readlineSync.question("nhap ID ban:")
                table.removeCustomers(tableId)
                console.table(table.listTable)
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

            }
        }
    }

}
