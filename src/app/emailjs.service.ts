import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() { }

  sendEmail(templateParams: any) {
    return emailjs.send('service_xki5kwr', 'template_2zczjol', templateParams, 'QBCL0kZbgk68iHL8Z');
  }
}
