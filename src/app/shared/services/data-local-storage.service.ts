import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageDataService {

    constructor() {
    }

    public setItemToLocalStorage(key: string, value: any): void {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    public getItemFromLocalStorage(key: string): any {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    public removeItemFromLocalStorage(key:string): void {
        localStorage.removeItem(key)
    }

}
