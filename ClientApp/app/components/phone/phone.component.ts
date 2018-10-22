import { Component, OnInit, DoCheck } from '@angular/core';
import { PhoneService } from './phone.service';
import { CharactService } from './characteristics/charact.service';
import { Charact } from './characteristics/charact';
import { Phone } from './phone';
import { forEach } from '@angular/router/src/utils/collection';
import { from } from 'rxjs';

@Component({
    selector: 'phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.css'],
    providers: [
        PhoneService,
        CharactService
    ]
})
export class PhoneComponent implements OnInit, DoCheck {

    phone: Phone = new Phone();
    phones?: Phone[];
    phoneForTable?: Phone[];
    pages?: number;
    currentPage: number = 1;
    tableMode: boolean = true;
    characts?: Charact[];
    checkedColors?: string;

    constructor(
        private phoneService: PhoneService,
        private charactService: CharactService
    ) { }

    ngOnInit(): void {
        this.loadPhones();
    }

    ngDoCheck() {
        this.takeTenPhone(this.currentPage);
        this.getPages();
    }

    loadPhones() {
        this.phoneService.getPhones()
            .subscribe((data: Phone[]) => this.phones = data);
    }

    getPages() {
        var res = this.phones.length % 10;
        if (res == 0) {
            this.pages = this.phones.length / 10;
        }
        else {
            this.pages = ((this.phones.length - res) / 10) + 1;
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

        if (this.phone.id == null) {
            this.phoneService.createPhone(this.phone)
                .subscribe(data => this.loadPhones());
        }
        else {
            this.phoneService.updatePhone(this.phone)
                .subscribe(data => this.loadPhones());
        }
        this.cansel();
    }

    editPhone(p: Phone) {
        this.phone = p;
        this.charactService.getCharacts()
            .subscribe((data: Charact[]) => this.characts = data);
    }

    cansel() {
        this.phone = new Phone();
        this.tableMode = true;
        this.characts = [] as Charact[];
    }

    deletePhone(p: Phone) {
        this.phoneService.deletePhone(p.id)
            .subscribe(data => this.loadPhones());
    }

    addPhone() {
        this.cansel();
        this.tableMode = false;
        this.charactService.getCharacts()
            .subscribe((data: Charact[]) => this.characts = data);
    }

    takeTenPhone(orderNum: number) {
        var index = orderNum - 1;
        if (this.phones.length > (9 + (index * 10))) {
            this.phoneForTable = this.phones.slice((0 + (index * 10)), (10 + (index * 10)));
        }
        else {
            this.phoneForTable = this.phones.slice((0 + (index * 10)));
        }
    }

    //work with checkbox
    toggleVisibilityColors(p: Charact) {
        p.checkColor = !p.checkColor;
        this.getCheckedColors();
        this.phone.colorPhone = this.checkedColors;
    }

    getCheckedColors() {
        this.checkedColors = "";
        for (let u of this.characts) {
            if (u.checkColor) {
                this.checkedColors += u.color + ", ";
            }
        }
        this.checkedColors = this.checkedColors.substring(0, this.checkedColors.length - 2);
    }
}