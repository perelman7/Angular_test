import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService]
})
export class UserComponent implements OnInit, DoCheck {

    user: User = new User();
    users?: User[];
    usersForTable?: User[];
    pages?: number;
    currentPage: number = 1;
    tableMode: boolean = true;

    nameValue?: string;
    searchedList?: User[];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.loadUsers();
    }

    ngDoCheck() {
        this.takeTenUsers(this.currentPage);
    }

    loadUsers() {
        this.userService.getUsers()
            .subscribe((data: User[]) => this.users = data);
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

    editUser(u: User) {
        this.user = u;
    }

    cansel() {
        this.user = new User();
        this.tableMode = true;
    }

    deleteUser(u: User) {
        this.userService.deleteUser(u.id)
        .subscribe(data => this.loadUsers());
    }

    addUser() {
        this.cansel();
        this.tableMode = false;
    }
    
    takeTenUsers(orderNum: number) {
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

    filterUser(nameValue: string) {
        if (nameValue === undefined) this.searchedList = this.users;

        else {
            this.searchedList = [] as User[];
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
                if (user1.name.toLowerCase() > user2.name.toLowerCase()) return 1;
                if (user1.name.toLowerCase() < user2.name.toLowerCase()) return -1;
                return 0;
            });
        }
        else {
            this.searchedList.sort(function (user1, user2) {
                if (user1.name.toLowerCase() > user2.name.toLowerCase()) return 1;
                if (user1.name.toLowerCase() < user2.name.toLowerCase()) return -1;
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
}