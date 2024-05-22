import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { StudentService } from '../../../../../core/Services/student.service';
import { ClassService } from '../../../../../core/Services/class.service';

@Component({
  selector: 'app-delete-class-dialog',
  standalone: true,
  imports: [ToastrModule, FontAwesomeModule, CommonModule],
  templateUrl: './delete-class-dialog.component.html',
  styleUrl: './delete-class-dialog.component.css'
})
export class DeleteClassDialogComponent {
  id?:number;
  constructor( private toaster:ToastrService, private router:Router, private classService:ClassService ){

  }

  ngOnInit(){
    this.id=this.classService.classId;

  }

  hideDialog(){

    this.classService.showDeleteClassDialog=false;
  }
  
  faWarning=faWarning;
  
  
  confirmDeletion() {
      // this.classService.deleteClass(this.id).subscribe((result) => {
      //   console.log(result);
      //   this.classService.showDeleteClassDialog = false;
      //   this.router.navigate(['admin/class-list'])

      // },
      //   (err: Error) => {
      //     console.log(err.message)
      //     this.toaster.error("Failed to delete record")
  
      //   }
      // ) 
    }
}
