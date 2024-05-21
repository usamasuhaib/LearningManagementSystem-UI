import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-page-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './admin-page-header.component.html',
  styleUrl: './admin-page-header.component.css'
})
export class AdminPageHeaderComponent {

  faBell=faBell;
  faLogout=faPowerOff;

  faProfile=faGear;

  isOpen: boolean = false; // Flag to track toggle state


  ngOnInit(): void {
  }

  toggleOpen(): void {
    this.isOpen = true;
  }




  imagePath:string;
  constructor(private elementRef: ElementRef) {
    this.imagePath = 'assets/images/profile1.jpg';

   }
}
