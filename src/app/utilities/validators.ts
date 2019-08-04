import { AbstractControl } from '@angular/forms';

export const validateWhitespace = (control: AbstractControl) => {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;

  return isValid ? null : { trimmed: true };
};
