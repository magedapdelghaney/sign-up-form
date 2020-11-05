import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _jsonURL = '../assets/data.json';

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return this.http.get(this._jsonURL)
      .pipe(map((result: any) => result.countries));
  }

  public getStates(countryId: number): Observable<State[]> {
    return this.http.get(this._jsonURL)
      .pipe(map((response: any) => response.states.filter(state => state.countryId === countryId)));
  }
}
