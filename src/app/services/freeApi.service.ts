import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable()
export class freeApiService {

    constructor(private http : HttpClient) {
    }

    getStories() : Observable<any> {
        return this.http.get('https://hacker-news.firebaseio.com/v0/item/121003.json');
    }
}