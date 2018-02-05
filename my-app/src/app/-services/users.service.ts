import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()

export class UsersService{

    constructor(
        private http: Http
    ){}

    getUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
}