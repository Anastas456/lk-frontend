import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main-header',
  templateUrl: './dashboard-main-header.component.html',
  styleUrls: ['./dashboard-main-header.component.css']
})
export class DashboardMainHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onExit(){
    this.router.navigate(['/organizations'])
  }

}
