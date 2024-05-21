import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChalkboardTeacher, faUserGraduate, faCog, faFileInvoiceDollar, faClipboardList, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-sidenav',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './student-sidenav.component.html',
  styleUrl: './student-sidenav.component.css'
})
export class StudentSidenavComponent {



  imagePath: string;
  faDashboard=faHome;
  faTeacher=faChalkboardTeacher;
  faStudents=faUserGraduate;
  faLogout=faPowerOff;

  faProfile=faCog;
  faBilling=faFileInvoiceDollar;
  faExam=faClipboardList


  navDialog: HTMLElement | undefined;

  constructor(private route:Router) {
    this.imagePath = 'assets/images/SRPSD.png';

   }

  handleMenu(){
    this.navDialog?.classList.toggle('hidden')
  }

  teacherList(){

    return this.route.navigate(['admin/teachers-list'])

  }
  stdList(){
    return this.route.navigate(['admin/std-list'])

  }

  dashboard(){
    return this.route.navigate(['admin/dashboard']);
  }

  logOut(){
    localStorage.removeItem('token')
    return this.route.navigate(['login']);
  }
}
