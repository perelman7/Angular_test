import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Charact } from './charact';

@Injectable()
export class CharactService {

    private url = "http://localhost:14184/api/charact";

    constructor(private http: HttpClient) { }

    getCharacts() {
        return this.http.get(this.url);
    }

    getCharact(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createCharact(charact: Charact) {
        return this.http.post(this.url, charact);
    }

    updateCharact(charact: Charact) {
        return this.http.put(this.url + '/' + charact.id, charact);
    }

    deleteCharact(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}