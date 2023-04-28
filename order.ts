import {Table} from "./table";
enum menu {
    bia=15000,
    ruou=30000,
    thitbo =50000,
    thitlon=40000,
    rau=30000,
    dau=20000,
    none=0

}
export class Order {
    table:menu = menu.none;
    // status:boolean;
    // items:Menu[]=[];
    // orderId:number
    //
    // constructor() {
    //     this.items=[]
    // }
    // setOrderId (tableId:number,totalCustomer:number){
    //     let table = new Table(tableId,totalCustomer)
    //    return  this.orderId=table.id
    // }
    // getOrderId(){
    //     return this.orderId
    // }
    // addMenuItem(menuItem:Menu){
    //     this.items.push(menuItem)
    // }
    // removeMenuItem(menuIem:Menu){
    //     let index = this.items.indexOf(menuIem)
    //     if (index!==-1){
    //         this.items.splice(index,1)
    //     }
    // }
    // getItems(){
    //     return this.items
    // }

}
