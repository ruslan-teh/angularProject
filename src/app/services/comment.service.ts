import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpclient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpclient.get<IComment[]>(urls.comments);
  }
}
