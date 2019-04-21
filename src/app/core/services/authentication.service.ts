import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { LocalStorageDataService } from '../../shared/services/data-local-storage.service'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    currentUser: IUser;
    redirectUrl: string;

    constructor(private localStorageDataService: LocalStorageDataService) { }

    isLoggedIn(): boolean {
        if (this.localStorageDataService.getItemFromLocalStorage('currentUser')) {
            return true;
        }
        return true;
    }

    login(userName: string, password: string): boolean {
        if (!userName || !password) {
            return false;
        }
       this.localStorageDataService.setItemToLocalStorage('currentUser',userName);
       return  true;
    
    }

    logout(): void {
        this.localStorageDataService.removeItemFromLocalStorage('currentUser')
    }
}
