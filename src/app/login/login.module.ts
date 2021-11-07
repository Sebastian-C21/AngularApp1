import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./components/login/login.component";
import { LoginRoutingModule } from "./login-routing.module";

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';







@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})

export class LoginModule {}