import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:31326/api/users";

  constructor(
    private httpSvc: HttpClient
  ) { }

  list(): Observable<User[]>{ // Handles async, like Task from C#
    return this.httpSvc.get(`${this.baseurl}`) as Observable<User[]>;
  }
}
