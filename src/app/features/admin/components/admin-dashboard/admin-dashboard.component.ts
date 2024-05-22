import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminPageHeaderComponent } from '../admin-page-header/admin-page-header.component';
import { AdminSidenavComponent } from '../admin-sidenav/admin-sidenav.component';
import { AdminMobileNavbarComponent } from '../admin-mobile-navbar/admin-mobile-navbar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminPageHeaderComponent, AdminSidenavComponent, AdminMobileNavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {


  
}
