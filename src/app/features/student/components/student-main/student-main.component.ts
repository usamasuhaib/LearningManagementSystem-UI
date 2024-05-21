import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-main',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './student-main.component.html',
  styleUrl: './student-main.component.css'
})
export class StudentMainComponent {
  faStudents=faUsers;

}
