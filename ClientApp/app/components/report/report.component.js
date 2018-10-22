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
import { UserService } from '../user/user.service';
import { PhoneService } from '../phone/phone.service';
import { ExcelService } from './excel.service';
let ReportComponent = class ReportComponent {
    constructor(userService, phoneService, excelService) {
        this.userService = userService;
        this.phoneService = phoneService;
        this.excelService = excelService;
    }
    ngOnInit() {
        this.phoneService.getPhones()
            .subscribe((data) => this.phones = data);
        this.userService.getUsers()
            .subscribe((data) => this.users = data);
    }
    ngDoCheck() {
        this.middleAgeCount();
        this.middlePriceCount();
        this.companyCount();
    }
    generateReport() {
        var index = 0;
        this.result = [
            { индекс: ++index, название: "Количество пользователей", значение: this.users.length },
            { индекс: ++index, название: "Количество телефонов", значение: this.phones.length },
            { индекс: ++index, название: "средняя цена на телефоны", значение: this.middlePrice },
            { индекс: ++index, название: "средний возраст пользователей", значение: this.middleAge },
            { индекс: ++index, название: "Количество компаний", значение: this.valueCompany },
        ];
        console.log(this.result);
    }
    middlePriceCount() {
        this.middlePrice = 0;
        for (let p of this.phones) {
            if (p.price !== null) {
                this.middlePrice += p.price;
            }
        }
        this.middlePrice = Math.round(this.middlePrice / this.phones.length);
    }
    middleAgeCount() {
        this.middleAge = 0;
        for (let u of this.users) {
            if (u.age !== null) {
                this.middleAge += u.age;
            }
        }
        this.middleAge = Math.round(this.middleAge / this.users.length);
    }
    companyCount() {
        var companies = new Set();
        for (let p of this.phones) {
            if (p.company !== null) {
                companies.add(p.company);
            }
        }
        this.valueCompany = companies.size;
    }
    exportAsXLSX() {
        this.generateReport();
        this.excelService.exportAsExcelFile(this.result, 'report');
    }
};
ReportComponent = __decorate([
    Component({
        selector: 'report',
        templateUrl: './report.component.html',
        providers: [UserService, PhoneService, ExcelService]
    }),
    __metadata("design:paramtypes", [UserService,
        PhoneService,
        ExcelService])
], ReportComponent);
export { ReportComponent };
//# sourceMappingURL=report.component.js.map