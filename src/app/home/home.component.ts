import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeForm:FormGroup;

  constructor(private schoolFB: FormBuilder, private router:Router) { 

    this.homeForm=this.schoolFB.group({

       'homeName':['']

    });

  }

    //Navigate to Next Page
    btnNextHomeClick=function(){
    
      this.router.navigateByUrl('/school');
      this.onHomeFormSubmit();
    }
  
    onHomeFormSubmit(){
  
      console.log(this.homeForm);
    }

  ngOnInit() {
  }

}
