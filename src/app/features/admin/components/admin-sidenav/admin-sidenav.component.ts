import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faChalkboardTeacher, faChevronDown, faChevronRight, faClipboardList, faCog, faFileInvoiceDollar, faHome, faList, faPlus, faPowerOff, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidenav',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './admin-sidenav.component.html',
  styleUrl: './admin-sidenav.component.css'
})
export class AdminSidenavComponent {

  


  imagePath: string;
  faDashboard=faHome;
  faTeacher=faChalkboardTeacher;
  faStudents=faUserGraduate;
  faLogout=faPowerOff;

  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  faAdd=faPlus;
  faList=faList;

  faArrowDown=faCaretDown;

  faProfile=faCog;
  faBilling=faFileInvoiceDollar;
  faExam=faClipboardList


  navDialog: HTMLElement | undefined;

  constructor(private route:Router) {
    this.imagePath = 'assets/images/SRPSD.png';

   }


  isStudentMenuOpen = false;
  isTeacherMenuOpen = false;
  isExamMenuOpen=false;
  isSubjectMenuOpen=false;
  isClassMenuOpen=false;

  toggleMenu(menu: string) {
    switch (menu) {
      case 'student':
        this.isStudentMenuOpen = !this.isStudentMenuOpen;
        break;
      case 'teacher':
        this.isTeacherMenuOpen = !this.isTeacherMenuOpen;
        break;
      case 'subject':
        this.isSubjectMenuOpen = !this.isSubjectMenuOpen;
        break;
      case 'class':
        this.isClassMenuOpen = !this.isClassMenuOpen;
        break;
    }
  }

 

  stdList(){
    return this.route.navigate(['admin/std-list'])

  }

  AddStd(){
    return this.route.navigate(['admin/add-std']);
  }
  AddTeacher(){
    return this.route.navigate(['admin/add-teacher']);

  }
  stdReports() {
    // Navigate to student reports or handle the click event
  }



  handleMenu(){
    this.navDialog?.classList.toggle('hidden')
  }

  teacherList(){

    return this.route.navigate(['admin/teachers-list'])

  }

  classList(){
    return this.route.navigate(['admin/class-list'])

  }


  // AddSubject(){
  //   return this.route.navigate(['admin/add-subject']);
  // }


  subjectsList(){
    return this.route.navigate(['admin/subjects-list'])

  }
 

  dashboard(){
    return this.route.navigate(['admin/dashboard']);
  }

  logOut(){
    localStorage.removeItem('token')
    return this.route.navigate(['login']);
  }
}
