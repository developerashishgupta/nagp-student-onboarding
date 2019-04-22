import { Injectable } from '@angular/core';
import { LocalStorageDataService } from '../../shared/services/data-local-storage.service'
import {  Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    redirectUrl: string = '/dashboard';

    constructor(private localStorageDataService: LocalStorageDataService, private router:Router) { }

    isLoggedIn(): boolean {
        if (this.localStorageDataService.getItemFromLocalStorage('currentUser')) {
            return true;
        }
        return false;
    }

    login(userName: string, password: string) {
        if (!userName || !password) {
            return;
        }
       this.localStorageDataService.setItemToLocalStorage('currentUser',userName);
       this.router.navigateByUrl(this.redirectUrl);
    }

    getLoggedInUser(){
        return this.localStorageDataService.getItemFromLocalStorage('currentUser');
    }

    logout(): void {
        this.redirectUrl='/dashboard';
        this.localStorageDataService.removeItemFromLocalStorage('currentUser')
    }
}
