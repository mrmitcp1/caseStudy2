import {TableManager} from "./TableManager";
import {Warehouse} from "./Warehouse";
import {Table} from "./table";


let newTable = new TableManager()
let wareHouse = new Warehouse()
let bill = 0;
let listOder = []


function AddOder() {
    let idTable1 = +readlineSync.question("input id of table:")
    console.log(`===========Menu==========
       1. beer =15000,
       2. wine =30000,
       3. beef = 50000
       4. meat =40000,
       5. vegetable = 30000,
       6. tofu = 20000,
    `)
    let oder = +readlineSync.question("input number :");
    switch (oder) {
        case 1:
            addBill(15000,'beer', idTable1)
            break
        case 2:
            addBill(30000,'wine', idTable1)
            break
        case 3:
            addBill(50000,'beef', idTable1)
            break
        case 4:
            addBill(40000,'meat', idTable1)
            break
        case 5:
            addBill(30000,'vegetable', idTable1)
            break
        case 6:
            addBill(20000,'tofu', idTable1)
            break
        default:
            break
    }
}

function RemoveOder() {
    let idTable = +readlineSync.question("input id of table :")
    console.log(`===========Menu==========
       1. beer=15000,
       2. wine=30000,
       3. beef =50000,
       4. meat=40000,
       5. vegetable=30000,
       6. tofu=20000,
    `)
    let oder = +readlineSync.question("input number :");

    switch (oder) {
        case 1:
            removeBill(15000, idTable)
            break
        case 2:
            removeBill(30000, idTable)
            break
        case 3:
            removeBill(50000, idTable)
            break
        case 4:
            removeBill(40000, idTable)
            break
        case 5:
            removeBill(30000, idTable)
            break
        case 6:
            removeBill(20000, idTable)
            break


    }
}

function addBill(cost: number, menu:string, idTable: number) {
    let table = newTable.getTableById(idTable)
    if (table instanceof Table) {
        if (table.totalCustomer > 0) {
            listOder.push(cost)
            bill += cost
            table.eating = bill;

            console.table(newTable.listTable)
        } else {
            console.log(`nobody at the table`)

        }
    }
}

function removeBill(cost: number, idTable: number) {
    let str: string = ''
    let table = newTable.getTableById(idTable)
    if (table instanceof Table) {
        for (let i = 0; i < listOder.length; i++) {
            if (cost === listOder[i]) {
                bill -= cost
                table.eating = bill;
                console.table(newTable.listTable)
                str = ''
                break

            } else {
                str = ''
                str = ' khong co mon trong ban'
            }
            console.log(str)
        }
    }
}

console.table(newTable.CreatTable(5))
let totalMoney = 0
let readlineSync = require("readline-sync");
let status: boolean = true
while (status) {
    console.log(`
            ===========hello===========
         1. tables
         2. customers
         3. oder
         4. ware house
`)
    let init = +readlineSync.question("input number :");
    switch (init) {
        case 1: {
            console.log(`table : 
                1.add new table
                2.delete table
                3.check information of table
      `)
            let managerTable = +readlineSync.question("input number : ");
            switch (managerTable) {
                case 1: {
                    let customers = +readlineSync.question("input customers : ");
                    newTable.addTable(customers)
                    console.table(newTable.listTable)
                    break
                }
                case 2: {
                    let removeTable = +readlineSync.question("input ID of table want to delete : ");
                    newTable.removeTable(removeTable)
                    console.table(newTable.listTable)
                    break
                }
                case 3: {
                    let checkTable = +readlineSync.question("input ID of table want to check : ");
                    console.table(newTable.getTableById(checkTable))
                    break
                }
                default:
                    break
            }
            break
        }
        case 2: {
            console.log(` customers : 
                1. add customer
                2. remove customer
        `)
            let managerCustomers = +readlineSync.question("input number : ");
            switch (managerCustomers) {
                case 1: {
                    let tableId = +readlineSync.question("input id of table : ")
                    newTable.addCustomer(tableId)
                    console.table(newTable.listTable)
                    break
                }
                case 2: {
                    let tableId = +readlineSync.question("input id of table : ")
                    newTable.removeCustomers(tableId)
                    console.table(newTable.listTable)
                    break
                }
                default:
                    break
            }
            break
        }
        case 3: {
            console.log(`oder : 
                1.add oder
                2.delete oder
                3.pay
        `)
            let managerOder = +readlineSync.question("input number : ");
            switch (managerOder) {
                case 1: {
                    AddOder()
                    break
                }
                case 2: {
                    RemoveOder()
                    break
                }
                case 3 :{
                    let tableId = +readlineSync.question("input id of table : ")
                    console.table(newTable.getTableById(tableId))
                    newTable.resetTable(tableId)
                    console.table(newTable.listTable)
                    break
                }
                default:
                    break
            }
        break
        }

        case 4:
            console.log(` ware house : 
                1. add product
                2. fix product
                3. delete product
                4. show all products
                5. find product by name
                6. total import price
                
        `)
            let managerWarehouse = +readlineSync.question("input number ");
            switch (managerWarehouse) {
                case 1: {
                    let name = readlineSync.question("name of product: ")
                    let quantity = +readlineSync.question("quantity od product: ")
                    let price = +readlineSync.question("price of product: ")
                    let day = readlineSync.question("day of product: ")

                    wareHouse.addProduct(name, quantity, price, day)
                    console.log(wareHouse)
                    break
                }
                case 2: {
                    let name = readlineSync.question("name of product: ")
                    let quantity = +readlineSync.question("quantity od product: ")
                    let price = +readlineSync.question("price of product: ")
                    let day = readlineSync.question("day of product: ")
                    wareHouse.updateProducts(name,quantity,price,day)
                    console.log(wareHouse)
                    break
                }
                case 3:{
                    let name = readlineSync.question("name of product: ")
                    wareHouse.deleteProducts(name)
                    console.log(wareHouse)
                    break
                }
                case 4:{

                    console.log("Product List:");
                    console.log("========================================================");
                    console.log("| Name\t| Quantity\t| Price\t| Date\t\t|");
                    console.log("========================================================");
                    for (let product of wareHouse.getProducts()) {
                        console.log(`| ${product.name}\t| ${product.quantity}\t\t| ${product.price}\t| ${product.day}\t|`);
                    }
                    console.log("========================================================");

                    console.log(`Total Import Price: ${wareHouse.getTotalImportPrice()}`);
                    break
                }
                case 5:{
                    let name = readlineSync.question("name of product: ")
                    console.log(wareHouse.findName(name))
                    break
                }
                case 6:{
                    console.log(wareHouse.getTotalImportPrice())
                    break
                }
                default:
                    break

            }
    }

}