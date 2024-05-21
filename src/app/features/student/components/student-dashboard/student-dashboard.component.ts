import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentMainComponent } from '../student-main/student-main.component';
import { StudentPageHeaderComponent } from '../student-page-header/student-page-header.component';
import { StudentSidenavComponent } from '../student-sidenav/student-sidenav.component';
import { StudentMobileNavbarComponent } from '../student-mobile-navbar/student-mobile-navbar.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StudentPageHeaderComponent, StudentMainComponent, StudentSidenavComponent, StudentMobileNavbarComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

}
