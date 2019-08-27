import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.reactiveFormGroup = this.fb.group({
      fullName: ['Aniket', Validators.required],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
      jobType: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]

    }, { validator: this.matchingPasswords('password', 'confirmPassword') });

    // this.reactiveFormGroup.get('fullName').disable();

  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (confirmPassword.value) {
        if (password.value !== confirmPassword.value) {
          this.reactiveFormGroup.get('confirmPassword').setErrors({ mismatchedPasswords: true });
          return {
            mismatchedPasswords: true
          };
        } else {
          this.reactiveFormGroup.get('confirmPassword').setErrors(null);
        }
      }
    }
  }

  onSubmit() {
    if (this.reactiveFormGroup.invalid) {
      this.markAsTouched(this.reactiveFormGroup);
      alert('Please enter all the required information');
    } else {

    }
    console.log(this.reactiveFormGroup.getRawValue());
    console.log(this.reactiveFormGroup.controls['fullName'].value);
    console.log(this.reactiveFormGroup.get('fullName').value);

  }

  markAsTouched(form) {
    for (let controls in form.controls) {
      let control = form.get(controls)
      if (control instanceof FormControl) {
        control.markAsTouched();
        control.updateValueAndValidity();
      } else if (control instanceof FormGroup) {
        this.markAsTouched(control)
      } else if (control instanceof FormArray) {
        control.controls.forEach(c => {
          if (c instanceof FormGroup) {
            this.markAsTouched(c);
          }
        });
      }
    }
  }

}
