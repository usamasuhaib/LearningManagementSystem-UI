import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TeacherService } from '../../../../core/Services/teacher.service';

@Component({
  selector: 'app-teacher-main',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './teacher-main.component.html',
  styleUrl: './teacher-main.component.css'
})
export class TeacherMainComponent {
faStudents=faUsers;

subjects?: any[];
subjectCount?: number;

constructor(private teacherService:TeacherService){

}

ngOnInit(){


  this.reCountSubjects()
}


private reCountSubjects(){
this.teacherService.getTeacherSubjects().subscribe(    (response) => {
  this.subjects = response.subjects;
  this.subjectCount = response.subjectCount;
},
(error) => {
  console.error('Error fetching subjects:', error);
}
);
}

}
