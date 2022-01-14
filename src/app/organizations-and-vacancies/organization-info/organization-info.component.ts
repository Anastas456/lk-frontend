import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organization } from 'src/app/shared/models/organization.model';
import { OrganizationServiceService } from 'src/app/shared/services/organization-service.service';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css']
})
export class OrganizationInfoComponent implements OnInit {

  organization: Organization;
  id:number;

  constructor(
    private activaredRoute: ActivatedRoute,
    private organizationService: OrganizationServiceService
  ) {
    this.activaredRoute.params.subscribe(params =>{
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
        let organization=this.organizationService.getOneOrganization(this.id);
        this.organization= await organization;
      }
      catch(err){
        console.error(err);
      }
    }
  }

}
