import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from 'src/app/shared/models/vacancy.model';
import { OrganizationServiceService } from 'src/app/shared/services/organization-service.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  id:number;
  vacancy: Vacancy;

  constructor(
    private activatedRoute: ActivatedRoute,
    private organizationService:OrganizationServiceService
  ) { 
    this.activatedRoute.params.subscribe(params =>{
      if (params.id !==null && params.id!==undefined){
      this.id=+params.id;
    }
    else{
      this.id=null;
    }
  })
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    if(this.id !==null && this.id !==undefined){
      try{
        let vacancy=this.organizationService.getOneVacancy(this.id);
        this.vacancy= await vacancy;
      }
      catch(err){
        console.error(err);
      }
    
    }
  }

}
