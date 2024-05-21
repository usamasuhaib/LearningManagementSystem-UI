import { CanActivateFn } from '@angular/router';

export const parentGuard: CanActivateFn = (route, state) => {
  return true;
};
