import { inject, Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { AuthServiceImpl } from './auth.service';

@Injectable({ providedIn: 'root' })
export class authGuard implements CanActivate {
    private authService = inject(AuthServiceImpl);
    private router = inject(Router);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        return this.router.parseUrl('/login');
    }
}
