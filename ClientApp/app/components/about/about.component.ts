import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

    ngOnInit(): void {
    }

    constructor() { }

    users: User[] = [
        new User(1, "Vasya", 21),
        new User(2, "Olya", 26),
        new User(3, "Kolya", 41),
        new User(4, "Annya", 22),
        new User(5, "Katya", 29)
    ]
    checkedUsers: string;

    toggleVisibility(us: User) {
        us.checked = !us.checked;
        this.getChecked();
    }

    getChecked() {
        this.checkedUsers = "";
        for (let u of this.users) {
            if (u.checked) {
                this.checkedUsers += u.name + ", ";
            }
        }
        this.checkedUsers = this.checkedUsers.substring(0, this.checkedUsers.length - 2);
    }
}