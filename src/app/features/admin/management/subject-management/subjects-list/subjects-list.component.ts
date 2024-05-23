import { Component } from '@angular/core';
import { SubjectService } from '../../../../../core/Services/subject.service';
import { CommonModule } from '@angular/common';
import { AddSubjectDialogComponent } from '../add-subject-dialog/add-subject-dialog.component';
import { DeleteSubjectDialogComponent } from '../delete-subject-dialog/delete-subject-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faEdit, faTrash, faEye, faWarning } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ClassDto } from '../../../../../core/DTOs/class-dto.model';
import { ClassService } from '../../../../../core/Services/class.service';
import { Subject } from '../../../../../core/Models/subject.model';

@Component({
  selector: 'app-subjects-list',
  standalone: true,
  imports: [CommonModule, AddSubjectDialogComponent, DeleteSubjectDialogComponent, FontAwesomeModule],
  templateUrl: './subjects-list.component.html',
  styleUrl: './subjects-list.component.css'
})
export class SubjectsListComponent {

  faEdit=faEdit;
  faDelete=faTrash;
  faView=faEye;
  faWarning=faWarning;

  subjectsList: Subject[] = [];


  constructor(
    public subjectService: SubjectService,
    private httpClient: HttpClient,
    private toaster: ToastrService,
    private title:Title,
    private router:Router,
    public classService:ClassService,
  
  ) { }

  ngOnInit() {
    this.title.setTitle("Subjects List | School Management System")

    // Initial data fetch (optional)
    this.reloadSubjectsList();
  }

  onEdit(id: any) {
    this.router.navigate(['admin/edit-std/' + id]);

  }

  addSubject(){

    this.subjectService.showAddSubjectDialog=true;
    // this.stdService.showDialog=true;

    // this.classService.showAddClassDialog=true;
  }


  onStudentDetails(id:any){
    return this.router.navigate(['admin/std-details/'+id]);
  }

  showDeleteDialog(id:any){

   this.classService.showDeleteClassDialog=true;
   this.classService.classId=id;
}

  private reloadSubjectsList(){

    this.subjectService.getSubjectsList().subscribe((result) => {
      console.log(result);
      this.subjectsList = result;
    },
      (err: Error) => {
        console.log(err.message);
      }
    )
}


}
