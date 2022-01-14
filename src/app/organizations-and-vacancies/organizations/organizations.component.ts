import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationServiceService } from 'src/app/shared/services/organization-service.service';


@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  constructor(private organizationService: OrganizationServiceService,
    private router: Router) { }

  organizationList: any=[]

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.organizationService.getOrganizations().subscribe(
      data => {
        this.organizationList=data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onMoreInfo(id:number){
    this.router.navigate([this.router.url, 'organization-info', id]);
  }

}
