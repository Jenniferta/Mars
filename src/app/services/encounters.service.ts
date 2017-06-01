import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Encounter } from '../models/encounter';

@Injectable()
export class EncountersService {

  private ENCOUNTERS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) { }


  postData(encounter: Encounter) {
    const headers = new Headers({ 'Content-Type': 'application/json' }) ;
    const options = new RequestOptions({ headers });

    return this.http.post(this.ENCOUNTERS_URL, {encounter}, options)
      .map(this.extractData);
}

  getData() {
     return this.http.get(this.ENCOUNTERS_URL)
                      .map(this.extractEncounters);
  }

  extractEncounters(res: Response) {
      const encounters = res.json();
      return encounters;
  }

  extractData(res) {
    const Encounters = res.json();
    return Encounters;
  }

}