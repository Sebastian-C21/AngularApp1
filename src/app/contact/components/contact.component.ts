import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  infoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.infoForm = this.formBuilder.group({
      infoEmail: ['', [Validators.required, Validators.email]],
      infoName: ['', [Validators.required, Validators.minLength(8)]],
      infoText: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

}
