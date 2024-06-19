import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faEdit, faTrash, faEye, faWarning } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../../../../../core/Models/student.model';
import { StudentService } from '../../../../../core/Services/student.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';
import { ClassService } from '../../../../../core/Services/class.service';
import { DeleteClassDialogComponent } from '../delete-class-dialog/delete-class-dialog.component';
import { Class } from '../../../../../core/Models/class.model';
import { ClassDto } from '../../../../../core/DTOs/class-dto.model';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AddClassDialogComponent, DeleteClassDialogComponent],
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent {
  faEdit=faEdit;
  faDelete=faTrash;
  faView=faEye;
  faWarning=faWarning;

  classList: ClassDto[] = [];


  constructor(
    public stdService: StudentService,
    private httpClient: HttpClient,
    private toaster: ToastrService,
    private title:Title,
    private router:Router,
    public classService:ClassService,
  
  ) { }

  ngOnInit() {

    console.log(this.classList)
    this.title.setTitle("Students List | School Management System")



    this.reloadClssList();

      // Subscribe to an event in your classService indicating that a class has been added successfully
  // this.classService.addClass.subscribe(() => {
  //   // Reload the list of classes after successfully adding a new class
  //   this.loadClasses();
  // });


  }

  reloadClssList(){

    this.classService.getClassList().subscribe((result) => {
      console.log(result);
      this.classList = result;
    },
      (err: Error) => {
        console.log(err.message);
      }
    )
}






  onEdit(id: any) {
    this.router.navigate(['admin/edit-std/' + id]);

  }

  addClass(){
    this.classService.showAddClassDialog=true;

  }


  onStudentDetails(id:number){
    return this.router.navigate(['admin/std-details/'+id]);
  }

  showDeleteDialog(id:number){

   this.classService.showDeleteClassDialog=true;
   this.classService.classId=id;
}


classDetails(id:any){

  // this.classService.classId=id;
  return this.router.navigate(['admin/class-details/'+id]);

}




}
