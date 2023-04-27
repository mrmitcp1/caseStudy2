import {Table} from "./table";
import {Menu} from "./menu";

export class Order {
    table:Table;
    status:boolean;
    items:Menu[]=[];
    orderId:number

    constructor() {
        this.items=[]
    }
    setOrderId (tableId:number,totalCustomer:number){
        let table = new Table(tableId,totalCustomer)
       return  this.orderId=table.id
    }
    getOrderId(){
        return this.orderId
    }
    addMenuItem(menuItem:Menu){
        this.items.push(menuItem)
    }
    removeMenuItem(menuIem:Menu){
        let index = this.items.indexOf(menuIem)
        if (index!==-1){
            this.items.splice(index,1)
        }
    }
    getItems(){
        return this.items
    }
}
// let order = new Order();
// let menu1=new Menu('GS1:duoibo', 1, 40000)
// let menu2=new Menu('GS2', 1, 30000)
// let menu3=new Menu('GS3', 1, 50000)
// order.addMenuItem(menu1)
// order.addMenuItem(menu2)
// order.addMenuItem(menu3)
// order.removeMenuItem(menu2)
// console.log(order.getItems())