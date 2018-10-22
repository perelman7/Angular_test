﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable()
export class UserService {

    private url = "http://localhost:14184/api/values";

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.url);
    }

    getUser(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createUser(user: User) {
        return this.http.post(this.url, user);
    }

    updateUser(user: User) {
        return this.http.put(this.url + '/' + user.id, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}