import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NSEService{
    http:any;
    baseUrl: String;
    baseUrlChannels: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://newsapi.org/v1/articles?source=';
        this.baseUrlChannels ='https://newsapi.org/v1/sources';
    }



    getbaseUrlChannels(){

        return this.http.get(this.baseUrlChannels).map(res => res.json());    

    }

    getPosts(category){
        return this.http.get(this.baseUrl + category + '&apiKey=8a17e18aa7114c61a493b3ef3e71612b')
            .map(res => res.json());
    }
}