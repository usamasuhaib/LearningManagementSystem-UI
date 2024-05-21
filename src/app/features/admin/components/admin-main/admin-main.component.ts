import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChalkboardTeacher, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons';

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


    constructor(){
  
    }
}
