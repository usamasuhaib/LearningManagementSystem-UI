import { Component } from '@angular/core';
import { AssignTeacherToSubjectDto } from '../../../../../core/DTOs/assign-teacher-to-subject-dto.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssignClassToSubjectDto } from '../../../../../core/DTOs/assign-class-to-subject-dto.model';
import { ClassService } from '../../../../../core/Services/class.service';
import { StudentService } from '../../../../../core/Services/student.service';
import { SubjectService } from '../../../../../core/Services/subject.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCross } from '@fortawesome/free-solid-svg-icons';
import { Teacher } from '../../../../../core/Models/teacher.model';
import { TeacherService } from '../../../../../core/Services/teacher.service';

@Component({
  selector: 'app-assign-teacher-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './assign-teacher-dialog.component.html',
  styleUrl: './assign-teacher-dialog.component.css'
})
export class AssignTeacherDialogComponent {
  id: any;
  classId: any;
  teachersList: Teacher[] = [];
  faClose=faClose;
  addTeacherToSubject?: AssignTeacherToSubjectDto;

  addSubjectToClass:any;

  constructor(private activeRoute: ActivatedRoute, private subjectService: SubjectService, public classService: ClassService, private toaster: ToastrService, private router: Router, private stdService: StudentService, private formBuilder: FormBuilder, private teacherService:TeacherService) {

  }

  ngOnInit() {
    this.id = this.stdService.stdId;
    this.classId = this.activeRoute.snapshot.paramMap.get('id');

    // this.assignTeacherForm.patchValue({ subjectId: this.classService.subjectId });

    this.reloadTeachers();
    console.log("Subject Id "+this.classService.subjectId);

  }

  assignTeacherForm = this.formBuilder.group({
    teacherId: [],
  });

  hideDialog() {

    this.stdService.showDialog = false;
  }



  onSubmit() {
    console.log(this.assignTeacherForm.value);

      const data: AssignTeacherToSubjectDto = {

        subjectId: this.classService.subjectId,
        teacherId: this.assignTeacherForm.value.teacherId,

      }
      this.subjectService.assignTeacherToSubject(data).subscribe((res) => {

        this.classService.showAsignTeacherDialog=false;

      });
    
  }

  private reloadTeachers() {
    this.teacherService.getTeachersList().subscribe(res => {
      this.teachersList = res;
    });
  }

}
