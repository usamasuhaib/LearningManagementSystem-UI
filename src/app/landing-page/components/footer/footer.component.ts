import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  imagePath: string;

  constructor(){
    this.imagePath = 'assets/images/SRPSD.png';

  }
}
