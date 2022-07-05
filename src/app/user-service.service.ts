import { Injectable } from '@angular/core';

import { User } from '../app/model/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;


  constructor(private http: HttpClient) { 
    this.usersUrl = 'https://gettoken13333.herokuapp.com/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
