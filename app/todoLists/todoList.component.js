"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todoListsComponent = (function () {
    function todoListsComponent() {
        this.twoWay = "";
        this.todo = [];
    }
    todoListsComponent.prototype.ngOnInit = function () { };
    todoListsComponent.prototype.add = function () {
        this.todo.push(this.twoWay);
        // alert(this.twoWay);
    };
    todoListsComponent = __decorate([
        core_1.Component({
            selector: "todoLists",
            moduleId: module.id,
            templateUrl: "./todoLists.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], todoListsComponent);
    return todoListsComponent;
}());
exports.todoListsComponent = todoListsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0xpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kb0xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxEO0lBR0k7UUFGQSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxFQUFFLENBQUM7SUFDTSxDQUFDO0lBRWpCLHFDQUFRLEdBQVIsY0FBYyxDQUFDO0lBQ2YsZ0NBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixzQkFBc0I7SUFDMUIsQ0FBQztJQVRRLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FVOUI7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRvZG9MaXN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdG9kb0xpc3RzLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyB0b2RvTGlzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdHdvV2F5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgdG9kbyA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgIH1cclxuICAgIGFkZCAoKSB7XHJcbiAgICAgICAgdGhpcy50b2RvLnB1c2godGhpcy50d29XYXkpO1xyXG4gICAgICAgIC8vIGFsZXJ0KHRoaXMudHdvV2F5KTtcclxuICAgIH1cclxufSJdfQ==