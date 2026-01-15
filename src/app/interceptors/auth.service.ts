import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface AuthService {
  isAuthenticated(): boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthServiceImpl implements AuthService {
    constructor(
        private readonly router: Router
    ) {}

    isAuthenticated(): boolean {
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        return !!user?.token;
    }
}