import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChalkboardTeacher, faUserAltSlash, faUserFriends, faUserGraduate, faUserGroup, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../../../core/Services/student.service';
import { TeacherService } from '../../../../core/Services/teacher.service';

@Component({
  selector: 'app-admin-main',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.css'
})
export class AdminMainComponent {
  faTeacher=faChalkboardTeacher;
  faStudents=faUserGraduate;
  faUsers=faUserGroup;


  fastds=faUsers

  faTchs=faUserFriends

  stdCount:any;
  teacherCount:any;

  
  ngOnInit(){

    this.reCountStudent()
    this.reCountTeacher();
  }

    constructor(private stdService:StudentService, private teacherService:TeacherService){
  
    }


    private reCountTeacher(){

      this.teacherService.getTeachersCount().subscribe(res=>{
        this.teacherCount=res;
      });
    }

    private reCountStudent(){

      this.stdService.getStudentsCount().subscribe(res=>{
this.stdCount=res;
      });
    }

    
}
