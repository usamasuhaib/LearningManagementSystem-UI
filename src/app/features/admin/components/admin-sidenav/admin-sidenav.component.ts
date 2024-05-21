import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChalkboardTeacher, faClipboardList, faCog, faFileInvoiceDollar, faHome, faPowerOff, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidenav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './admin-sidenav.component.html',
  styleUrl: './admin-sidenav.component.css'
})
export class AdminSidenavComponent {

  


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
