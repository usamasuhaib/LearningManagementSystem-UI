import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-main',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './teacher-main.component.html',
  styleUrl: './teacher-main.component.css'
})
export class TeacherMainComponent {
faStudents=faUsers;
}
