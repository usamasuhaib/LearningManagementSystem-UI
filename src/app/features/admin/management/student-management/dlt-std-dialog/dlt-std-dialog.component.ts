import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { StudentService } from '../../../../../core/Services/student.service';

@Component({
  selector: 'app-dlt-std-dialog',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ToastrModule],
  templateUrl: './dlt-std-dialog.component.html',
  styleUrl: './dlt-std-dialog.component.css'
})
export class DltStdDialogComponent {
  id:string="";
  constructor( private toaster:ToastrService, private router:Router, private stdService:StudentService ){

  }

  ngOnInit(){
    this.id=this.stdService.stdId;

  }

  hideDialog(){

    this.stdService.showDialog=false;
  }
  
  faWarning=faWarning;
  
  
  confirmDeletion() {
      this.stdService.deleteStudent(this.id).subscribe((result) => {
        console.log(result);
        this.toaster.success("Record deleted Success")
        this.stdService.showDialog = false;
        this.stdService.markStudentDeleted(); // Mark deletion

      },
        (err: Error) => {
          console.log(err.message)
          this.toaster.error("Failed to delete record")
  
        }
      ) 
    }
}
