import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LOCALE_ID, Injectable } from '@angular/core';
import { mapValues, trim } from 'lodash';
import { map } from 'rxjs/operators';
import { Shared } from '../shared';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

export class HttpService {

    http = Shared.injector.get(HttpClient);
    local = Shared.injector.get(LOCALE_ID);

    baseUrl;
    jwtHelper = new JwtHelperService();
    decodedToken: any;

    constructor(baseUrl: string = '') {
        this.baseUrl = baseUrl;
    }

    protected joinUrl(url: string) {

        if (/^http(s)*:\/\//.test(url)) {
            return url;
        }

        return this.baseUrl + '/' + trim(url, '/');
    }
}