import { Component, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-page-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './student-page-header.component.html',
  styleUrl: './student-page-header.component.css'
})
export class StudentPageHeaderComponent {
  faBell=faBell;
  faLogout=faPowerOff;

  faProfile=faGear;



  imagePath:string;
  constructor(private elementRef: ElementRef) {
    this.imagePath = 'assets/images/profile1.jpg';

   }
}
