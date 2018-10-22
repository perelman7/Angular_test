import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Phone } from './phone';

@Injectable()
export class PhoneService {

    private url = "http://localhost:14184/api/phone";

    constructor(private http: HttpClient) { }

    getPhones() {
        return this.http.get(this.url + '/getAll');
    }

    getPhone(id: number) {
        return this.http.get(this.url + '/get/' + id);
    }

    createPhone(user: Phone) {
        return this.http.post(this.url + '/add', user);
    }

    updatePhone(user: Phone) {
        return this.http.put(this.url + '/edit/' + user.id, user);
    }

    deletePhone(id: number) {
        return this.http.delete(this.url + '/remove/' + id);
    }
}