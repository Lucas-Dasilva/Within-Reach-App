import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let ApiService = class ApiService {
    constructor() {
        this.users = [
            { name: "Lucas" },
            { name: "Jack" },
            { name: "JackColby" }
        ];
    }
    getUsers() {
        return of(this.users);
    }
    addUser(name) {
        this.users = [...this.users, { name }];
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map