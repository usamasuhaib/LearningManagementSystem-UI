import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../../../../core/Services/student.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Class } from '../../../../../core/Models/class.model';
import { ClassService } from '../../../../../core/Services/class.service';
import { ClassDto } from '../../../../../core/DTOs/class-dto.model';

@Component({
  selector: 'app-add-class-dialog',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-class-dialog.component.html',
  styleUrl: './add-class-dialog.component.css'
})
export class AddClassDialogComponent {
  id:string="";
  constructor(private classService:ClassService, private toaster:ToastrService, private router:Router, private stdService:StudentService , private formBuilder:FormBuilder){

  }

  ngOnInit(){
    this.id=this.stdService.stdId;

  }

  hideDialog(){

    this.stdService.showDialog=false;
  }
  
  faWarning=faWarning;
  
  

  addClassForm = this.formBuilder.group({
    className:['',Validators.required],
  });

  onSubmit(){
    console.log(this.addClassForm.value);

    if(this.addClassForm.valid){
      const data:ClassDto={
        className:this.addClassForm.value.className!,
  
      }
      this.classService.addClass(data).subscribe((res)=>{
        console.log(res.result);
        var result=res.result;
        this.classService.showAddClassDialog=false;
        this.router.navigate(['admin/class-list'])   
      }
    )
    }
    else{
      console.log("invalid payload");

    }

  }



 

}
