import { AbstractControl } from '@angular/forms';
import * as md5 from 'url-validation';
export function cvalidate(control: AbstractControl): {
    [key: string]: boolean
} | null {
    if (!md5(control.value)) {
        return { "name1": true };
    } else {
        return null;
    }
    // console.log(md5('http://h3lloW0r.com'));
}