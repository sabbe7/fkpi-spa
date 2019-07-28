import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AccountService extends HttpService {

    constructor() {
        super(environment.apiUrl + 'account');
    }

    get() {
        return this.http.get(this.baseUrl);
    }

    children(id) {
        return this.http.get(this.joinUrl('children?id=' + id))
    }

}