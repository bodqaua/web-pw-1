import {AbstractControl, ValidationErrors, Validator} from "@angular/forms";

export class ForbiddenEmailValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    if ((control.value).includes('.ru') ){
      return {restrictedRusEmail: true};
    }
    return null;
  }
}
