import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SchoolComponent } from '../school/school.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() {
  
   console.log("Hello");

   }

  ngOnInit() {
  }

}
