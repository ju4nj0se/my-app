import { Injectable } from '@angular/core';

import { User } from '../app/model/user';
import { Sede } from '../app/model/sede.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // private baseUrl: String;
  private usersUrl: string;

  private sedeUrl: string;


  constructor(private http: HttpClient) { 
    //this.baseUrl = 'http://localhost:8080/api/';
    this.usersUrl = 'http://localhost:8080/api/participantes';
    this.sedeUrl = 'http://localhost:8080/api/sede';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


  public findAllSede(): Observable<Sede[]> {
    return this.http.get<Sede[]>(this.sedeUrl);
  }


  

  public save(user: User) {
  //  public save(user: any) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
