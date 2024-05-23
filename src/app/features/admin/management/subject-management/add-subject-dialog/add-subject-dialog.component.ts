import { Component } from '@angular/core';
import { SubjectDto } from '../../../../../core/DTOs/subject-dto.model';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from '../../../../../core/Services/class.service';
import { StudentService } from '../../../../../core/Services/student.service';
import { SubjectService } from '../../../../../core/Services/subject.service';
import { TeacherService } from '../../../../../core/Services/teacher.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-add-subject-dialog',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './add-subject-dialog.component.html',
  styleUrl: './add-subject-dialog.component.css'
})
export class AddSubjectDialogComponent {
  id: any;
  classId: any;
  faClose=faClose;

  addSubjectToClass:any;

  constructor(private activeRoute: ActivatedRoute, public subjectService: SubjectService, public classService: ClassService, private toaster: ToastrService, private router: Router, private stdService: StudentService, private formBuilder: FormBuilder, private teacherService:TeacherService) {

  }

  ngOnInit() {

  }

  addSubjectForm = this.formBuilder.group({
    subjectName: [''],
  });

  hideDialog() {

    this.stdService.showDialog = false;
  }

  onSubmit() {
    console.log(this.addSubjectForm.value);

    if(this.addSubjectForm.valid){
      const data:SubjectDto={
        subjectName:this.addSubjectForm.value.subjectName!,
  
      }
      this.subjectService.addSubject(data).subscribe((res)=>{
        console.log(res.result);
        var result=res.result;
        this.subjectService.showAddSubjectDialog=false;
        this.router.navigate(['admin/subjects-list'])   
      }
    )
    }
    else{
      console.log("invalid payload");

    }
    
  }

}
