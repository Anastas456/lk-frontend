import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // token:any;
  // user:any;

  constructor(private http: HttpClient) {  }


  loginUser(userData: any): Observable<any>{
    return this.http.post('http://career-api.std-950.ist.mospolytech.ru/api/login', userData, {headers: new HttpHeaders({
      'Accept': 'application/json',
      'x-requested-with': 'XMLHttpRequest'
      // 'Content-Type': 'application/x-www-form-urlencoded'
    })});
  }

  storeUser(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    // this.token=token;
    // this.user= user;
    
  }

  restoreUser(user){
    // localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
    // this.user = user;
  }

  logoutUser(){
    // this.token=null;
    // this.user=null;
    localStorage.clear();
  }

  // isLoggedIn(){
  //   return tokenNotExpired();
  // }
  isLoggedIn(){
    if (localStorage.getItem('token')){
      return true
    }
    else {
      return false
    }
  }

  updateUser(id:any, data:any): Observable<any>{
    return this.http.put( `http://career-api.std-950.ist.mospolytech.ru/api/users/${id}`, data, {headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })})
  }

  deleteUser(id:any): Observable<any>{
    return this.http.delete(`http://career-api.std-950.ist.mospolytech.ru/api/users/${id}`, {headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })})
  }


}
