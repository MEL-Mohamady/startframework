import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userType:String = '';
  userAge:String = '';
  userMail:String= '';
  userPass:string='';


}
