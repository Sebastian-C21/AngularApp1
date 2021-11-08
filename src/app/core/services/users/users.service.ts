import { Injectable } from '@angular/core';
import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User;
  users: User[] = [
    {
      email: 'juan@cat.com',
      password: '12345678'
    }
  ];
  auth: boolean;
  constructor() { }

  getUser(email: string){
    let user = this.users.find(item => email === item.email)

    this.user = {
      email: user?.email!,
      password: user?.password!
    }
    return this.user;
  }

  identified(identity: boolean){
    this.auth = identity;
    console.log(identity);
  }

  

}
