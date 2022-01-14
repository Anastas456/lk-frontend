import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationServiceService } from 'src/app/shared/services/organization-service.service';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent implements OnInit {

  vacansiesList:any=[]
  
  constructor(
    private organizationService: OrganizationServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.organizationService.getVacanciesList().subscribe(
      data => {
        this.vacansiesList=data;
      },
      error => {
        console.log(error);
      });
  }

  onVacancy(id:number){
    this.router.navigate([this.router.url, 'vacancy', id]);
  }

}
