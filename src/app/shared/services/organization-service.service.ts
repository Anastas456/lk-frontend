import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://career-api.std-950.ist.mospolytech.ru/api';

@Injectable({
  providedIn: 'root'
})
export class OrganizationServiceService {

  constructor(private http:HttpClient) {}
  
  
  getOrganizations():Observable<any>{
      return this.http.get(`${baseUrl}/organizations`, {headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })});
    }

  getOrganizationById(id:number):Observable<any>{
    return this.http.get(`${baseUrl}/organizations/${id}`, {headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })});
  }
  getOneOrganization(id:number):Promise<any>{
    return this.getOrganizationById(id).toPromise()
  }
  
  getVacanciesList():Observable<any>{
    return this.http.get(`${baseUrl}/vacancies`, {headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })});
  }

  getVacancyById(id:number):Observable<any>{
    return this.http.get(`${baseUrl}/vacancies/${id}`, {headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })});
  }
  getOneVacancy(id:number):Promise<any>{
    return this.getVacancyById(id).toPromise()
  }
  
}
