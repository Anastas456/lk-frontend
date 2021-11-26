import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any>{
    return this.http.post('', userData);  //добавить путь
  }

}
