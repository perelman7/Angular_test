var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let PhoneService = class PhoneService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:14184/api/phone";
    }
    getPhones() {
        return this.http.get(this.url + '/getAll');
    }
    getPhone(id) {
        return this.http.get(this.url + '/get/' + id);
    }
    createPhone(user) {
        return this.http.post(this.url + '/add', user);
    }
    updatePhone(user) {
        return this.http.put(this.url + '/edit/' + user.id, user);
    }
    deletePhone(id) {
        return this.http.delete(this.url + '/remove/' + id);
    }
};
PhoneService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], PhoneService);
export { PhoneService };
//# sourceMappingURL=phone.service.js.map