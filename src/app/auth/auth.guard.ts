import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn,  mapToCanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service'; 



export function authenticationGuard(): CanActivateFn {
  return (route,state) => {
    const oauthService: AuthService = inject(AuthService);
    route: ActivatedRouteSnapshot
    state: RouterStateSnapshot
    const router: Router = inject(Router);
    
    if (oauthService.isAuthenticated() ) {
      return true;
      
    }
    router.navigate(['login'])
    return false;
  };
}
