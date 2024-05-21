import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherSideNavComponent } from '../teacher-side-nav/teacher-side-nav.component';
import { TeacherMobileNavbarComponent } from '../teacher-mobile-navbar/teacher-mobile-navbar.component';
import { TeacherPageHeaderComponent } from '../teacher-page-header/teacher-page-header.component';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TeacherDashboardComponent, TeacherSideNavComponent, TeacherMobileNavbarComponent, TeacherMobileNavbarComponent, TeacherPageHeaderComponent],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent {

}
