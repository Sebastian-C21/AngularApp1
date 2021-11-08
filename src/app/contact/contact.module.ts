import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldControl } from "@angular/material/form-field";
import { SharedModule } from "../shared/shared.module";
import { ContactComponent } from "./components/contact.component";
import { ContactRoutingModule } from "./contact-routing.module";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule
    ]
})

export class ContactModule {

}