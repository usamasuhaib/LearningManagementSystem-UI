import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChalkboardTeacher, faUserGraduate, faCog, faFileInvoiceDollar, faClipboardList, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-side-nav',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './teacher-side-nav.component.html',
  styleUrl: './teacher-side-nav.component.css'
})
export class TeacherSideNavComponent {



  imagePath: string;
  faDashboard=faHome;
  faTeacher=faChalkboardTeacher;
  faStudents=faUserGraduate;

  faProfile=faCog;
  faBilling=faFileInvoiceDollar;
  faExam=faClipboardList
  faLogout=faPowerOff;


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
