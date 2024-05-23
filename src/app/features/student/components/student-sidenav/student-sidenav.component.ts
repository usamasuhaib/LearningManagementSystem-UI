import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChalkboardTeacher, faUserGraduate, faCog, faFileInvoiceDollar, faClipboardList, faPowerOff, faBookSkull } from '@fortawesome/free-solid-svg-icons';

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
  faSubjects=faBookSkull


  navDialog: HTMLElement | undefined;

  constructor(private route:Router) {
    this.imagePath = 'assets/images/SRPSD.png';

   }

  handleMenu(){
    this.navDialog?.classList.toggle('hidden')
  }


 

  dashboard(){
    return this.route.navigate(['student/dashboard']);
  }

  mySubjects(){
    return this.route.navigate(['student/my-subjects']);
  }

  logOut(){
    localStorage.removeItem('token')
    return this.route.navigate(['login']);
  }
}
