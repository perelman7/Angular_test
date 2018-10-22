var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';
let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
        this.user = new User();
        this.currentPage = 1;
        this.tableMode = true;
    }
    ngOnInit() {
        this.loadUsers();
    }
    ngDoCheck() {
        this.takeTenUsers(this.currentPage);
    }
    loadUsers() {
        this.userService.getUsers()
            .subscribe((data) => this.users = data);
    }
    getPages() {
        if (this.searchedList === undefined) {
            var res = this.users.length % 10;
            if (res == 0) {
                this.pages = this.users.length / 10;
            }
            else {
                this.pages = ((this.users.length - res) / 10) + 1;
            }
        }
        else {
            var res = this.searchedList.length % 10;
            if (res == 0) {
                this.pages = this.searchedList.length / 10;
            }
            else {
                this.pages = ((this.searchedList.length - res) / 10) + 1;
            }
        }
    }
    nextPage() {
        this.getPages();
        if (this.currentPage != this.pages) {
            this.currentPage++;
        }
    }
    previosePage() {
        if (this.currentPage != 1) {
            this.currentPage--;
        }
    }
    firstPage() {
        this.currentPage = 1;
    }
    lastPage() {
        this.getPages();
        this.currentPage = this.pages;
    }
    save() {
        if (this.user.id == null) {
            this.userService.createUser(this.user)
                .subscribe(data => this.loadUsers());
        }
        else {
            this.userService.updateUser(this.user)
                .subscribe(data => this.loadUsers());
        }
        this.cansel();
    }
    editUser(u) {
        this.user = u;
    }
    cansel() {
        this.user = new User();
        this.tableMode = true;
    }
    deleteUser(u) {
        this.userService.deleteUser(u.id)
            .subscribe(data => this.loadUsers());
    }
    addUser() {
        this.cansel();
        this.tableMode = false;
    }
    takeTenUsers(orderNum) {
        if (this.searchedList === undefined) {
            var index = orderNum - 1;
            if (this.users.length > (9 + (index * 10))) {
                this.usersForTable = this.users.slice((0 + (index * 10)), (10 + (index * 10)));
            }
            else {
                this.usersForTable = this.users.slice((0 + (index * 10)));
            }
        }
        else {
            var index = orderNum - 1;
            if (this.users.length > (9 + (index * 10))) {
                this.usersForTable = this.searchedList.slice((0 + (index * 10)), (10 + (index * 10)));
            }
            else {
                this.usersForTable = this.searchedList.slice((0 + (index * 10)));
            }
        }
    }
    filterUser(nameValue) {
        if (nameValue === undefined)
            this.searchedList = this.users;
        else {
            this.searchedList = [];
            for (let user of this.users) {
                if (user.name.toLowerCase().includes(nameValue.toLowerCase())) {
                    this.searchedList.push(user);
                }
            }
        }
        this.getPages();
    }
    sortByName() {
        if (this.searchedList === undefined) {
            this.users.sort(function (user1, user2) {
                if (user1.name.toLowerCase() > user2.name.toLowerCase())
                    return 1;
                if (user1.name.toLowerCase() < user2.name.toLowerCase())
                    return -1;
                return 0;
            });
        }
        else {
            this.searchedList.sort(function (user1, user2) {
                if (user1.name.toLowerCase() > user2.name.toLowerCase())
                    return 1;
                if (user1.name.toLowerCase() < user2.name.toLowerCase())
                    return -1;
                return 0;
            });
        }
    }
    sortByAge() {
        if (this.searchedList === undefined) {
            this.users.sort((user1, user2) => user1.age - user2.age);
        }
        else {
            this.searchedList.sort((user1, user2) => user1.age - user2.age);
        }
    }
};
UserComponent = __decorate([
    Component({
        selector: 'user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css'],
        providers: [UserService]
    }),
    __metadata("design:paramtypes", [UserService])
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map