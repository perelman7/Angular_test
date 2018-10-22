import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../user/user.service';
import { PhoneService } from '../phone/phone.service';
import { ExcelService } from './excel.service';
import { User } from '../user/user';
import { Phone } from '../phone/phone';

@Component({
    selector: 'report',
    templateUrl: './report.component.html',
    providers: [UserService, PhoneService, ExcelService]
})
export class ReportComponent implements OnInit, DoCheck {

    users?: User[];
    phones?: Phone[];
    middlePrice?: number;
    middleAge?: number;
    result?: any[];
    valueCompany?: number;

    constructor(
        private userService: UserService,
        private phoneService: PhoneService,
        private excelService: ExcelService
    ) { }

    

    ngOnInit(): void {
        this.phoneService.getPhones()
            .subscribe((data: Phone[]) => this.phones = data);
        this.userService.getUsers()
            .subscribe((data: User[]) => this.users = data);
    }

    ngDoCheck(): void {
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
        ]
        console.log(this.result)
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

    exportAsXLSX(): void {
        this.generateReport();
        this.excelService.exportAsExcelFile(this.result, 'report');
    }
}