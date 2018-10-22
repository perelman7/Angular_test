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
import { PhoneService } from './phone.service';
import { CharactService } from './characteristics/charact.service';
import { Phone } from './phone';
let PhoneComponent = class PhoneComponent {
    constructor(phoneService, charactService) {
        this.phoneService = phoneService;
        this.charactService = charactService;
        this.phone = new Phone();
        this.currentPage = 1;
        this.tableMode = true;
    }
    ngOnInit() {
        this.loadPhones();
    }
    ngDoCheck() {
        this.takeTenPhone(this.currentPage);
        this.getPages();
    }
    loadPhones() {
        this.phoneService.getPhones()
            .subscribe((data) => this.phones = data);
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
    editPhone(p) {
        this.phone = p;
        this.charactService.getCharacts()
            .subscribe((data) => this.characts = data);
    }
    cansel() {
        this.phone = new Phone();
        this.tableMode = true;
        this.characts = [];
    }
    deletePhone(p) {
        this.phoneService.deletePhone(p.id)
            .subscribe(data => this.loadPhones());
    }
    addPhone() {
        this.cansel();
        this.tableMode = false;
        this.charactService.getCharacts()
            .subscribe((data) => this.characts = data);
    }
    takeTenPhone(orderNum) {
        var index = orderNum - 1;
        if (this.phones.length > (9 + (index * 10))) {
            this.phoneForTable = this.phones.slice((0 + (index * 10)), (10 + (index * 10)));
        }
        else {
            this.phoneForTable = this.phones.slice((0 + (index * 10)));
        }
    }
    //work with checkbox
    toggleVisibilityColors(p) {
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
};
PhoneComponent = __decorate([
    Component({
        selector: 'phone',
        templateUrl: './phone.component.html',
        styleUrls: ['./phone.component.css'],
        providers: [
            PhoneService,
            CharactService
        ]
    }),
    __metadata("design:paramtypes", [PhoneService,
        CharactService])
], PhoneComponent);
export { PhoneComponent };
//# sourceMappingURL=phone.component.js.map