import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ContactComponent } from "./components/contact.component";
import { ContactRoutingModule } from "./contact-routing.module";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule
    ]
})

export class ContactModule {

}