import { CanActivateFn } from '@angular/router';

export const accountantGuard: CanActivateFn = (route, state) => {
  return true;
};
