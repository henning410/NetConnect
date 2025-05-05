import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const name = this.form.value.name;
      const email = this.form.value.email;
      const message = this.form.value.message;

      const subject = encodeURIComponent('Kontaktanfrage von ' + name);
      const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\nNachricht:\n${message}`);

      const mailtoLink = `mailto:henning1.weise@web.de?subject=${subject}&body=${body}`;

      // Open the default mail client
      window.location.href = mailtoLink;

      // Optionally reset the form
      this.form.reset();
      this.submitted = false;
    }
  }
}
