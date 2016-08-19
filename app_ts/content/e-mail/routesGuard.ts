import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserServiceComponent} from "../../service/user.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: UserServiceComponent, private router: Router) {}

  canActivate() {
    if(!this.authService.user.isLoggin) this.router.navigate(['/login']);
    return this.authService.user.isLoggin;
  }
}
