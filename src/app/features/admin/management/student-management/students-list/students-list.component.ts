import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faEye, faRemove, faTrash, faWarning } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DltStdDialogComponent } from '../dlt-std-dialog/dlt-std-dialog.component';
import { Student } from '../../../../../core/Models/student.model';
import { StudentService } from '../../../../../core/Services/student.service';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [FontAwesomeModule, DltStdDialogComponent, CommonModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
  faEdit=faEdit;
  faDelete=faTrash;
  faView=faEye;
  faWarning=faWarning;

  stdList: Student[] = [];


  constructor(
    public stdService: StudentService,
    private httpClient: HttpClient,
    private toaster: ToastrService,
    private title:Title,
    private router:Router,
  
  ) {this.reloadStdList() }

  ngOnInit() {
    this.title.setTitle("Students List | School Management System")
    this.stdService.isStudentDeleted$.subscribe((isDeleted) => {
      if (isDeleted) {
        this.reloadStdList();
        this.stdService.resetDeletionState(); // Reset state
      }
    });

    // Initial data fetch (optional)
    this.reloadStdList();
  }
  onEdit(id: any) {
    this.router.navigate(['admin/edit-std/' + id]);

  }

  addStudent(){
    return this.router.navigate(['admin/add-std']);
  }


  onStudentDetails(id:any){
    return this.router.navigate(['admin/std-details/'+id]);
  }

  showDialog(id:any){

   this.stdService.showDialog=true;
   this.stdService.stdId=id;
}

  private reloadStdList(){

    this.stdService.getStudentsList().subscribe((result) => {
      console.log(result);
      this.stdList = result;

    },
      (err: Error) => {
        console.log(err.message);
      }
    )
  }


}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

