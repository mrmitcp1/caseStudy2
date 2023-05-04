import {Menu} from "./menu";

export class ManagerMenu {
    listMenu : Menu[]=[]
    constructor() {
    }
    showListMenu(){
        return this.listMenu
    }
    addMenu(menu:Menu){
        this.listMenu.push(menu)
    }
    findMenu(name:string){
       return  this.listMenu.findIndex(item=>item.name===name)

    }
    deleteMenu(name:string){
        let index = this.findMenu(name)
        if (index!==-1){
            this.listMenu.splice(index,1)
        }
    }
    upDateCost(name:string,cost:number){
        let index=this.findMenu(name)
        if (index!==1){
            this.showListMenu()[index].cost=cost
        }
    }
}
