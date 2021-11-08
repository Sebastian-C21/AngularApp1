import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/core/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private usersService: UsersService,
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ){
      if(this.usersService.auth){
        console.log('guardian deja pasar')
        return true
      }else{
        console.log('guardian no deja pasar')
        this.router.navigate(['login']);
        return false
      }
  }
  
}
