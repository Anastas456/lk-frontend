import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user=JSON.parse(localStorage.getItem('user'))

  constructor() { }

  ngOnInit(): void {
  }

}
