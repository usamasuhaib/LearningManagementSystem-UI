import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imagePath: string;


  faBar=faBars;
  faClose=faXmark;

  navDialog: HTMLElement | undefined;

  constructor(private elementRef: ElementRef, private router:Router) {
    this.imagePath = 'assets/images/SRPSD.png';

   }

  ngOnInit(): void {
    // Accessing the native DOM element using ElementRef
    this.navDialog = this.elementRef.nativeElement.querySelector('#navDialog');
  }
  handleMenu(){
    this.navDialog?.classList.toggle('hidden')
  }


  onLogin(){
this.router.navigate(['/login'])
  }
}
