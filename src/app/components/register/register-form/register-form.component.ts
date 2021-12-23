import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ForbiddenEmailValidator} from "../../../shared/validators/forbidden-email.validator";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  get skillsFormArrayIterable(): FormArray {
    return this.form.get("skills") as FormArray;
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
    console.log(this.form.value);
    this.form.reset()
  }

  public isControlHasError(controlName: string, errorType: string): boolean {
    const control = this.form.get(controlName);

    if (!control) {
      return false;
    }
    const isControlInvalid = control.touched && control.invalid;

    return isControlInvalid && control.errors?.[errorType];
  }

  public setCapital() {
    const mapCity = {
      ua: "Киев",
      pl: "Варшава",
      de: "Берлин"
    }

    const city = this.form.get('address')?.value.country

    if (!city || !(city in mapCity)) {
      return;
    }

    // @ts-ignore
    this.form.get('address')?.patchValue({city: mapCity[city]});
  }

  public addSkill(): void {
    const control = new FormControl('', Validators.required);
    this.skillsFormArrayIterable.push(control);
  }

  public removeSkill(index: number): void {
    this.skillsFormArrayIterable.removeAt(index);
  }

  private initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required, new ForbiddenEmailValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.fb.group({
        country: ['ua'],
        city: ['Запорожье', Validators.required]
      }),
      skills: this.fb.array([])
    });
  }

}
