import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../../../core/Services/student.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  imagePath:string;

  stdId:any;


  constructor(private activeRoute:ActivatedRoute, private stdService:StudentService, ){
    this.imagePath = 'assets/images/profile2.jpg';

  }


  stdDetails:any;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.stdId = params.get('id'); // Parse to number (optional)
      console.log(this.stdId);
    });

    this.stdService.getStudentById(this.stdId).subscribe((result)=>{
      this.stdDetails=result;
      console.log(result);
     
    },
  (error)=>{
    console.log(error.message);
  })
  }

}
