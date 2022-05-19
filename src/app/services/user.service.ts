import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../models";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users);
  }
}
