import { Component, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-page-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './teacher-page-header.component.html',
  styleUrl: './teacher-page-header.component.css'
})
export class TeacherPageHeaderComponent {

  faBell=faBell;
  faLogout=faPowerOff;

  faProfile=faGear;



  imagePath:string;
  constructor(private elementRef: ElementRef) {
    this.imagePath = 'assets/images/profile1.jpg';

   }
}
