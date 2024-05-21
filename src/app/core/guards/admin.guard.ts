import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  
  const _router=inject(Router)
  const _adminService=inject(AdminService)

  
  if (_adminService.isAdminLoggedIn()) {
    return true;
  }

  _router.navigate(['/login']); // Redirect to login on unauthorized access
  return false;


};
