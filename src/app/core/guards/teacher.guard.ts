import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { TeacherService } from '../Services/teacher.service';

export const teacherGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router)
  const _teacherService=inject(TeacherService)

  
  if (_teacherService.isTeacherLoggedIn()) {
    return true;
  }

  _router.navigate(['/login']); // Redirect to login on unauthorized access
  return false;


};
