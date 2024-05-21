import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChalkboardTeacher, faUserGraduate, faCog, faFileInvoiceDollar, faClipboardList, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-mobile-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './student-mobile-navbar.component.html',
  styleUrl: './student-mobile-navbar.component.css'
})
export class StudentMobileNavbarComponent {
  imagePath: string;
  faDashboard=faHome;
  faTeacher=faChalkboardTeacher;
  faStudents=faUserGraduate;
  faProfile=faCog;
  faBilling=faFileInvoiceDollar;
  faExam=faClipboardList
  faBar=faBars;
  faClose=faXmark;

  navDialog: HTMLElement | undefined;

  constructor(private elementRef: ElementRef, private route:Router) {
    this.imagePath = 'assets/images/SRPSD.png';

   }

  ngOnInit(): void {
    // Accessing the native DOM element using ElementRef
    this.navDialog = this.elementRef.nativeElement.querySelector('#navDialog');
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
}
