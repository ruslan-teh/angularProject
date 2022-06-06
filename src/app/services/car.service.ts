import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICar} from "../models";
import {Observable} from "rxjs";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  create(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car);
  };

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars);
  };

  getById(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`);
  };

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`);
  };

  updateById(id: number | undefined, carForUpdate: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`, carForUpdate)
  }
}
