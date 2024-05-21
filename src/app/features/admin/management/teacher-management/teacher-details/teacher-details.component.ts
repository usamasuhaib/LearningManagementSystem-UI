import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherService } from '../../../../../core/Services/teacher.service';

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css'
})
export class TeacherDetailsComponent {

  imagePath:string;

  teacherId:any;


  constructor(private activeRoute:ActivatedRoute, private teacherService:TeacherService, ){
    this.imagePath = 'assets/images/profile2.jpg';

  }


  teacherDetails:any;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.teacherId = params.get('id'); // Parse to number (optional)
      console.log(this.teacherId);
    });

    this.teacherService.getTeacherById(this.teacherId).subscribe((result)=>{
      this.teacherDetails=result;
      console.log(result);
     
    },
  (error)=>{
    console.log(error.message);
  })
  }





}
