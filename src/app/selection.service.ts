import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Selection} from './common/selection';
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/find";
import "rxjs/add/observable/throw";


@Injectable()
export class SelectionService {

  constructor(private http: Http) { }

  getRaids() {
    return this.http.get('assets/data/raids.json')
      .toPromise()
      .then(res => <Selection[]> res.json().data)
      .then(data => { return data; });
  }

  getOneRaid(idxy: String){
    return this.http.get('assets/data/raids.json')
      .map(response => <Selection> response.json().data)
  }

}
