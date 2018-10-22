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
import { User } from '../user/user';
let AboutComponent = class AboutComponent {
    constructor() {
        this.users = [
            new User(1, "Vasya", 21),
            new User(2, "Olya", 26),
            new User(3, "Kolya", 41),
            new User(4, "Annya", 22),
            new User(5, "Katya", 29)
        ];
    }
    ngOnInit() {
    }
    toggleVisibility(us) {
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
};
AboutComponent = __decorate([
    Component({
        selector: 'about',
        templateUrl: './about.component.html',
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map