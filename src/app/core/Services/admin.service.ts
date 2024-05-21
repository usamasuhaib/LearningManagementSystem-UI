import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private authService:AuthenticationService) { }



  isAdminLoggedIn(): boolean {
    const token = localStorage.getItem('token'); // Replace with your token storage mechanism

    // Check for valid token and "Admin" role
    return !!token && this.authService.decodeToken(token)?.role === 'Admin';
  }

  



}
