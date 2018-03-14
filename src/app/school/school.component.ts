import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public schoolForm:FormGroup;

  constructor(private schoolFB: FormBuilder, private router:Router) { 

    this.schoolForm=this.schoolFB.group({

       'schoolName':['']

    });

  }

  //Navigate to Next Page
  btnNextWorkClick=function(){
    
    this.router.navigateByUrl('/work');
    this.onSchoolFormSubmit();
  }

  onSchoolFormSubmit(){

    console.log(this.schoolForm);
  }

  ngOnInit() {
  }

}
