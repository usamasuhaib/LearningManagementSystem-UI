import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose, faWarning } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../../../../../core/Models/subject.model';

import { AssignClassToSubjectDto } from '../../../../../core/DTOs/assign-class-to-subject-dto.model';
import { ClassService } from '../../../../../core/Services/class.service';
import { StudentService } from '../../../../../core/Services/student.service';
import { SubjectService } from '../../../../../core/Services/subject.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-assign-subject-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './assign-subject-dialog.component.html',
  styleUrl: './assign-subject-dialog.component.css'
})
export class AssignSubjectDialogComponent {

  id: any;
  classId: any;
  subjectsList: Subject[] = [];

  faClose=faClose;
  addClassToSubject?: AssignClassToSubjectDto;

  addSubjectToClass:any;

  constructor(private activeRoute: ActivatedRoute, public subjectService: SubjectService, public classService: ClassService, private toaster: ToastrService, private router: Router, private stdService: StudentService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.id = this.stdService.stdId;
    this.classId = this.activeRoute.snapshot.paramMap.get('id');

    this.assignSubjectForm.patchValue({ classId: this.classId });

    this.reloadSubjects();
    console.log(this.classId);
  }

  assignSubjectForm = this.formBuilder.group({
    subjectId: [null],
    classId: [null],
  });

  hideDialog() {

    this.stdService.showDialog = false;
  }

  faWarning = faWarning;


  onSubmit() {
    console.log(this.assignSubjectForm.value);

      const data: AssignClassToSubjectDto = {

        classId: this.classId,
        subjectId: this.assignSubjectForm.value.subjectId,

      }
      this.subjectService.assignClassToSubject(data).subscribe((res) => {

        this.classService.showAsignSubjectDialog=false;

        this.reloadSubjects();
        // this.router.navigate(['admin/class-details/'+this.classId])
      });
    
  }

  private reloadSubjects() {
    this.subjectService.getSubjectsList().subscribe(res => {
      this.subjectsList = res;
    });
  }


}
