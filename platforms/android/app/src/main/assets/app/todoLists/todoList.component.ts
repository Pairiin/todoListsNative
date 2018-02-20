import { Component, OnInit } from "@angular/core";


@Component({
    selector: "todoLists",
    moduleId: module.id,
    templateUrl: "./todoLists.component.html",
})
export class todoListsComponent implements OnInit {
    twoWay: string = "";
    todo = [];
    constructor() { }

    ngOnInit() {  }
    add () {
        this.todo.push(this.twoWay);
        // alert(this.twoWay);
    }
}