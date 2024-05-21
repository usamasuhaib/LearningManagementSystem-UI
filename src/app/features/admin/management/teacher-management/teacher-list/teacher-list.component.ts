import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faEye, faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrIconClasses, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Teacher } from '../../../../../core/Models/teacher.model';
import { TeacherService } from '../../../../../core/Services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})

export class TeacherListComponent {


  teachersList: Teacher[] = [];


  constructor(
    private teacherService: TeacherService,
    private httpClient: HttpClient,
    private router:Router, 
    private toaster: ToastrService,
    private title:Title,

  ) { }

  ngOnInit() {
    this.title.setTitle("Teachers List | School Management System")
    // this.teacherService.getTeachersList().subscribe(
    //   (data: Teacher[]) => {
    //     this.teachersList = data;

    //     console.log(this.teachersList);
    //   },
    //   (error) => {
    //     console.error('Failed to fetch teacher details', error);
    //   }
    // );

    this.loadTeachers();
  }



  showDialog(id:any){


}


  
  onEdit(id: any) {
    this.router.navigate(['admin/edit-std/' + id]);

  }

  onDelete(id: any) {

    this.teacherService.deleteTeacher(id).subscribe((result) => {

      this.toaster.success("Record deleted successfully");
      
      this.refreshComponent();


    },
      (err: Error) => {
        console.log(err.message)
        this.toaster.error("Failed to delete record")

      }
    )

  }


  faEdit=faEdit;
  faDelete=faTrash;
  faView=faEye;


  teacherForm(){

    return this.router.navigate(['admin/add-teacher']);
  }
  
  onTeacherDetails(id:any){
    return this.router.navigate(['admin/teacher-details/'+id]);
  }



  private refreshComponent(){
    this.router.navigate(['admin/teachers-list']);

  }
  
  private loadTeachers(){



    this.teacherService.getTeachersList().subscribe((result) => {
      console.log(result);
      this.teachersList = result;

    },
      (err: Error) => {
        console.log(err.message);
      }
    )
  }
}
