import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';
import { User } from 'src/app/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
    ) {  
    this.loginForm = this.formBuilder.group({
      controlEmail: ['', [Validators.required, Validators.email]],
      controlPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
    // this.loginForm = new FormGroup({
    //   controlEmail: new FormControl(''),
    //   controlPassword: new FormControl('')
    // });
  }
  ngOnInit(): void {
  }


  identify(){
    const email = this.loginForm.value.controlEmail
    const password = this.loginForm.value.controlPassword

    console.log(email, typeof email);
    console.log(password, typeof password);

    this.user = this.usersService.getUser(email);

    console.log(this.user.email, this.user.password);

    if((this.user.email === email) && (this.user.password === password)){
      console.log('El usuario está autentificado');
      this.usersService.identified(true);
      this.router.navigate(['login']);
    }else{
      this.usersService.identified(false);
    }
    
  }
  
}
