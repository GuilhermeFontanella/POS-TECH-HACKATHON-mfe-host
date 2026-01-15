import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserSessionService } from './user-session.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private session: UserSessionService,
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.session.getUser();
        let authReq = req;

        if (user && user.token) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${user.token}` }
            });
        }
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.session.clearUser();
                    this.router.navigate(['/login']);
                }
                return throwError(() => error);
            })
        );
    }
}
