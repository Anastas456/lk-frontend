import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserServiceService } from "./shared/services/user-service.service";


@Injectable()
export class isLoggedIn implements CanActivate {
    constructor(
        private userService: UserServiceService,
        private router: Router){}

    canActivate(){
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/auth'])
            return false;
        }
    }

}
