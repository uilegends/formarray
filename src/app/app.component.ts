import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

// import { cvalidate } from './urlvalidate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'uilegendsproject';
  register: FormGroup;
  isSubmitted: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      itemProfile: this.formBuilder.array([this.itemProfile()])
    });
  }

  itemProfile() {
    return this.formBuilder.group({
      sex: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  public addRow() {
    const control = <FormArray>this.register.controls['itemProfile'];
    control.push(this.itemProfile());
  }

  removeGroup(i: number) {
    // remove address from the list
    const control = <FormArray>this.register.controls['itemProfile'];
    control.removeAt(i);
  }

  get profileControl() {
    return this.register.get('itemProfile')['controls'];
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.register.invalid) {
      return false;
    } else {
      const profileCost = this.register.value;
      console.log(profileCost);
    }
  }

  get name() {
    return this.register.get('name');
  }

}
