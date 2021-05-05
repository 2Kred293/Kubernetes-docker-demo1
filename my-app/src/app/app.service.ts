import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Tutorial } from './models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8080/api/tutorials';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  //added newly
  // getUsers():  Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(this.rootURL + '/users');
  // }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', user);
  }

}
