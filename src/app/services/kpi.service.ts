import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class KPIService extends HttpService {

    constructor() {
        super(environment.apiUrl + 'kpi');
    }

    get() {
        return this.http.get(this.joinUrl('get'));
    }

    find(id) {
        return this.http.get(this.joinUrl('find?id=' + id));
    }

    add(kpi) {
        return this.http.post(this.joinUrl('add'), kpi);
    }

    update(kpi) {
        return this.http.post(this.joinUrl('update'), kpi);
    }

    delete(id) {
        return this.http.delete(this.joinUrl('delete?id=' + id));
    }

    evaluate(id) {
        return this.http.get(this.joinUrl('evaluate?id=' + id));
    }

}